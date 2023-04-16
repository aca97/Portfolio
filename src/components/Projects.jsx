import React from "react";
import styled from "styled-components";

const Section = styled.div`
  margin: 50px 0;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 26px;
`;

const Card = styled.div`
width: 400px;
  border: 1px solid #5f5f5f;
  border-radius: 12px;
`;

const Img = styled.img`
  width: 150px;
`;

const CardTitle = styled.h3``;

const A = styled.a`
  color: #73abf9;
  font-size: 20px;
  text-decoration: none;
`;
const Flex = styled.div`
  display: flex ;
  margin: 0 15px;
`;
const FlexBot = styled.div`
  margin: 0 15px;
  display: flex;
  justify-content: space-between;
`
const Tech = styled.p`
background-color: #121212;
  color: #8ef511;
  margin-right: 10px;
`;
const Stack = styled.p`
  color: #f99d47;
`;
function Projects() {
  return (
    <Section>
      <Title>Projects</Title>
      <Container>
        <Card>
          <CardTitle>PokemonDex</CardTitle>
          <Img src="./img/bulb.png" alt="pokemon"></Img>
          <Flex>
            <Tech>Tech stack: </Tech>
            <Stack> Vite + React + TypeScript</Stack>
          </Flex>
          <p>This project is creating for exercice working with API's and React</p>
          <FlexBot>
            <A
              href="https://pokemon-4e5zz97fj-flatronw2.vercel.app/"
              target="_blank"
            >
              Live
            </A>
            <h3> code  </h3>
          </FlexBot>
        </Card>       
      </Container>
    </Section>
  );
}

export default Projects;
