import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import {journey} from "../data";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import JourneyItem from "./JourneyItem";

const Container = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding-bottom: 3rem;
  gap: 2rem;
  border-bottom: 0.5px solid wheat;
`;

const Title = styled.div `
  color: rgb(252, 31, 241);
  font-size: 3rem;
  font-weight: bold;
`;

const Journey = () => {
    return (
        <section id="timelineStructure">
            <Container>
                <Title>
                    Journey so far
                </Title>
                <VerticalTimeline lineColor="#fff">
                    {journey.map((entry, index) => (
                        <JourneyItem
                            key={index}
                            timeline={entry.timeline}
                            header={entry.header}
                            footer={entry.footer}
                            type={entry.type}
                            period={entry.period}
                            summary={entry.summary}
                        />
                    ))}
                </VerticalTimeline>
            </Container>
        </section>

    );
};

export default Journey;
