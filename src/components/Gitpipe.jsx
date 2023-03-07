/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 gitpipe.gltf --transform
Author: Samuel Lee (https://sketchfab.com/SamuelLee)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/old-rusty-pipeline-eb02715ec08441129c43e2b9e79215e8
Title: Old rusty pipeline
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/gitpipe-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.pipeline_geo_pipeline_mat_0.geometry}
          material={materials.pipeline_mat}
        />
        <mesh
          geometry={nodes.brace_geo_brace_mat_0.geometry}
          material={materials.brace_mat}
        />
        <mesh
          geometry={nodes.valve_geo_valve_mat_0.geometry}
          material={materials.valve_mat}
        />
        <mesh
          geometry={nodes.pipeJoint_geo_pipeJoint_mat_0.geometry}
          material={materials.pipeJoint_mat}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/gitpipe-transformed.glb");