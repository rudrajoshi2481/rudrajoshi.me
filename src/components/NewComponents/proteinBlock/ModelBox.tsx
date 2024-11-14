"use client"
import { Canvas } from '@react-three/fiber';
import React from 'react';

import { OrbitControls, SoftShadows } from '@react-three/drei';
import ProteinModel from './ProteinModel';




const ModelViewer = () => {
  return (
    // <Canvas>
      <>
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        
      />

       <spotLight position={[0, 0, 0]} intensity={1} castShadow />
<OrbitControls />
       <ambientLight  castShadow intensity={1.5} color={"white"} />
      <spotLight position={[10, 10, 10]} />
      <ProteinModel /></>
    // </Canvas>
  );
};

export default ModelViewer;