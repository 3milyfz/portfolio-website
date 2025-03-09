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
  gap: 30px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: ${({ size }) => size || "60px"};
  color: ${({ theme }) => theme.text || "rgb(210, 212, 199)"};

  @media only screen and (max-width: 768px) {
    font-size: ${({ size }) => (size ? `calc(${size} - 10px)` : "50px")};
  }
`;

const Text = styled.p`
  font-size: ${({ size }) => size || "24px"};
  color: ${({ theme }) => theme.text || "rgb(210, 212, 199)"};

  @media only screen and (max-width: 768px) {
    font-size: ${({ size }) => (size ? `calc(${size} - 4px)` : "20px")};
  }
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
        <Title size="60px" theme={theme}>
          {title}
        </Title>
        <Text size="24px" theme={theme}>
          {subtitle}
        </Text>
      </Container>
    </Section>
  );
};

export default Home;