'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh, Scene } from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

function ModelMesh({ ...props }) {
  const fileUrl = '/zachuri-person.glb';
  const meshRef = useRef<Mesh>(null!);

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
    meshRef.current.rotation.y += 0.002;

    camera.lookAt(0, 0, 0); // Look at the center of the model
  });

  return (
    <mesh {...props} ref={meshRef} castShadow receiveShadow>
      <directionalLight
        castShadow
        position={[2.5, 8, 5]}
        shadow-mapSize={[1024, 1024]}
      />
      <meshStandardMaterial />
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function ThreeModel() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight/>
      <ModelMesh />
    </Canvas>
  );
}
