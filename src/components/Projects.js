import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 5%;
  max-width: 73%;
  margin: auto;

  @media (max-width: 768px) {
    padding: 5% 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 1.5rem;
  width: 100%;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 1.5rem;
  color: rgb(210, 212, 199);
  text-align: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "30px")});
  transition: opacity 0.5s ease, transform 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.3s ease;
`;

const P = styled.p`
  font-size: clamp(1rem, 2vw, 1.1rem);
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
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
    description: "This website!",
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
          if (entry.isIntersecting) {
            setIsVisible((prevState) =>
              prevState.map((v, i) => (i === index ? true : v))
            );
            observer.disconnect();
          }
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
          <Card key={index} ref={cardRefs.current[index]} isVisible={isVisible[index]} onClick={() => window.open(project.link)}>
            <Img src={project.imageSrc} />
            <P>{project.description}</P>
          </Card>
        ))}
      </Container>
    </Section>
  );
};

export default Projects;