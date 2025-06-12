import React from 'react';
import styled from "styled-components";
import ProjectCard from "./ProjectsCard";
import {projects} from "../data";
import {mobile} from "../responsive";

const Container = styled.div `
  display: flex;
  margin-top: 3rem;
  gap: 2rem;
  flex-direction: column;
  padding-bottom: 3rem;
`;

const Title = styled.span `
  color:rgb(252, 31, 241);
  font-size: 3rem;
  font-weight: bold;
`;

const CardsDivMain = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat({$props.columns}, 1fr);
  gap: 1rem;

  ${mobile({
    display: 'flex',
    flexDirection: "column",
    gap: '1rem'
  })}
`;

const Projects = () => {

    const data = projects;

    const getTemplateRows = (projects) => {
        return Math.ceil(projects.length / 2);
    }

    return (
        <section id="projects">
            <Container>
                <Title>Personal projects..</Title>
                <CardsDivMain rows={getTemplateRows(data)}>
                    {
                        data.map((entry, index) => (
                            <ProjectCard
                                key={index}
                                title={entry.title}
                                summary={entry.summary}
                                githubLink={entry.githubLink}
                                // demoLink={entry.demoLink}
                                technologies={entry.technologies}
                            />
                        ))
                    }
                </CardsDivMain>
            </Container>
        </section>
    );
};

export default Projects;
