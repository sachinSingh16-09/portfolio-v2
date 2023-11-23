import React from 'react';
import styled from "styled-components";
import MailIcon from '../assests/gmail.png';
import LinkedInIcon from '../assests/linkedin.png';
import GitHubIcon from '../assests/github.png';
import Vector1 from '../assests/Vector1.png';
import Vector2 from '../assests/Vector2.png';
import Coder from '../assests/coder.webp';
import FloatingDiv from "./FloatingDiv";
import DevelopingIcon from '../assests/developing.png';
import BackendAndFrontendIcon from '../assests/backend.png';
import WorldWideWebIcon from '../assests/world-wide-web.png';

const Container = styled.div `
  display: flex;
  height: 77vh;
  margin-top: 6rem;
`;

const Left = styled.div `
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
`;

const Name = styled.div `
  display: flex;
  flex-direction: column;
`;

const DummyText = styled.span `
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

const NameText = styled.span `
  color: #FCA61F;
  font-size: 3rem;
  font-weight: bold;
`;

const IntroText = styled.span `
  font-size: 14px;
  color: wheat;
  margin-top: 10px;
`;

const ContactMeButton = styled.button `
  border-radius: 34px;
  border: none;
  font-size: 16px;
  color: white;
  padding: 10px;
  background: linear-gradient(180deg, #fde50f 26.71%, #fb982f 99.36%);
  box-shadow: 0 20px 24px 3px rgba(251, 161, 40, 0.42);
  width: 6rem;
  height: 2rem;

  &:hover {
    cursor: pointer;
    background: white;
    color: #FCA61F;
    border: 1px solid #FCA61F;
  }
`;

const Icons = styled.div `
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
`;

const Mail = styled.img `
  height: 50px;
  width: 50px;
`;

const LinkedIn = styled.img `
  height: 50px;
  width: 50px;
`;

const GitHub = styled.img `
  height: 50px;
  width: 50px;
`;

const Right = styled.div `
  flex: 1;
  position: relative;

  > * {
    position: absolute;
    z-index: 1;
  }
`;

const Vector1Image = styled.img `
  transform: scale(0.69);
  left: -15%;
  top: -9%;
`;

const Vector2Image = styled.img `
  transform: scale(0.67);
  left: -3rem;
  top: -4.6rem;
`;

const CoderImage = styled.img `
  transform: scale(0.8);
`;

const WorldWideWebImage = styled.img `
  transform: scale(0.7);
  left: -10%;
  padding: 0;
  border-radius: 50%;
`;

const WebDeveloperDiv = styled.div `
  top: 4%;
  left: 60%;
`;

const BackendAndFrontendDiv = styled.div `
  top: 18rem;
  left: 0;
`;

const About = () => {
    return (
        <Container>
            <Left>
                <Name>
                    <DummyText>Hi! I am</DummyText>
                    <NameText>Nischal Dwaral</NameText>
                    <IntroText>Full Stack Developer with high level of experience in web designing and development, producing quality work</IntroText>
                </Name>
                <ContactMeButton>Contact Me</ContactMeButton>
                <Icons>
                    <Mail src={MailIcon}/>
                    <LinkedIn src={LinkedInIcon}/>
                    <GitHub src={GitHubIcon}/>
                </Icons>
            </Left>
            <Right>
                <Vector1Image src={Vector1}/>
                <Vector2Image src={Vector2}/>
                <CoderImage src={Coder}/>
                <WorldWideWebImage src={WorldWideWebIcon}/>
                <WebDeveloperDiv>
                    <FloatingDiv image={DevelopingIcon} text1="Web" text2="Developer"/>
                </WebDeveloperDiv>
                <BackendAndFrontendDiv>
                    <FloatingDiv image={BackendAndFrontendIcon} text1="Backend &" text2="Frontend"/>
                </BackendAndFrontendDiv>
            </Right>
        </Container>
    );
};

export default About;
