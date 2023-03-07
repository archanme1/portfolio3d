import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Server from "./Server";
import styled from "styled-components";

const Desc = styled.div`
  position: absolute;
  top: 100px;
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

const CmsDesign = () => {
  return (
    <>
      <Canvas>
        <Stage enviroment="city" intensity={0.7}>
          <Server />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        Using <b>STRAPI</b>, I build customized backend services
      </Desc>
    </>
  );
};

export default CmsDesign;
