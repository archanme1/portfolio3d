import React from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1300px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 42px;
  letter-spacing: 1px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 10px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
  letter-spacing: 1px;
`;
const Desc = styled.p`
  letter-spacing: 1px;
  color: lightgray;
  line-height: 20px;

  @media only screen and (max-width: 768px) {
    width: 300px;
    line-height: 20px;
    font-size: 10px;
  }
`;
const Button = styled.a`
  width: 250px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Take an outside-the-box approach.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What I am aiming.</Subtitle>
          </WhatWeDo>
          <Desc>
            To obtain a professional position in the industry utilizing my
            relevant experience, technical expertise, and problem-solving
            skills, along with self-development and achieving personal as well
            as organization goals.
          </Desc>
          <Button href="https://www.linkedin.com/in/archanme1/" target="_black">
            &lt; Visit my Linkedin /&gt;
          </Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
