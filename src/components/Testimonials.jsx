import React from 'react';
import styled from "styled-components";
import TestimonialCard from "./TestimonialCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  align-items: center;
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
        <Container>
            <TitleContainer>
                <Title>Praise and Recognition for me..</Title>
                <SubText>(via LinkedIn)</SubText>
            </TitleContainer>
            <SliderContainer>
                <Slider {...settings}>
                    <SliderContainer>
                        <TestimonialCard
                            gender='man'
                            name='Anand Kushwaha'
                            relation='Senior Technical Lead at Rakuten'
                            text='I have worked with Nischal during my employment in Rakuten. Nischal possesses the ultimate "can do" attitude while taking on all tasks with positive energy. he is a highly motivated and hard working software engineer. he understood chatbot AI system within short span of time and contributed in critical projects like presales. he did excellent job in improving the overall system stability.
                        I strongly believe he would be a great fit for any team and wishing him the best of luck.'
                        />
                    </SliderContainer>
                    <TestimonialCard
                        gender='women'
                        name='Kavya Valavala'
                        relation='Senior iOS Developer at Rakuten'
                        text='I have worked with Nischal on one of the most demanding projects and he rammed up on the backend stack rapidly to become one of the key members of conversational AI.
                        Nischal’s work ethics drives clarity and liable agreements across teams. Hence, I strongly believe he would be a great fit for any team and wishing him the best of luck '
                        />
                    <TestimonialCard
                        gender='women'
                        name='Chaitra Shetty'
                        relation='SDE at Zopsmart, Mentee'
                        text="Hi, writing this recommendation for Nischal for being an excellent senior and mentor that he is. I was fortunate enough to have Nischal as my cheerleading senior all through my engineering, he definitely plays a role in the person I am today. He has helped me to understand the placements process in the college, the do's and don'ts of interviews, the aptitude training to enhance quantitative, verbal, logical & reasoning skills. He has helped me acquire the technical knowledge ranging from DS, Algorithms, Database to OS. Nischal has a great rapport with his peers and an unbelievable willingness to help others.
                        I can firmly attest to his abilities, preparedness, dedication and efforts as a mentor. He would be a great addition to any team. Wishing him great success ahead."
                    />
                </Slider>
            </SliderContainer>
        </Container>
    );
};

export default Testimonials;
