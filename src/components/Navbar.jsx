import React, { useState } from "react";
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
  color: ${({ isActive }) => (isActive ? "#ffff" : "#999999")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "100")};
  font-size: 20px;
  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
`;

function Navbar() {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("about");

  function handleClick(link) {
    setActiveLink(link);
    navigate(link === "about" ? "/" : "/contact");
  }

  return (
    <Section>
      <Container>
        <Logo>A.Hadzic</Logo>
        <Links>
          <Button isActive={activeLink === "about"} onClick={() => handleClick("about")}>About</Button>
          <Button isActive={activeLink === "contact"} onClick={() => handleClick("contact")}>Contact</Button>
        </Links>
      </Container>
    </Section>
  );
}

export default Navbar;
