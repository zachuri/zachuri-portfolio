'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh, Scene } from 'three';
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

    camera.lookAt(0, 0, 0); // Look at the center of the model
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
      <directionalLight castShadow />
      <mesh castShadow receiveShadow />
      <pointLight position={[5, 10, 5]} />
      <MeshComponent />
    </Canvas>
  );
}
