import React from "react";
import styled from "styled-components";
import Skills from "./Skills";

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

const Button = styled.button``;

const Image = styled.img``;

const Section = styled.div``;

const Flex = styled.div`
  display: flex;
`;

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

function About() {
  return (
    <Container>
      <Title>Hello, welcome to my portfolio</Title>
      <P>My name is Aleksandar Hadzic & I'm Web app Frontend developer</P>
      <Section>
        <SubTitle>Biography</SubTitle>
        <Bio>
          <Year>1997</Year>
          <P>Born in Sombor, Serbia 🌳</P>
          <Year>2017 - 2021</Year>
          <P>Bachlor degree Information technoligy, "Mihajlo Pupin" </P>
          <Year>2021 - 2022</Year>
          <P>Masters degree Information technology, "Mihajlo Pupin" </P>
          <Year>2021 to present</Year>
          <P>Working at Kirey group as Software developer (Angular)</P>
        </Bio>

        <SubTitle>I♥</SubTitle>
        <Bio>
          <P>Digital Art, Music, Chess & Waterpolo</P>
        </Bio>
      </Section>
      <Skills />
    </Container>
  );
}

export default About;
