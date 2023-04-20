import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GrSun } from "react-icons/gr";

const Section = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: rgba(55, 55, 55, 0.5);
  backdrop-filter: blur(5px);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

const Logo = styled.p`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Button = styled.li`
  margin: 0 5px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? "#ffff" : "#999999")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "100")};
  font-size: 20px;
  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
`;

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30%;
  border: none;
  font-size: 34px;
  color: white;
  cursor: pointer;
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
        <Logo onClick={() => handleClick("about")}>A.Hadzic</Logo>
        <Links>
          <Button
            isActive={activeLink === "about"}
            onClick={() => handleClick("about")}
          >
            About
          </Button>
          <Button
            isActive={activeLink === "contact"}
            onClick={() => handleClick("contact")}
          >
            Contact
          </Button>
        </Links>
        <ThemeButton>
          <GrSun />
        </ThemeButton>
      </Container>
    </Section>
  );
}

export default Navbar;
