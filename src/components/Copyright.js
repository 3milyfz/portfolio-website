import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 0px;
  background-color: black;
  text-align: right;
  z-index: 1000;

  @media only screen and (max-width: 768px) {
    text-align: center;
    padding: 10px;
  }
`;

const Text = styled.p`
  color: rgb(210, 212, 199);
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  margin: 0;
  padding-right: 20px;

  @media only screen and (max-width: 768px) {
    padding-right: 0;
  }
`;

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Text>© Emily Zhou {currentYear}</Text>
    </Container>
  );
};

export default Copyright;