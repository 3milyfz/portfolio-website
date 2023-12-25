import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; /* Align vertically centered */
  height: 100vh; /* Set a height to center vertically on the viewport */
  gap: 40px;

  @media only screen and (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    align-items: center;
    min-height: 120vh;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  background-color: rgba(255, 255, 255, 0.08); /* Use RGBA with opacity */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Use RGBA with opacity */
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 20px;
  height: fit-content;
  color: rgb(210, 212, 199);
  align-items: center;
  align-self: center;
  gap: 20px;
  text-align: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '20px')});
  transition: opacity 0.5s ease, transform 0.5s ease;

  @media only screen and (max-width: 768px) {
    width: 80%;
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

const Projects = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cardRefs = [useRef(null), useRef(null)];
  const [isVisible, setIsVisible] = useState([false, false]);

  useEffect(() => {
    const handleIntersection = (index, inView) => {
      if (inView) {
        setIsVisible((prevState) =>
          prevState.map((value, i) => (i === index ? true : value))
        );
      }
    };

    cardRefs.forEach((ref, index) => {
      const { current } = ref;
      if (current) {
        const options = {
          threshold: 0.2, // Adjust this threshold as needed
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
      <Card ref={cardRefs[0]} isVisible={isVisible[0]}>
        <Img src="./img/callhub.png" onClick={()=> window.open('https://github.com/Callhub-Connect')}/>
        <P>An interactive call center application, designed to revolutionize how organizations engage with customers during support interactions.</P>
      </Card>
      <Card ref={cardRefs[1]} isVisible={isVisible[1]}>
        <Img src="./img/tces.png" onClick={()=> window.open('https://github.com/uoftblueprint/tces')}/>
        <P>An internal-use customer relationship management application designed and developed for Toronto Community Employment Services.</P>
      </Card>
    </Section>
  );
};

export default Projects;
