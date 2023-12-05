import { Canvas } from '@react-three/fiber';
import React from 'react';
import { ProteinModel } from './Proteinmodel';
import { OrbitControls, SoftShadows } from '@react-three/drei';



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
      <ambientLight intensity={0.9} color={"white"} />
      <pointLight position={[10, 10, 10]} />
      <mesh scale={[0.1,0.1,0.1]} rotation={[Math.PI / -2, 0, 0]}>
      <ProteinModel />
      </mesh>
      
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
