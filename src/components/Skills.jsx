import React from 'react';
import styled from "styled-components";
import SkillsCard from "./SkillsCard";
import JavaIcon from "../assests/java.png"
import CSharpIcon from "../assests/c-sharp.png"
import JavaScriptIcon from "../assests/java-script.png"
import TypeScriptIcon from "../assests/typescript.png"
import SpringBootIcon from "../assests/spring-boot-logo.png"
import ReactIcon from "../assests/react.png"
import NodeJSIcon from "../assests/nodejs.png"
import DotNetIcon from "../assests/net-logo.png"
import MySQLIcon from "../assests/mysql.png"
import PostgresIcon from "../assests/postgre.png"
import RedisIcon from "../assests/redis.png"
import MongoIcon from "../assests/Mongodb.png"
import GitIcon from "../assests/git.png"
import DockerIcon from "../assests/docker.png"
import KubernetesIcon from "../assests/kuberenetes.png"
import AWSIcon from "../assests/aws.png"
import PostmanIcon from "../assests/postman.png"
import JiraIcon from "../assests/jira.png"
import JenkinsIcon from "../assests/jenkins.webp"
import GrafanaIcon from "../assests/grafana.png"

const Container = styled.div `
  display: flex;
  margin-top: 3rem;
  gap: 2rem;
  border-bottom: 0.5px solid wheat;
  flex-direction: column;
`;

const Title = styled.div `
  color: #FCA61F;
  font-size: 3rem;
  font-weight: bold;
`;

const Cards = styled.div `
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const CardContainer = styled.div ``;

const Skills = () => {

    const languages = [
        { title: "Java", image: JavaIcon },
        { title: "C#", image: CSharpIcon },
        { title: "JavaScript", image: JavaScriptIcon },
        { title: "TypeScript", image: TypeScriptIcon },
    ];

    const frameworks = [
        { title: "Spring Boot", image: SpringBootIcon },
        { title: "React", image: ReactIcon },
        { title: "Dot Net", image: DotNetIcon },
        { title: "Node JS", image: NodeJSIcon },
    ]

    const databases = [
        { title: "MySQL", image: MySQLIcon },
        { title: "PostgreSQL", image: PostgresIcon },
        { title: "Redis", image: RedisIcon },
        { title: "Mongo DB", image: MongoIcon },
    ]

    const platform = [
        { title: "Git", image: GitIcon },
        { title: "Kubernetes", image: KubernetesIcon },
        { title: "AWS", image: AWSIcon },
        { title: "Docker", image: DockerIcon },
    ]

    const tools = [
        { title: "Jenkins", image: JenkinsIcon },
        { title: "Grafana", image: GrafanaIcon },
        { title: "Postman", image: PostmanIcon },
        { title: "Jira", image: JiraIcon }
    ]

    return (
        <Container>
            <Title>Skills I've gained</Title>
            <Cards>
                <CardContainer>
                    <SkillsCard
                        title="Languages"
                        icons={languages}
                    />
                </CardContainer>
                <CardContainer>
                    <SkillsCard
                        title="Frameworks"
                        icons={frameworks}
                    />
                </CardContainer>
                <CardContainer>
                    <SkillsCard
                        title="Databases"
                        icons={databases}
                    />
                </CardContainer>
                <CardContainer>
                    <SkillsCard
                        title="Platforms"
                        icons={platform}
                    />
                </CardContainer>
                <CardContainer>
                    <SkillsCard
                        title="Tools"
                        icons={tools}
                    />
                </CardContainer>
            </Cards>
        </Container>
    );
};

export default Skills;
