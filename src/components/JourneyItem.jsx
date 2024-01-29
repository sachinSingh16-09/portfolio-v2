import React from 'react';
import {School, Work} from "@mui/icons-material";
import styled, {css} from "styled-components";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import {mobile} from "../responsive";

const CustomVerticalTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-date {
    color: #fff; 
  }
  
  ${mobile(css`
    .vertical-timeline-element-date {
      color: #000; 
    }
  `)}
`;

const SummaryDiv = styled.div `
  display: flex;
  flex-direction: column;
`;

const ItemPosition = styled.span `
  margin: 0;
  font-weight: bold;
  font-size: 1.3rem;
`;

const ItemLocation = styled.span `
  margin: 0;
  font-size: 0.9rem;
`;

const Period = styled.span `
  font-size: 0.8rem;
  font-weight: bold;
`;

const Summary = styled.span `
  font-size: 0.8rem;
  margin: 0.2rem 0;
`;

const JourneyItem = ({timeline, header, footer, period, summary, type}) => {

    const IconComponent = type === 'work' ? <Work /> : <School />;
    const className = type === 'work' ? `vertical-timeline-element--work` : `vertical-timeline-element--education`;

    return (
        <CustomVerticalTimelineElement
            className={className}
            date={timeline}
            iconStyle={{ background: "#FCA61F", color: "#fff" }}
            icon={IconComponent}
        >
            <SummaryDiv>
                <ItemPosition>{header}</ItemPosition>
                <ItemLocation>{footer}</ItemLocation>
                <Period>{period}</Period>
                <Summary>{summary}</Summary>
            </SummaryDiv>
        </CustomVerticalTimelineElement>
    );
};

export default JourneyItem;
