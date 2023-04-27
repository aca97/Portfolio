import React from "react";
import styled from "styled-components";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import vueLogo from "../assets/vue.svg";
import jsLogo from "../assets/javascript.svg";
import tsLogo from "../assets/typescript.svg";
import angularLogo from "../assets/angular.svg";

const Container = styled.div`

@media (min-width:960px) {
  display: flex;
}
`;
const Title = styled.h1`
  font-size: 26px;
`;
const List = styled.a`
  font-size: small;
`;
const Logo = styled.img`
  height: 4em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2em #64dbffaa);
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Right = styled.div`
  flex: 1;
  position: relative;
`;
const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  margin: auto;
  filter: drop-shadow(0 0 2em #1c91ffec);
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(10px);
    }
  }
`;

function Skills() {
  return (
    <Container>
      <Left>
        <Title>Skills</Title>
        <div>
          <List href="https://vite.dev" target="_blank">
            <Logo src={jsLogo} alt="JavaScript logo" />
          </List>
          <List href="https://vite.dev" target="_blank">
            <Logo src={tsLogo} alt="TypeScript logo" />
          </List>
          <List href="https://angular.io/" target="_blank">
            <Logo src={angularLogo} alt="Angular logo" />
          </List>
        </div>
        <div>
          <List href="https://reactjs.org" target="_blank">
            <Logo src={reactLogo} className="logo-react" alt="React logo" />
          </List>
          <List href="https://vitejs.dev" target="_blank">
            <Logo src={viteLogo} alt="Vite logo" />
          </List>
          <List href="https://vuejs.org/" target="_blank">
            <Logo src={vueLogo} alt="Vue logo" />
          </List>
        </div>
      </Left>
      <Right>
        <Img src="./img/moon.png" />
      </Right>
    </Container>
  );
}

export default Skills;
