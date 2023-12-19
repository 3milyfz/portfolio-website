import React from "react";
import styled from "styled-components";
import NavBar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 100px;
  color: rgb(210, 212, 199);
  padding: 200px 0 20px 50px;
`;

const Text = styled.p`
  font-size: 30px;
  color: rgb(210, 212, 199);
  padding: 50px;
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