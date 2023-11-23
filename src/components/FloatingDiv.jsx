import React from 'react';
import styled from "styled-components";

const Container = styled.div `
  justify-content: space-around;
  display: flex;
  background: white;
  box-shadow : 0 19px 60px rgb(0 0 0 / 8%);
  border-radius: 17px;
  align-items: center;
  padding: 0 15px;
  height: 4.5rem;
  gap: 0.5rem;
`;

const IconImage = styled.img `
  transform: scale(0.8);
`;

const Text = styled.span ``;

const FloatingDiv = ({image, text1, text2}) => {
    return (
        <Container>
            <IconImage src={image} alt="" />
            <Text>
                {text1}
                <br/>
                {text2}
            </Text>
        </Container>
    );
};

export default FloatingDiv;
