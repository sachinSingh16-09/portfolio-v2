import React from 'react';
import styled from "styled-components";
import {GitHub, OpenInBrowser} from "@mui/icons-material";

const Container = styled.div `
  background-color: white;
  color: black;
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.span `
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0;
`;

const Summary = styled.p `
`;

const Technology = styled.div `
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const TechnologyText = styled.div `
  padding: 0.5rem;
  color: black;
  background-color: #FCA61F;
  border-radius: 5px;
`;

const ButtonContainer = styled.div `
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const GithubButton = styled.button `
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
`;

const DemoButton = styled.button `
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
`;

const ProjectCard = ({ title, summary, technologies, githubLink, demoLink }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Summary>{summary}</Summary>
            <Technology>
                {technologies.map((entry) => (
                    <TechnologyText>{entry}</TechnologyText>
                ))}
            </Technology>
            <ButtonContainer>
                <GithubButton
                    onClick={() => window.open(githubLink)}>
                    <GitHub/>
                    Repository
                </GithubButton>
                {
                    demoLink !== undefined && (
                        <>
                            <DemoButton
                                onClick={() => window.open(demoLink)}>
                                <OpenInBrowser/> Demo
                            </DemoButton>
                        </>
                    )
                }
            </ButtonContainer>
        </Container>
    );
};

export default ProjectCard;
