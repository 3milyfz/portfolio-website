import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 8%;

  @media (max-width: 768px) {
    padding: 5% 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(30rem, 100%), 1fr));
  grid-gap: 1rem;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 20px;
  margin: 5px;
  color: rgb(210, 212, 199);
  text-align: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "30px")});
  transition: opacity 0.5s ease, transform 0.5s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
    transform: scale(1.02);
  }
`;

const Img = styled.img`
  cursor: pointer;
  width: 100%;
  border-radius: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const P = styled.p`
  font-size: 1.2rem;
  margin-top: 16px;
`;

const projectData = [
  {
    imageSrc: "./img/callhub.png",
    link: "https://github.com/Callhub-Connect",
    description:
      "An interactive call center application, designed to revolutionize how organizations support their customers.",
  },
  {
    imageSrc: "./img/tces.png",
    link: "https://github.com/uoftblueprint/tces",
    description:
      "A customer relationship management application for Toronto Community Employment Services.",
  },
  {
    imageSrc: "./img/pw.png",
    link: "https://github.com/3milyfz/portfolio-website",
    description: "This portfolio website!",
  },
];

const Projects = () => {
  const cardRefs = useRef(projectData.map(() => React.createRef()));
  const [isVisible, setIsVisible] = useState(Array(projectData.length).fill(false));

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible((prevState) =>
            prevState.map((v, i) => (i === index ? entry.isIntersecting : v))
          );
        },
        { threshold: 0.2 }
      );

      observer.observe(ref.current);
      return observer;
    });

    return () => observers.forEach((observer) => observer && observer.disconnect());
  }, []);

  return (
    <Section>
      <Container>
        {projectData.map((project, index) => (
          <Card key={index} ref={cardRefs.current[index]} isVisible={isVisible[index]}>
            <Img src={project.imageSrc} onClick={() => window.open(project.link)} />
            <P>{project.description}</P>
          </Card>
        ))}
      </Container>
    </Section>
  );
};

export default Projects;