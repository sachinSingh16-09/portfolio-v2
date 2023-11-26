import React from 'react';
import styled from "styled-components";
import TestimonialCard from "./TestimonialCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {recommendations} from "../data";

const Container = styled.div `
  display: flex;
  margin-top: 3rem;
  gap: 2rem;
  border-bottom: 0.5px solid wheat;
  flex-direction: column;
  padding-bottom: 3rem;
`;

const TitleContainer = styled.div `
  display: flex;
  align-items: baseline;
`;

const Title = styled.span `
  color: #FCA61F;
  font-size: 3rem;
  font-weight: bold;
`;

const SubText = styled.span `
  color: white;
  font-size: 1.5rem;
`;

const SliderContainer = styled.div `
`;

const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 8000
    };

    return (
        <section id="testimonials">
            <Container>
                <TitleContainer>
                    <Title>Praise and Recognition for me..</Title>
                    <SubText>(via LinkedIn)</SubText>
                </TitleContainer>
                <SliderContainer>
                    <Slider {...settings}>
                        {
                            recommendations.map((entry, index) => (
                                <TestimonialCard
                                    key={index}
                                    gender={entry.gender}
                                    name={entry.name}
                                    relation={entry.relation}
                                    text={entry.text}
                                />
                            ))
                        }
                    </Slider>
                </SliderContainer>
            </Container>
        </section>
    );
};

export default Testimonials;
