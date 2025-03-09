import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(40rem, 100%), 1fr));
  grid-gap: 1rem;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 5%;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 30px;
  margin: 5px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "30px")});
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

const DateLocationWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #b0b0b0;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: rgb(210, 212, 199);
  margin-top: 15px;
`;

const KeyTakeaway = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: linear-gradient(135deg, rgba(65, 89, 208, 0.15), rgba(224, 111, 216, 0.1), rgba(255, 212, 132, 0.1));
  border-left: 5px solid #89c2d9;
  border-radius: 12px;
`;

const TakeawayText = styled.p`
  font-size: 1.2rem;
  color:rgb(218, 218, 218);
  font-weight: bold;
  font-style: italic;

  em {
    color: rgb(253, 255, 153);
    font-weight: bold;
    margin-right: 10px;
  }
`;

const experienceData = [
  {
    title: "Systems Analyst Intern",
    company: "Chick-fil-A Corporate",
    location: "Atlanta, GA",
    date: "May 2024 - Aug. 2024",
    description:
      "Automated warehouse access with Postman, optimized alerts with IBM Cognos, and authored technical docs to streamline operations.",
    takeaway:
      "Chick-fil-A’s mission to be the world’s most caring company taught me that work is more than efficiency—it’s about stewardship, ownership, and finding fulfillment in serving others.",
  },
  {
    title: "Software Developer Intern",
    company: "Cove Neurosciences",
    location: "Toronto, ON",
    date: "Jan. 2024 - Apr. 2024",
    description:
      "Processed EEG data using Pandas, optimized pipelines for large datasets, and built interactive React charts for researchers.",
    takeaway:
      "Startup life taught me that progress favors the adaptable—embracing uncertainty, wearing many hats, and moving fast is how innovation happens.",
  },
  {
    title: "Software Developer Intern",
    company: "Government of Canada",
    location: "Toronto, ON",
    date: "May 2023 - Aug. 2023",
    description:
      "Developed cloud APIs with Azure Functions & TypeScript, integrating Jest tests to enhance reliability for 10,000+ users.",
    takeaway:
      "My first internship taught me that growth begins where certainty ends—the ability to learn, ask the right questions, and navigate the unknown is the most valuable skill of all!",
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
        {experienceData.map((experience, index) => (
          <Card key={index} ref={cardRefs.current[index]} isVisible={isVisible[index]}>
            <HeaderWrapper>
              <Title>{experience.title}</Title>
              <Company>{experience.company}</Company>
            </HeaderWrapper>
            <DateLocationWrapper>
              <span>{experience.date}</span>
              <span>📍 {experience.location}</span>
            </DateLocationWrapper>
            <Description>{experience.description}</Description>
            <KeyTakeaway>
              <TakeawayText>💡 <em>Key Takeaway?</em> {experience.takeaway}</TakeawayText>
            </KeyTakeaway>
          </Card>
        ))}
      </Container>
    </Section>
  );
};

export default Experience;