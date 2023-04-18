import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const Section = styled.div`
  margin: 50px 0;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  @media (max-width: 960px) {
    display: grid;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 26px;
`;

const Card = styled.div`
  width: 350px;
  border: 1px solid #5f5f5f;
  border-radius: 12px;
  height: 400px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
`;

const CardTitle = styled.h3``;

const A = styled.a`
  color: #8ef511;
  font-size: 18px;
  text-decoration: none;
  margin-top: 15px;
`;

const Git = styled.a`
  color: #ffff;
  font-size: 30px;
`;
const Flex = styled.div`
  display: flex;
  margin: 0 15px;
`;
const FlexBot = styled.div`
  margin: 0 15px;
  display: flex;
  justify-content: space-between;
`;
const Tech = styled.p`
  color: #8ef511;
  margin-right: 10px;
  font-size: 12px;
`;
const Stack = styled.p`
  color: #f99d47;
  font-size: 12px;
`;

const P = styled.p`
  text-align: justify;
  font-size: 12px;
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
          <P>
            This project is created for exercice, to practise React.js & working
            with API's. It's created with Vite, TypeScript and Yarn packet
            manager
          </P>
          <FlexBot>
            <A
              href="https://pokemon-4e5zz97fj-flatronw2.vercel.app/"
              target="_blank"
            >
              Live
            </A>

            <Git
              href="https://pokemon-4e5zz97fj-flatronw2.vercel.app/"
              target="_blank"
            >
              <AiFillGithub />
            </Git>
          </FlexBot>
        </Card>
        <Card>
          <CardTitle>Library</CardTitle>
          <Img src="./img/books.jpeg" alt="books"></Img>
          <Flex>
            <Tech>Tech stack: </Tech>
            <Stack> React, Spring boot 3, PostgreSQL</Stack>
          </Flex>
          <P>
            Library app has authentication & authorization with JWT token,
            backend is build with java 17 & Gradle while frontend is build with
            React.js and yarn packet manager
          </P>
          <FlexBot>
            <div></div>
            <Git href="https://github.com/aleksa0001/library" target="_blank">
              <AiFillGithub />
            </Git>
          </FlexBot>
        </Card>
      </Container>
    </Section>
  );
}

export default Projects;
