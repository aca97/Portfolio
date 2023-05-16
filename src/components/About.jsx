import React from "react";
import styled from "styled-components";
import FlamingoModel from "./FlamingoModel";

const Container = styled.div`

`;

const Title = styled.h1`
  border-radius: 15px;
  background-color: #3d3d3d;
`;
const SubTitle = styled.h2`
  text-decoration: underline;
  display: flex;
`;
const P = styled.p`
  padding: 0px 10px;
`;

const Section = styled.div``;

const Bio = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  text-align: start;
`;

const Year = styled.p`
  margin-left: 25px;
  font-weight: bold;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`

function About() {
  return (
    <Container>
      <FlamingoModel />
      <Title>Hello, welcome to my portfolio</Title>
      <Main>
      <P>My name is Aleksandar Hadzic & I'm Web app Frontend developer</P>
      <Img src="./img/prof.jpeg" />
      </Main>
      <Section>
        <SubTitle>Biography</SubTitle>
        <Bio>
          <Year>1997</Year>
          <P>Born in Sombor, Serbia 🌳</P>
          <Year>2017 - 2021</Year>
          <P>Bachelor's degree Information technology, University in Novi Sad, Tehnical faculty "Mihajlo Pupin" Zrenjanin 💻</P>
          <Year>2021 - 2022</Year>
          <P>Master's degree Information technology, University in Novi Sad, Tehnical faculty "Mihajlo Pupin" Zrenjanin 💻</P>
          <Year>2021 to present</Year>
          <P>Working at Kirey group as Software developer (Angular)</P>
        </Bio>
        <SubTitle>I♥</SubTitle>
        <Bio>
          <P>Digital Art, Music, Chess & Waterpolo</P>
        </Bio>
      </Section>
    </Container>
  );
}

export default About;
