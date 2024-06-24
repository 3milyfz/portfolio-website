import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: fit-content;
  min-height: 100vh;
  gap: 20px;
  padding-left: 65px;
  padding-right: 65px;

  @media only screen and (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding-left: 0;
    padding-right: 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(40rem, 100%), 1fr));
  grid-gap: 1rem;
  padding: 40px;

  @media only screen and (max-width: 768px) {
    padding: 30px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 15px;
  height: fit-content;
  color: rgb(210, 212, 199);
  align-items: center;
  align-self: center;
  gap: 20px;
  text-align: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '20px')});
  transition: opacity 0.5s ease, transform 0.5s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Img = styled.img`
  cursor: pointer;
  width: 100%;
  border-radius: 20px;
`;

const P = styled.p`
  font-size: large;
`;

const projectData = [
  {
    imageSrc: './img/callhub.png',
    link: 'https://github.com/Callhub-Connect',
    description:
      'An interactive call center application, designed to revolutionize how organizations support their customers.',
  },
  {
    imageSrc: './img/tces.png',
    link: 'https://github.com/uoftblueprint/tces',
    description:
      'A customer relationship management application for Toronto Community Employment Services.',
  },
  {
    imageSrc: './img/pw.png',
    link: 'https://github.com/3milyfz/portfolio-website',
    description:
      'This portfolio website!',
  },
];

const Projects = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const [isVisible, setIsVisible] = useState([false, false, false]);

  useEffect(() => {
    const handleIntersection = (index, inView) => {
      setIsVisible((prevState) =>
        prevState.map((value, i) => (i === index ? inView : value))
      );
    };

    cardRefs.forEach((ref, index) => {
      const { current } = ref;
      if (current) {
        const options = {
          threshold: 0.2,
        };
        const observer = new IntersectionObserver(
          ([entry]) => {
            handleIntersection(index, entry.isIntersecting);
          },
          options
        );

        observer.observe(current);

        return () => {
          observer.unobserve(current);
        };
      }
    });
  }, [cardRefs]);

  return (
    <Section>
      <Container>
        {projectData.map((project, index) => (
          <Card key={index} ref={cardRefs[index]} isVisible={isVisible[index]}>
            <Img
              src={project.imageSrc}
              onClick={() => window.open(project.link)}
            />
            <P>{project.description}</P>
          </Card>
        ))}
      </Container>
    </Section>
  );
};

export default Projects;
