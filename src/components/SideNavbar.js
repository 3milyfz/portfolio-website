import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.img`
  position: fixed;
  top: 27px;
  left: 30px;
  width: 42px;
  height: 38px;
  cursor: pointer;
  z-index: 1000;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 50px;
  color: rgb(210, 212, 199);
  z-index: 1001;
  transition: color 0.3s ease;

  &:hover {
    color: #555;
  }
`;

const SideNav = styled.div`
  position: fixed;
  left: ${({ isVisible }) => (isVisible ? "0" : "-100%")};
  top: 0;
  width: 250px;
  height: 100vh;
  padding: 5%;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(40px);
  z-index: 1000;
  transition: left 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
  width: 100%;
  align-items: flex-start;
`;

const NavLink = styled.button`
  font-size: clamp(32px, 5vh, 50px);
  color: rgb(210, 212, 199);
  background: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.5s ease;

  &:hover {
    color: #555;
    transform: scale(1.05);
  }
`;

// Smooth scrolling function
const scrollToSection = (id, toggleNav) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    toggleNav(); // Close navbar after clicking
  }
};

const SideNavbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <Nav src="./img/navicon.png" onClick={toggleNav} />
      <SideNav isVisible={isNavVisible}>
        <CloseButton onClick={toggleNav}>×</CloseButton>
        <NavLinksContainer>
          <NavLink onClick={() => scrollToSection("home", toggleNav)}>Home</NavLink>
          <NavLink onClick={() => scrollToSection("about", toggleNav)}>About</NavLink>
          <NavLink onClick={() => scrollToSection("experience", toggleNav)}>Experience</NavLink>
          <NavLink onClick={() => scrollToSection("projects", toggleNav)}>Projects</NavLink>
          <NavLink onClick={() => scrollToSection("contact", toggleNav)}>Contact</NavLink>
        </NavLinksContainer>
      </SideNav>
    </>
  );
};

export default SideNavbar;