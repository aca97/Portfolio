import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Logo = styled.h2`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
font-size: 24px;
cursor: pointer;
`;



function Navbar() {
  return (
    <Section>
      <Container>
          <Logo>A.Hadzic</Logo>
        <Links>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>Skills</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
    
      </Container>
    </Section>
  );
}

export default Navbar;
