import React from "react";
import styled from "styled-components";
import { BiGitBranch } from "react-icons/bi";

const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #333333;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: #ff9100;
  }
`;
const Small = styled.p`
  margin-right: 10px;
 
`;
function Footer() {
  return (
    <Container>
      <div></div>

      <p>© 2023 Aleksandar Hadzic. All Rights Reserved.</p>

      <Right>
        <Small>
          <BiGitBranch />
        </Small>
        <Small>Version 1.0.0</Small>
      </Right>
    </Container>
  );
}

export default Footer;
