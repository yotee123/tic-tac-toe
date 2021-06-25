import styled from "styled-components";

const GameContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  background-color: black;
  color: white;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;

  & h1 {
    margin: 2rem;
  }

  & .board {
    border: 1rem solid #ff652f;
    background: #ff652f;
    width: 500px;
    height: 500px;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    gap: 1rem;
  }

  & .squares {
    background: #272727;
    border: none;
    font-size: 5rem;
    /* font-weight: 800; */
    cursor: pointer;
    outline: none;
  }

  & .X {
    color: red;
  }
  & .O {
    color: green;
  }

  & .info-wrapper {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    padding: 1rem;
  }

  li {
    list-style: none;
  }

  &.info-wrapper button {
    background: #272727;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.5rem;
    margin: 0.5rem 1rem;
  }
`;

export default GameContainer;
