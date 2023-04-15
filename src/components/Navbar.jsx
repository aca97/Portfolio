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
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Logo = styled.p`
  height: 50px;
  cursor: pointer;
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

const Img = styled.img`
  width: 35px;
`

function Navbar() {
  return (
    <Section>
      <Container>
        <Logo>A.Hadzic</Logo>
        <Links>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
}

export default Navbar;
