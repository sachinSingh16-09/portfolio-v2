import React from 'react';
import styled from "styled-components";

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  height: 12rem;
  background: rgba(255, 255, 255, 0.50);
  box-shadow: 0 19px 60px rgb(0 0 0 / 8%);
  border-radius: 20px;
  border: 7px solid rgba(252, 166, 31, 0.45);
  padding: 0.3rem;
`;

const Title = styled.span `
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
`;

const IconDiv = styled.div `
  box-sizing: border-box;
  padding: 0.2rem;
`;

const IconImage = styled.img `
  height: 64px;
  width: 64px;
`;

const SkillsCard = ({ title, icons }) => {

    const divideIntoRows = (array, itemsPerRow) => {
        return array.reduce((rows, item, index) => {
            if (index % itemsPerRow === 0) {
                rows.push([item]);
            } else {
                rows[rows.length - 1].push(item);
            }
            return rows;
        }, []);
    };

    const iconRows = divideIntoRows(icons, 2);

    return (
        <Container>
            <Title>{title}</Title>
            {iconRows.map((row, rowIndex) => (
                <Row key={rowIndex}>
                    {row.map((icon, index) => (
                        <IconDiv key={index}>
                            <IconImage src={icon.image} alt={icon.title}/>
                        </IconDiv>
                    ))}
                </Row>
            ))}
        </Container>
    );
};

export default SkillsCard;
