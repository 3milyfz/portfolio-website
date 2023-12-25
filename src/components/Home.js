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

const Title = styled.h1`
  font-size: 150px;
  color: rgb(210, 212, 199);
  padding: 160px 0 20px 50px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    align-self: center;
    font-size: 70px;
    padding: 150px 50px 20px 50px;

  }
`;

const Text = styled.p`
  font-size: 30px;
  color: rgb(210, 212, 199);
  padding: 50px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    align-self: center;
    font-size: 20px;
  }
`;

const Home = () => {
  return (
    <Section>
        <NavBar/>
        <Title>Emily Zhou</Title>
        <Text>A Computer Science student on a journey to <br/> explore and innovate the world of technology.</Text>
    </Section>
  );
}

export default Home;