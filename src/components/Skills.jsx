import React from "react";
import styled from "styled-components";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import vueLogo from "../assets/vue.svg";
import jsLogo from "../assets/javascript.svg";
import tsLogo from "../assets/typescript.svg";
import angularLogo from "../assets/angular.svg";
import Navbar from "./Navbar";

const Container = styled.div`
  display: grid;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const List = styled.a`
  font-size: small;
`;
const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2em #64dbffaa);
  }
  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

function Skills() {
  return (
    <Container>
        <Navbar />
      <Title>Skills</Title>
      <div>
        <List href="https://vite.dev" target="_blank">
          <Logo src={jsLogo} className="logo" alt="JavaScript logo" />
        </List>
        <List href="https://vite.dev" target="_blank">
          <Logo src={tsLogo} className="logo" alt="TypeScript logo" />
        </List>
        <List href="https://angular.io/" target="_blank">
          <Logo src={angularLogo} className="logo" alt="Angular logo" />
        </List>
      </div>
      <div>
        <List href="https://reactjs.org" target="_blank">
          <Logo src={reactLogo} className="logo-react" alt="React logo" />
        </List>
        <List href="https://vitejs.dev" target="_blank">
          <Logo src={viteLogo} className="logo" alt="Vite logo" />
        </List>
        <List href="https://vuejs.org/" target="_blank">
          <Logo src={vueLogo} className="logo" alt="Vue logo" />
        </List>
      </div>
    </Container>
  );
}

export default Skills;
