import React from "react";
import styled from "styled-components";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <About />
      <Skills />
      <Projects />
    </Container>
  );
}

export default Home;
