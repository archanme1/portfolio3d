import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Iphone from "./Iphone";
import styled from "styled-components";

const Desc = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50px;
  margin: auto;
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

const ResponsiveDesign = () => {
  return (
    <>
      <Canvas>
        <Stage enviroment="city" intensity={0.7}>
          <Iphone />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        Designing <b>RESPONSIVE</b> websites to adapt for multiple device
        resolutions
      </Desc>
    </>
  );
};

export default ResponsiveDesign;
