import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Gitpipe from "./Gitpipe";
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

const GithubDesign = () => {
  return (
    <>
      <Canvas>
        <Stage enviroment="city" intensity={0.7}>
          <Gitpipe />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        Using <b> GITHUB </b> to store, track, and collaborate with other
        developers
      </Desc>
    </>
  );
};

export default GithubDesign;
