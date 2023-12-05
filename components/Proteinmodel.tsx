/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 7AAD02.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';


export function ProteinModel(props:any) {
  const { nodes, materials }:any = useGLTF('/7AAD02.gltf')

  const ModelRef = useRef()

   // Use the useFrame hook to rotate the model on each frame
   useFrame(() => {
    if (ModelRef.current) {

        // @ts-expect-error
      ModelRef.current.rotation.z += 0.001; // Adjust the rotation speed as needed
      // @ts-expect-error
      ModelRef.current.rotation.y += 0.001;
      // @ts-expect-error
      ModelRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group {...props} ref={ModelRef} dispose={null}>
        
      <mesh geometry={nodes.Mesh_0001.geometry} material={materials['Material_0.001']} position={[-10.033, -38.901, -7.008]} />
      <mesh geometry={nodes.Mesh_1001.geometry} material={materials['Material_0.001']} position={[-10.033, -38.901, -7.008]} />
      <mesh geometry={nodes.Mesh_2001.geometry} material={materials['Material_0.001']} position={[-10.033, -38.901, -7.008]} />
      <mesh geometry={nodes.Mesh_3001.geometry} material={materials.Material_1} position={[-10.033, -38.901, -7.008]} />
      <mesh geometry={nodes.Mesh_4001.geometry} material={materials['Material_0.001']} position={[-10.033, -38.901, -7.008]} />
      <mesh geometry={nodes.Mesh_5001.geometry} material={materials['Material_0.001']} position={[-10.033, -38.901, -7.008]} />
      <mesh geometry={nodes.Mesh_6001.geometry} material={materials['Material_0.001']} position={[-10.033, -38.901, -7.008]} />
      <mesh geometry={nodes.Mesh_7001.geometry} material={materials['Material_0.001']} position={[-10.033, -38.901, -7.008]} />
    </group>
  )
}

useGLTF.preload('/7AAD02.gltf')