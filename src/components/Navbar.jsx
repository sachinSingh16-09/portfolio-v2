import React from 'react';
import styled from "styled-components";

const Container = styled.div `
  height: 10vh;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid wheat;
`;

const Left = styled.div `
  flex: 1;
  align-items: center;
  display: flex;
  gap: 2rem;
`;

const Name = styled.div `
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
`;

const Right = styled.div `
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: 400;
`;

const List = styled.div `
  flex: 10;
`;

const UnorderedList = styled.ul `
  display: flex;
  gap: 2rem;
  margin-right: 4rem;
  list-style-type: none;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const ListItem = styled.li `
  &:hover {
    color: #FCA61F;
  }
`;

const Button = styled.button `
  border-radius: 34px;
  border: none;
  font-size: 16px;
  color: white;
  padding: 10px;
  background: linear-gradient(180deg, #fde50f 26.71%, #fb982f 99.36%);
  box-shadow: 0 20px 24px 3px rgba(251, 161, 40, 0.42);
  flex: 2;
  
  &:hover {
    cursor: pointer;
    background: white;
    color: #FCA61F;
    border: 1px solid #FCA61F;
  }
`;

const Navbar = () => {
    return (
        <Container>
            <Left>
                <Name>
                    Nischal
                </Name>
            </Left>
            <Right>
                <List>
                    <UnorderedList>
                        <ListItem>About</ListItem>
                        <ListItem>Experience</ListItem>
                        <ListItem>Education</ListItem>
                        <ListItem>Skills</ListItem>
                        <ListItem>Testimonials</ListItem>
                    </UnorderedList>
                </List>
                <Button>
                    Resume/CV
                </Button>
            </Right>
        </Container>
    );
};

export default Navbar;
