"use client"
import { Canvas } from '@react-three/fiber';
import React from 'react';

import { OrbitControls, SoftShadows } from '@react-three/drei';
import { ProteinModel } from './ProteinModel';



const ModelViewer = () => {
  return (
    <Canvas  shadows>
       <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        
      />
      
      <ambientLight  castShadow intensity={1.5} color={"white"} />
      
      <mesh scale={[0.1,0.1,0.1]} rotation={[Math.PI / -2, 0, 0]}>
      <ProteinModel />
      </mesh>
            
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;