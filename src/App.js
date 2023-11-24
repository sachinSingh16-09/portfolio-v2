import React from 'react';
import styled from "styled-components";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TimelineStructure from "./components/TimelineStructure";
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

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
`;

function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Container>
              <Navbar/>
              <About/>
              <TimelineStructure/>
          </Container>
      </ThemeProvider>
  );
}

export default App;
