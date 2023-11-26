import React from 'react';
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import styled from "styled-components";
import {School, Work} from "@mui/icons-material";

const OppositeText = styled.h4 ``;

const AccordionSummaryDiv = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AccordionSummaryHeader = styled.span `
  margin: 0;
  font-weight: bold;
  font-size: 1.3rem;
`;

const AccordionSummaryFooter = styled.span `
  margin: 0;
  font-size: 0.9rem;
  color: wheat;
`;

const Details = styled.div `
  display: flex;
  flex-direction: column;
`;

const Period = styled.span `
  font-size: 0.8rem;
  font-weight: bold;
  color: wheat;
`;

const Summary = styled.span `
  font-size: 0.8rem;
  margin: 0.2rem 0;
  text-align: justify;
  text-justify: inter-word;
`;

const TimelineCard = ({ timeline, header, footer, type, period, summary }) => {

    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="white"
            >
                <OppositeText>{timeline}</OppositeText>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                    {
                        type === 'work' ? <Work/> : <School/>
                    }
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Accordion
                    style={{
                        background: 'black',
                        color: 'white'
                    }}
                >
                    <AccordionSummary
                        id="panel1a-header"
                    >
                        <AccordionSummaryDiv>
                            <AccordionSummaryHeader>{header}</AccordionSummaryHeader>
                            <AccordionSummaryFooter>{footer}</AccordionSummaryFooter>
                        </AccordionSummaryDiv>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Period>{period}</Period>
                        <Details>
                            <Summary>{summary}</Summary>
                        </Details>
                    </AccordionDetails>
                </Accordion>
            </TimelineContent>
        </TimelineItem>
    );
};

export default TimelineCard;
