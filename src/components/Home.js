import React from "react";
import styled from "styled-components";
import NavBar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;

const Container = styled.div`
  display: flex; // Enable flexbox
  flex-direction: column;
  justify-content: center; // Center children vertically in the container
  align-items: center; // Center children horizontally in the container
  height: 100%; // Take full height of the parent
  text-align: center; // Center the text for all child elements
  gap: 30px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 150px;
  color: rgb(210, 212, 199);

  @media only screen and (max-width: 768px) {
    font-size: 70px;
  }
`;

const Text = styled.p`
  font-size: 30px;
  color: rgb(210, 212, 199);

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Home = () => {
  return (
    <Section>
        <NavBar/>
        <Container>
          <Title>Emily Zhou</Title>
          <Text>A Computer Science student on a journey to <br/> explore and innovate the world of technology.</Text>
        </Container>
    </Section>
  );
}

export default Home;