import React from 'react';
import styled from "styled-components";
import {Link} from "react-scroll";
import {mobile} from "../responsive";
import CV from "../assests/Resume_Nischal_Dwaral.pdf";

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
  cursor: pointer;
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

  ${mobile({
    display: "none"
  })}
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
        <section id="navbar">
            <Container>
                <Left>
                    <Link spy={true} to="navbar" smooth={true} activeClass='activeClass'>
                        <Name>Nischal</Name>
                    </Link>
                </Left>
                <Right>
                    <List>
                        <UnorderedList>
                            <Link spy={true} to="navbar" smooth={true} activeClass='activeClass'>
                                <ListItem>About</ListItem>
                            </Link>
                            <Link spy={true} to="timelineStructure" smooth={true} activeClass='activeClass'>
                                <ListItem>Experience</ListItem>
                            </Link>
                            <Link spy={true} to="skills" smooth={true} activeClass='activeClass'>
                                <ListItem>Skills</ListItem>
                            </Link>
                            <Link spy={true} to="testimonials" smooth={true} activeClass='activeClass'>
                                <ListItem>Testimonials</ListItem>
                            </Link>
                            <Link spy={true} to="projects" smooth={true} activeClass='activeClass'>
                                <ListItem>Projects</ListItem>
                            </Link>
                        </UnorderedList>
                    </List>
                    <a href={CV} download="CV_Nischal_Dwaral" target='_blank' rel="noopener noreferrer">
                        <Button>
                            Resume/CV
                        </Button>
                    </a>
                </Right>
            </Container>
        </section>
    );
};

export default Navbar;
