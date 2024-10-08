import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  gap: 20px;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;

  @media only screen and (max-width: 768px) {
    height: fit-content;
    min-height: 130vh;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  height: fit-content;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '20px')});
  transition: opacity 0.5s ease, transform 0.5s ease;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Left = styled.div`
  flex: 1;
  color: rgb(210, 212, 199);
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 10px;
`;

const Right = styled.div`
  flex: 1;
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
  margin-bottom: 10px;
`;

const experienceData = [
  {
    title: 'Systems Analyst Intern',
    company: 'Chick-fil-A Corporate',
    date: 'May 2024 - Aug. 2024',
    description: [
      'Owned the development of a Postman workflow that automated access to Chick-fil-A\'s warehouse management system.',
      'Standardized IBM Cognos Analytics query alerts across 8 distribution centers, resulting in an increase in organizational efficiency.',
    ],
  },
  {
    title: 'Open Source Developer',
    company: 'UofT Blueprint',
    date: 'Sep. 2023 - May 2024',
    description: [
      'Collaborating with a cross-functional team to integrate React.js and Express.js components.',
      'Implementing Agile development methodologies and utilizing Scrum to increase productivity and promote timely delivery of tickets.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'Cove Neurosciences',
    date: 'Jan. 2024 - Apr. 2024',
    description: [
      'Implementing interactive data visualization components in React, enhancing the presentation and analysis of complex neurological data.',
      'Engineering robust backend solutions using Python to manage and process electroencephalogram (EEG) data.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'Government of Canada',
    date: 'May 2023 - Aug. 2023',
    description: [
      'Developed Azure functions and automated testing suites, mitigating software bugs and expanding overall software functionality.',
      'Created scalable Rest APIs, employing Postman for comprehensive testing to ensure seamless integration.',
    ],
  },
];

const Experience = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [isVisible, setIsVisible] = useState([false, false, false, false]);

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
      {experienceData.map((experience, index) => (
        <Card key={index} ref={cardRefs[index]} isVisible={isVisible[index]}>
          <Left>
            <h1>{experience.title}</h1>
            <h2>{experience.company}</h2>
            <h4>{experience.date}</h4>
          </Left>
          <Right>
            <ul>
              {experience.description.map((desc, i) => (
                <ListItem key={i}>{desc}</ListItem>
              ))}
            </ul>
          </Right>
        </Card>
      ))}
    </Section>
  );
};

export default Experience;
