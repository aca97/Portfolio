import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 26px;
`;

const Card = styled.div``;

const Img = styled.img``;

const CardTitle = styled.h3`
    
`

function Projects() {
  return (
    <Container>
      <Title>Projects</Title>
      <Card>
        <Img src=""></Img>
      <CardTitle>PokemonDex :(</CardTitle>
      </Card>

      <p>Tech stack</p>
      <p>Vite + React</p>
      <p>Description Description description</p>
      <p>Code icon</p>
    </Container>
  );
}

export default Projects;
