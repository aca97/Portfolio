import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
`;

const Logo = styled.p`
  height: 50px;
  cursor: pointer;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #ffff;
  font-weight: 100;
  font-size: 20px;
`;
function Navbar() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }
  function goToContact() {
    navigate("/contact");
  }
  return (
    <Section>
      <Container>
        <Logo>A.Hadzic</Logo>
        <Links>
          <Button onClick={goToHome}>About</Button>
          <Button onClick={goToContact}>Contact</Button>
        </Links>
      </Container>
    </Section>
  );
}

export default Navbar;
