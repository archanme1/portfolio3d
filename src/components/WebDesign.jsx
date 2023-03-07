import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Html from "./Html";

const Desc = styled.div`
  position: absolute;
  bottom: 100px;
  right: 50px;
  width: 175px;
  height: 70px;
  padding: 10px;
  background-color: #da4ea2;
  border-radius: 10px;
  color: white;
  font-size: 12px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Stage enviroment="city" intensity={0.7}>
          <Html />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        My tools include <b>HTML, CSS, Javascript,</b> and its frameworks{" "}
        <b>ReactJS, ViteJS and NextJS</b>
      </Desc>
    </>
  );
};

export default WebDesign;
