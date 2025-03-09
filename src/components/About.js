import React, { useState, useEffect, useMemo } from "react";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 5%;
  color: rgb(210, 212, 199);
  overflow: hidden;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    height: fit-content;
    padding-bottom: 15%;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  overflow: visible;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 15px;
  padding-left: 3%;
  max-width: 550px;

  @media (max-width: 768px) {
    padding-left: 0;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: rgb(215, 227, 247);

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Text = styled.p`
  font-size: 22px;
  line-height: 1.6;
  color: rgb(210, 212, 199);

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ImageNode = styled.img`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  ${({ isActive }) => isActive && "transform: scale(2.2); z-index: 2;"}

  @media (max-width: 768px) {
    width: ${({ size }) => size * 0.8}px;
    height: ${({ size }) => size * 0.8}px;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid #ffffff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  position: absolute;
`;

const About = () => {
  const images = useMemo(() => [
    "/img/img_net/1.jpg",
    "/img/img_net/11.jpg",
    "/img/img_net/2.jpg",
    "/img/img_net/3.jpg",
    "/img/img_net/4.jpg",
    "/img/img_net/19.jpg",
    "/img/img_net/20.jpg",
    "/img/img_net/6.jpg",
    "/img/img_net/5.jpg",
    "/img/img_net/9.jpg",
    "/img/img_net/12.jpg",
    "/img/img_net/15.jpg",
    "/img/img_net/16.jpg",
    "/img/img_net/8.jpg",
    "/img/img_net/18.jpg",
    "/img/img_net/22.jpg",
    "/img/img_net/10.jpg",
    "/img/img_net/13.jpg",
    "/img/img_net/21.jpg",
    "/img/img_net/7.jpg",
  ], []);

  const [positions, setPositions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [circleSize, setCircleSize] = useState(window.innerWidth < 768 ? 280 : 450);

  useEffect(() => {
    const updateSize = () => {
      setCircleSize(window.innerWidth < 768 ? 280 : 450);
    };

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const numImages = images.length;
      const radius = circleSize / 2 - 50;
      const centerX = circleSize / 2;
      const centerY = circleSize / 2;
      const angleStep = (2 * Math.PI) / numImages;

      const newPositions = images.map((_, index) => {
        const angle = index * angleStep;
        const x = Math.cos(angle) * radius + centerX - 45;
        const y = Math.sin(angle) * radius + centerY - 45;
        return { left: `${x}px`, top: `${y}px` };
      });

      setPositions(newPositions);
      setLoading(false);
    }, 2000);
  }, [images.length, circleSize]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Section>
      <LeftContainer size={circleSize}>
        {loading ? (
          <Spinner />
        ) : (
          images.map((src, index) => (
            <ImageNode
              key={index}
              src={src}
              alt={`about-${index}`}
              isActive={index === activeIndex}
              size={circleSize * 0.2}
              style={{
                left: positions[index]?.left,
                top: positions[index]?.top,
              }}
            />
          ))
        )}
      </LeftContainer>

      <RightContainer>
        <Title>About Me</Title>
        <Text>🎓 A 3rd-year Computer Science and Statistics student at the University of Toronto.</Text>
        <Text>💡 Passionate about bridging people and technology. I'm exploring career paths in product/program management and software development.</Text>
        <Text>🍽️ Outside of work, I love trying new restaurants and cafés, reading romantasy books, and traveling!</Text>
        <Text>✈️ My next adventure? Backpacking through Portugal!!</Text>
      </RightContainer>
    </Section>
  );
};

export default About;