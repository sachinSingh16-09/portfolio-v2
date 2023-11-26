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

const LogoIcon = styled.img `
  height: 50px;
  width: 50px;
`;

const FloatingDiv = ({image, type, text1, text2, icon1, icon2}) => {
    return (
        <Container>
            {
                type === 'text' ?
                    <>
                        <IconImage src={image} alt="" />
                        <Text>
                            {text1}
                            <br/>
                            {text2}
                        </Text>
                    </>
                :
                <>
                    <LogoIcon src={icon1} alt="" />
                    <LogoIcon src={icon2} alt="" />
                </>
            }
        </Container>
    );
};

export default FloatingDiv;
