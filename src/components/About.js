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
  padding: 2.5rem;
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
    width: 90%;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  padding: 0.8rem;
  border-radius: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: 97%;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: rgb(0, 0, 0);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
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
    gap: 1rem;
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

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem;
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

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
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
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ResultText = styled.p`
  font-size: clamp(1rem, 2vw, 1rem);
  line-height: 1.6;
  color: rgb(0, 0, 0);
  margin-top: 0.2rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
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
      try {
        const imagePaths = Array.from({ length: 36 }, (_, i) => `/img/img_net/${i + 1}.jpg`);
        console.log('Loading images:', imagePaths);
        setImages(imagePaths);
      } catch (error) {
        console.error('Error in image loading:', error);
      }
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
              strings: ['So... who\'s Emily?'],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </SearchBar>
        <NavBar>
          {["All", "Images", "News", "⋮ More"].map((tab) => (
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
                Schulich Leader Scholar 🤓
              </ResultTitle>
              <ResultText>
                Emily is a 3rd-year Computer Science student at the University of Toronto.
              </ResultText>
            </ResultCard>
            <ResultCard>
              <ResultURL>https://www.linkedin.com/in/emily-fz</ResultURL>
              <ResultTitle href="https://www.linkedin.com/in/emily-fz" target="_blank" rel="noopener noreferrer">Exploring Tech, Product, and What Comes Next</ResultTitle>
              <ResultText>From automating warehouse workflows at Chick-fil-A to building payroll onboaring solutions at Rippling, she's interested in building thoughtful software and figuring out what a meaningful career in tech looks like.</ResultText>
            </ResultCard>
            <ResultCard>
              <ResultURL>https://beliapp.co/app/stoopidchzcat</ResultURL>
              <ResultTitle href="https://beliapp.co/app/stoopidchzcat" target="_blank" rel="noopener noreferrer">Beli Grind 😤</ResultTitle>
              <ResultText>A so-called "foodie", she recently joined Beli to keep track of her go-to cafés, coffee spots, and favorite eats.</ResultText>
            </ResultCard>
            <ResultCard>
              <ResultURL>https://www.goodreads.com/emeads</ResultURL>
              <ResultTitle href="https://www.goodreads.com/emeads" target="_blank" rel="noopener noreferrer">Goodreads!</ResultTitle>
              <ResultText>What she's been reading? Mainly romantasy and books that make you pause and rethink things (in a good way).</ResultText>
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
                onError={(e) => {
                  console.error(`Failed to load image: ${src}`);
                  e.target.style.display = 'none';
                }}
              />
            ))}
          </ImageGrid>
        )}
        {activeTab === "News" && (
          <SearchResults>
            <ResultCard>
              <ResultText>Oops, there's nothing here yet! {activeTab} is on the way.</ResultText>
            </ResultCard>
          </SearchResults>
        )}
        {activeTab === "⋮ More" && (
          <SearchResults>
            <ResultCard>
              <ResultText>Oops, there's nothing here yet! More is on the way.</ResultText>
            </ResultCard>
          </SearchResults>
        )}
      </Container>
    </Section>
  );
};

export default About;