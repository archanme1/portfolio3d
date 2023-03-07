/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 iphone.gltf --transform
Author: Ciasny (https://sketchfab.com/Ciasny)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/iphone-14-pro-775e68d5d1a44b6c849ac25587707cd2
Title: iPhone 14 PRO
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/iphone-transformed.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="IP_8"
                position={[0, -0.13, 0.09]}
                scale={[0.78, 1.55, 0.12]}
              >
                <group
                  name="Cube_2"
                  position={[0, 0, 0.2]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1.27, 8.04, 0.65]}
                >
                  <mesh
                    name="Object_5"
                    geometry={nodes.Object_5.geometry}
                    material={materials.obudowa}
                  />
                  <mesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials.ekran}
                  />
                  <mesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials["ekran_obramowanie.001"]}
                  />
                  <mesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.LOGO}
                  />
                  <mesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.ekran_obramowanie}
                  />
                  <mesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.Material}
                  />
                </group>
                <group
                  name="Cube001_3"
                  position={[0, 0.67, 0.2]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1.27, 8.04, 0.65]}
                >
                  <mesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.obudowa}
                  />
                </group>
                <group
                  name="Cube002_4"
                  position={[0, 0, 0.59]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[-1.27, 8.04, 0.65]}
                >
                  <mesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.ekran_obramowanie}
                  />
                  <mesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.aparaty}
                  />
                  <mesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials["szko.001"]}
                  />
                  <mesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials["Lampka.001"]}
                  />
                  <mesh
                    name="Object_18"
                    geometry={nodes.Object_18.geometry}
                    material={materials.szko}
                  />
                  <mesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.obudowa}
                  />
                </group>
                <group
                  name="Cube003_5"
                  position={[0, 0, 0.59]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[-1.27, 8.04, 0.65]}
                >
                  <mesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials.paski_na_bokach}
                  />
                  <mesh
                    name="Object_22"
                    geometry={nodes.Object_22.geometry}
                    material={materials.szko}
                  />
                  <mesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials["Lampka.001"]}
                  />
                </group>
                <group
                  name="Cylinder_6"
                  position={[0.89, 0.23, 0.22]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.2, 0.03, 0.02]}
                >
                  <mesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials.obudowa}
                  />
                </group>
                <group
                  name="Cylinder001_7"
                  position={[-0.9, 0.33, 0.22]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.2, 0.03, 0.02]}
                >
                  <mesh
                    name="Object_27"
                    geometry={nodes.Object_27.geometry}
                    material={materials.obudowa}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/iphone-transformed.glb");