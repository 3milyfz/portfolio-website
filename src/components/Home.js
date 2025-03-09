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
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  gap: 2rem;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.75rem);
  color: ${({ theme }) => theme.text || "rgb(210, 212, 199)"};
  font-weight: bold;
`;

const Text = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: ${({ theme }) => theme.text || "rgb(210, 212, 199)"};
`;

const Home = ({
  title = "Hello, 你好, Bonjour I'm Emily Zhou",
  subtitle = "I like bringing people together to build cool things!",
  theme = { bg: "black", text: "rgb(210, 212, 199)" },
}) => {
  return (
    <Section theme={theme}>
      <NavBar />
      <Container>
        <Title theme={theme}>{title}</Title>
        <Text theme={theme}>{subtitle}</Text>
      </Container>
    </Section>
  );
};

export default Home;