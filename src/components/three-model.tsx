'use client';

import { Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Icons } from './ui/icons';

function ModelMesh({ ...props }) {
  const [isModelLoaded, setModelLoaded] = useState(false);

  if (!isModelLoaded) {
    setModelLoaded(true);
  }

  const { scene } = useGLTF('/zachuri-person.glb');

  // Add an automatic rotation using useFrame
  useFrame(() => {
    if (scene && isModelLoaded) {
      scene.rotation.y += 0.002; // Adjust the rotation speed as needed
    }
  });

  return (
    <>
      {isModelLoaded ? (
        <primitive object={scene} {...props} />
      ) : (
        <Icons.loading />
      )}
    </>
  );
}

export const angleToRadians = (angleInDeg: number) =>
  (Math.PI / 180) * angleInDeg;

export function ThreeModel() {
  return (
    <Suspense fallback={<Icons.loading />}>
      <Canvas camera={{ position: [5, 5, -5], fov: 8 }}>
        <ModelMesh
          rotation={[0, Math.PI / 2, 0]}
          position={[0, -0.1, 0]}
          scale={0.25}
        />
        <Environment preset="sunset" />
        <OrbitControls
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
        {/* <axesHelper args={[5]} /> */}
      </Canvas>
    </Suspense>
  );
}
