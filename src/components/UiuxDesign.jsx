import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Figma from "./Figma";
import styled from "styled-components";

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

const UiuxDesign = () => {
  return (
    <>
      <Canvas>
        <Stage enviroment="city" intensity={0.7}>
          <Figma />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        Using <b>FIGMA</b>, I design mobile and web based application interfaces
      </Desc>
    </>
  );
};

export default UiuxDesign;
