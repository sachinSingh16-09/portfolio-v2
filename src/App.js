import React from 'react';
import styled from "styled-components";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TimelineStructure from "./components/TimelineStructure";
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import {mobile} from "./responsive";

const theme = createTheme({
    typography: {
        fontFamily: '"Urbanist", sans-serif',
    },
});

const Container = styled.div `
  padding: 0.5rem 3.5rem;
  overflow: hidden;
  color: #242D49;
  background: black;

  ${mobile({
    padding: "0.5rem 1rem"
  })}
`;

function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Container>
              <Navbar/>
              <About/>
              <TimelineStructure/>
              <Skills/>
              <Testimonials/>
              <Projects/>
              <Footer/>
          </Container>
      </ThemeProvider>
  );
}

export default App;
