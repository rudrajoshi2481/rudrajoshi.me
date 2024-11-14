"use client"

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

function ProteinModel() {
  const { scene } = useGLTF('/7AAD02.gltf'); // Make sure the path is correct

  // Reference to the scene to apply transformations
  const modelRef:any = useRef();

  // Make the model rotate on each frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001; // Adjust the rotation speed (in radians)
    }
  });

  return (
    <>
      {/* Zoom out by moving the camera further back */}
      
      <primitive ref={modelRef} object={scene} />
    </>
  );
}

export default ProteinModel;
