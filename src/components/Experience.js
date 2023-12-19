import React from 'react';
import { styled } from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Align vertically centered */
  height: 140vh; /* Set a height to center vertically on the viewport */
  gap: 20px;

  @media only screen and (max-width: 768px) {
    height: fit-content;
    min-height: 130vh;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  background-color: rgb(255 255 255 / 8%);
  box-shadow: 0 0 5px rgb(0 0 0 / 30%);
  backdrop-filter: blur(30px);
  border-radius: 20px;
  padding: 20px;
  height: fit-content;

  @media only screen and (max-width: 768px) {
    width: 80%;
    background-color: rgb(255 255 255 / 8%);
    box-shadow: 0 0 5px rgb(0 0 0 / 30%);
    backdrop-filter: blur(60px);
  }
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
  color: rgb(210, 212, 199);
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  color: rgb(210, 212, 199);
  display: flex;
  flex-direction: column;
  height: fit-content;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  font-size: large;
  margin-bottom: 10px; /* Add a margin to create a gap between list items */
`;

const Experience = () => {
  return (
    <Section>
      <Card>
        <Left>
          <h1>Software Developer</h1>
          <h2>Cove Neurosciences</h2>
          <h4>Jan. 2024 - Present</h4>
        </Left>
        <Right>
          <ul>
            <ListItem>
              Implementing interactive data visualization components in 
              <strong>React</strong>, enhancing the presentation and analysis of
              complex neurological data.
            </ListItem>
            <ListItem>
              Engineering robust backend solutions using <strong>Python</strong> to
              manage and process large datasets in neurological research.
            </ListItem>
          </ul>
        </Right>
      </Card>
      <Card>
        <Left>
          <h1>Open Source Developer</h1>
          <h2>UofT Blueprint</h2>
          <h4>Sep. 2023 - Present</h4>
        </Left>
        <Right>
          <ul>
            <ListItem>
              Collaborating with a cross-functional team of UX/UI designers and developers to 
              integrate <strong>React</strong> front-end and <strong>Express.js</strong>-based back-end components.
            </ListItem>
            <ListItem>
              Implementing <strong>Agile</strong> development methodologies and utilizing <strong>Scrum</strong> 
              framework to increase productivity and promote timely delivery of high-quality tickets.
            </ListItem>
          </ul>
        </Right>
      </Card>
      <Card>
        <Left>
          <h1>Software Developer</h1>
          <h2>Government of Canada</h2>
          <h4>May. 2023 - Aug. 2023</h4>
        </Left>
        <Right>
          <ul>
            <ListItem>
              Developed <strong>Azure</strong> Functions in <strong>TypeScript</strong> to seamlessly connect 
              with external APIs, streamlining data retrieval processes and enhancing system integration.
            </ListItem>
            <ListItem>
              Integrated automated testing suites using <strong>Jest</strong>, effectively mitigating software 
              bugs and elevating overall software functionality.
            </ListItem>
            <ListItem>
              Created scalable <strong>Rest APIs</strong>, employing <strong>Postman</strong> for comprehensive 
              testing to ensure seamless integration.
            </ListItem>
          </ul>
        </Right>
      </Card>
    </Section>
  );
};

export default Experience;
