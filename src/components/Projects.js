import React from 'react';
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
    min-height: 150vh;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  background-color: rgb(255 255 255 / 5%);
  box-shadow: 0 0 5px rgb(0 0 0 / 15%);
  backdrop-filter: blur(30px);
  border-radius: 10px;
  padding: 20px;
  height: fit-content;
  color: rgb(210, 212, 199);
  align-items: center;
  align-self: center;
  gap: 20px;
  text-align: center;

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
  return (
    <Section>
      <Card>
        <Img src="./img/callhub.png" onClick={()=> window.open('https://github.com/Callhub-Connect')}/>
        <P>An interactive call center application, designed to revolutionize how organizations engage with customers during support interactions.</P>
      </Card>
      <Card>
        <Img src="./img/tces.png" onClick={()=> window.open('https://github.com/uoftblueprint/tces')}/>
        <P>An internal-use customer relationship management application designed and developed for Toronto Community Employment Services.</P>
      </Card>
    </Section>
  );
};

export default Projects;
