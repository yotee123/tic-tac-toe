import React, { useState } from "react";
import { calculateWinner } from "./helper";
import Board from "./Board";
import Button from "@material-ui/core/Button";
import "./Game.css";
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };
  //   const jumpTo = (step) => {
  //     setStepNumber(step);
  //     setXisNext(step % 2 === 0);
  //   };

  return (
    <>
      <h1>React js Tic Tac Toe!!!!!!</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <h2 style={{ color: "blue", textAlign: "center", paddingTop: "0.7em" }}>
          {winner && "Winner: " + winner + "!"}
        </h2>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            window.location.reload();
          }}
        >
          restart Game
        </Button>
      </div>
    </>
  );
};

export default Game;
