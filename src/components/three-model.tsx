'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

function MeshComponent() {
  const fileUrl = '/zachuri-person.glb';
  const mesh = useRef<Mesh>(null!);

  // const gltf = useLoader(GLTFLoader, fileUrl);
  const gltf = useLoader(GLTFLoader, fileUrl, loader => {
    // Load DRACOLoader
    const dracoLoader = new DRACOLoader();
    loader.dracoLoader = dracoLoader;
    dracoLoader.setDecoderPath('/draco/');
    dracoLoader.setDecoderConfig({ type: 'js' });
    loader.setDRACOLoader(dracoLoader);
  });

  useFrame(({ camera }) => {
    mesh.current.rotation.y += 0.002;

    // Set the camera position to a front-top-middle angle
    camera.position.set(0, 2, 5);

    camera.lookAt(0, 1, 0); // Look at the center of the model
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function ThreeModel() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MeshComponent />
    </Canvas>
  );
}
