import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 5%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 30px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "20px")});
  transition: opacity 0.6s ease, transform 0.6s ease;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  margin: 0;
`;

const Company = styled.h3`
  font-size: 1.4rem;
  color: #b0b0b0;
  margin: 5px 0;
`;

const Date = styled.p`
  font-size: 1rem;
  color: #b0b0b0;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: rgb(210, 212, 199);
  margin-top: 15px;
`;

const KeyTakeaway = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-left: 5px solid #89c2d9;
  border-radius: 12px;
`;

const TakeawayText = styled.p`
  font-size: 1.2rem;
  color: #48cae4;
  font-weight: bold;
  font-style: italic;
`;

const experienceData = [
  {
    title: "Systems Analyst Intern",
    company: "Chick-fil-A Corporate",
    date: "May 2024 - Aug. 2024",
    description:
      "Automated warehouse access with Postman, optimized alerts with IBM Cognos, and authored technical docs to streamline operations.",
    takeaway:
      "Chick-fil-A’s culture of stewardship and ownership taught me that great technology isn’t just about speed—it’s about building systems that empower people, sustain impact, and balance efficiency with care.",
  },
  {
    title: "Software Developer Intern",
    company: "Cove Neurosciences",
    date: "Jan. 2024 - Apr. 2024",
    description:
      "Processed EEG data using Pandas, optimized pipelines for large datasets, and built interactive React charts for researchers.",
    takeaway:
      "Startup life taught me that progress favors the adaptable—embracing uncertainty, wearing many hats, and moving fast is how innovation happens.",
  },
  {
    title: "Software Developer Intern",
    company: "Government of Canada",
    date: "May 2023 - Aug. 2023",
    description:
      "Developed cloud APIs with Azure Functions & TypeScript, integrating Jest tests to enhance reliability for 10,000+ users.",
    takeaway:
      "My first internship taught me that growth begins where certainty ends—the ability to learn, ask the right questions, and navigate the unknown is the most valuable skill of all.",
  },
];

const Experience = () => {
  const cardRefs = useRef(experienceData.map(() => React.createRef()));
  const [isVisible, setIsVisible] = useState(Array(experienceData.length).fill(false));

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prevState) =>
              prevState.map((v, i) => (i === index ? true : v))
            );
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
      {experienceData.map((experience, index) => (
        <Card key={index} ref={cardRefs.current[index]} isVisible={isVisible[index]}>
          <Title>{experience.title}</Title>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
          <Description>{experience.description}</Description>
          <KeyTakeaway>
            <TakeawayText><em>Key Takeaway?</em> {experience.takeaway}</TakeawayText>
          </KeyTakeaway>
        </Card>
      ))}
    </Section>
  );
};

export default Experience;