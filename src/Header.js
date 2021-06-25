import React from "react";
import HeaderContainer from "./styles/HeaderContainer";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <h1>Let's play the Tic-tac-toe Game</h1>
        <Button
          className="button"
          variant="outlined"
          color="primary"
          size="large"
        >
          <Link to="/game" style={{ textDecoration: "none", color: "black" }}>
            Start a new game
          </Link>
        </Button>
      </HeaderContainer>
    </div>
  );
};

export default Header;
