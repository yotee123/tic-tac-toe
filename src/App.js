import React from "react";
import Wrapper from "./styles/Wrapper";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./Game/Game.js";
function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
