import React from "react";
import styled from "styled-components";
import { BiGitBranch } from "react-icons/bi";

const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
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

const Flex = styled.div`
width: 15%;
  display: flex;
  justify-content: space-around;
`

function Footer() {
  return (
    <Container>
      <Flex>
        <h2>
          F
        </h2>
        <h2>
          F
        </h2>
        <h2>
          L
        </h2>
      </Flex>

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
