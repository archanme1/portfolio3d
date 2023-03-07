import styled from "styled-components";
import Contact from "./components/Contact";
import Me from "./components/Me";
import Test from "./components/Test";
import Who from "./components/Who";
import Works from "./components/Works";

function App() {
  const Container = styled.div`
    height: 100vh;
    color: white;
    background: url("./img/bg.jpeg");
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <Container>
      <Me />
      <Who />
      <Works />
      <Contact />
      {/* <Test /> */}
    </Container>
  );
}

export default App;
