import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 73%;
  margin: auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 5% 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "30px")});
  transition: opacity 0.5s ease, transform 0.5s ease;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  padding: 1rem 1rem;
  border-radius: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: 97%;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: rgb(0, 0, 0);
`;

const SearchIcon = styled.span`
  margin-right: 0.75rem;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
`;

const NavBar = styled.div`
  display: flex;
  justify-content: left;
  gap: 1rem;
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.5rem;

  @media (min-width: 600px) {
    gap: 1.5rem;
  }

  @media (min-width: 800px) {
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    gap: 3rem;
  }
`;

const NavItem = styled.span`
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s ease;
  background: ${({ isActive }) => (isActive ? "rgba(255, 255, 255, 0.2)" : "transparent")};

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  text-align: left;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ResultCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.55);
  }
`;

const ResultURL = styled.span`
  font-size: 0.9rem;
  color: rgb(73, 73, 73);
  display: block;
  margin-bottom: 0.2rem;
`;

const ResultTitle = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  color: #1a0dab;
  text-decoration: none;
  cursor: pointer;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const ResultText = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: 1.6;
  color: rgb(0, 0, 0);
  margin-top: 0.2rem;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ImageItem = styled.img`
  width: 100%;
  height: 11rem;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const About = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeTab === "Images") {
      const imageContext = require.context("../../public/img/img_net/", false, /\.(png|jpe?g|svg|heic)$/);
      const imagePaths = imageContext.keys().map(imageContext);
      setImages(imagePaths);
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Section>
      <Container ref={containerRef} isVisible={isVisible}>
        <SearchBar>
          <SearchIcon>🔍</SearchIcon>
          <Typewriter
            options={{
              strings: ['Who is Emily?'],
              autoStart: true,
              loop: true,
              delay: 200,
            }}
          />
        </SearchBar>
        <NavBar>
          {["All", "Images", "News", "More"].map((tab) => (
            <NavItem
              key={tab}
              isActive={activeTab === tab}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </NavItem>
          ))}
        </NavBar>
        {activeTab === "All" && (
          <SearchResults>
            <ResultCard>
              <ResultURL>https://defygravitycampaign.utoronto.ca/news-and-stories/u-of-ts-2021-schulich-leaders</ResultURL>
              <ResultTitle
                href="https://defygravitycampaign.utoronto.ca/news-and-stories/u-of-ts-2021-schulich-leaders-building-tech-solutions-for-an-inclusive-future/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schulich Leader Scholar at UofT
              </ResultTitle>
              <ResultText>
                Emily is a 3rd-year Computer Science and Statistics student at the University of Toronto.
              </ResultText>
            </ResultCard>
            <ResultCard>
              <ResultURL>https://www.linkedin.com/in/emily-fz</ResultURL>
              <ResultTitle href="https://www.linkedin.com/in/emily-fz" target="_blank" rel="noopener noreferrer">Exploring Careers in Tech and Product</ResultTitle>
              <ResultText>She is passionate about bridging the gap between people and technology and is exploring careers in product/program management and software development.</ResultText>
            </ResultCard>
            <ResultCard>
              <ResultURL>https://www.goodreads.com/emeads</ResultURL>
              <ResultTitle href="https://www.goodreads.com/emeads" target="_blank" rel="noopener noreferrer">Emily’s Goodreads</ResultTitle>
              <ResultText>When she's not grinding, she’s checking out new cafés and lounges, reading romantasy and personal growth books, watching anime, or planning her next trip. She's currently hooked on the show <i>Invincible</i>.</ResultText>
            </ResultCard>
          </SearchResults>
        )}
        {activeTab === "Images" && (
          <ImageGrid>
            {images.map((src, index) => (
              <ImageItem
                key={index}
                src={src}
                alt={`Emily ${index + 1}`}
              />
            ))}
          </ImageGrid>
        )}
        {["News", "More"].includes(activeTab) && (
          <SearchResults>
            <ResultCard>
              <ResultText>Oops, there's nothing here yet! {activeTab} is on the way.</ResultText>
            </ResultCard>
          </SearchResults>
        )}
      </Container>
    </Section>
  );
};

export default About;