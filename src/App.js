import styled from "styled-components";
import Navbar from "./components/Navbar";
import About from "./components/About";

const Container = styled.div `
  padding: 0.5rem 3.5rem;
  overflow: hidden;
  color: #242D49;
  background: black;
`;

function App() {
  return (
    <Container>
        <Navbar/>
        <About/>
    </Container>
  );
}

export default App;
