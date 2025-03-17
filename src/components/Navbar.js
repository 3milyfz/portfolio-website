import React from 'react';
import { styled } from 'styled-components'
import SideNavbar from './SideNavbar';

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 10px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  padding-left: 78px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    padding-left: 0px;
    gap: 20px;
  }
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Me = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    animation: bounce 0.8s infinite ease-in-out;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const NavBar = () => {
  
  return (
    <Section>
        <Container>
            <Links>
              <List>
                <SideNavbar/>
                <Img src="./img/linkedin.png" onClick={()=>window.open('https://www.linkedin.com/in/emily-fz/')}/>
                <Img src="./img/github.png" onClick={()=>window.open('https://github.com/3milyfz')}/>
                <Img src="./img/instagram.png" onClick={()=>window.open('https://www.instagram.com/emilyyzhou/')}/>
              </List>
            </Links>
            <Me src="./img/me.jpg"/>
        </Container>
    </Section>
  )
}

export default NavBar;