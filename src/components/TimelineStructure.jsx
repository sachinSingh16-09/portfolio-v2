import React from 'react';
import {Timeline} from "@mui/lab";
import TimelineCard from "./TimelineCard";
import styled from "styled-components";
import {journey} from "../data";

const Container = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding-bottom: 3rem;
  gap: 2rem;
  border-bottom: 0.5px solid wheat;
`;

const Title = styled.div `
  color: #FCA61F;
  font-size: 3rem;
  font-weight: bold;
`;

const TimelineStructure = () => {

    return (
        <Container>
            <Title>
                Journey so far
            </Title>
            <Timeline position="alternate">
                {journey.map((entry, index) => (
                    <TimelineCard
                        key={index}
                        timeline={entry.timeline}
                        header={entry.header}
                        footer={entry.footer}
                        type={entry.type}
                        period={entry.period}
                        summary={entry.summary}
                    />
                ))}
            </Timeline>
        </Container>
    );
};

export default TimelineStructure;
