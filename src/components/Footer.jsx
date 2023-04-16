import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #333333;
`;

function Footer() {
  return <Container>2023 All rights resived </Container>;
}

export default Footer;
