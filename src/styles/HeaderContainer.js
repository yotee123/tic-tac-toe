import styled from "styled-components";
const HeaderContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kirang+Haerang&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap");
  text-align: center;
  & h1 {
    color: #afebe7;
    font-size: 45px;
    font-family: "Kirang Haerang", cursive;
  }
  & .button {
    border-radius: 50px;
    animation-name: btn--cta;
    animation-iteration-count: infinite;
    animation-duration: 4s;
  }
  & .button:hover {
    background: white;
  }
  @keyframes btn--cta {
    0% {
      top: 0px;
      font-family: sans-serif;
    }
    50% {
      top: 20px;
      padding: 10px 20px;
      font-family: "Dela Gothic One", cursive;
    }
    100% {
      top: 0px;
      font-family: sans-serif;
    }
  }
`;

export default HeaderContainer;
