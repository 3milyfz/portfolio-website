import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 0px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 5px;
  }
`;

const LeftText = styled.p`
  color: rgb(210, 212, 199);
  font-size: clamp(1rem, 2vw, 1rem);
  margin: 0;
  padding-left: 20px;
`;

const RightText = styled.p`
  color: rgb(210, 212, 199);
  font-size: clamp(1rem, 2vw, 1rem);
  margin: 0;
  padding-right: 20px;
`;

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <LeftText>Made with ♡ ̆̈ !</LeftText>
      <RightText>© Emily Zhou {currentYear}</RightText>
    </Container>
  );
};

export default Copyright;