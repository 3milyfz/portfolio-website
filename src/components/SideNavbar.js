import React, { useState } from 'react';
import { styled } from 'styled-components'

const Nav = styled.img`
  position: fixed; // Make it fixed position
  top: 27px; // Adjust as needed
  left: 30px; // Adjust as needed
  width: 42px;
  height: 38px;
  cursor: pointer;
  z-index: 1000; // High value to ensure it's on top

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SideNav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: fit-content;
  height: 100%;
  padding: 5%;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  z-index: 1000; // High value to ensure it's on top

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  flex-direction: column;
  height: 23%;
  display: block; // Each link on its own line
  font-size: 60px; // Larger font size
  color: rgb(210, 212, 199);
  text-align: left; // Center align text
  text-decoration: none; // Remove underline
  transition: color 0.3s ease;
  justify-content: space-between;
  transition: color 0.3s ease;
  z-index: 1000; // High value to ensure it's on top

  &:hover {
    color: #555; // Color on hover, change as needed
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;


const SideNavbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
      setIsNavVisible(!isNavVisible);
    };

    return (
        <>
            <Nav src="./img/navicon.png" onClick={toggleNav}/>
            {isNavVisible && (
                <SideNav isVisible={isNavVisible}>
                <NavLink href="#home" onClick={toggleNav}>Home</NavLink>
                <NavLink href="#experience" onClick={toggleNav}>Experience</NavLink>
                <NavLink href="#projects" onClick={toggleNav}>Projects</NavLink>
                <NavLink href="#contact" onClick={toggleNav}>Contact</NavLink>
            </SideNav>
            )}
        </>
    )
}

export default SideNavbar;