'use client';

import { Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Icons } from './ui/icons';

function ModelMesh({ ...props }) {
  const [isModelLoaded, setModelLoaded] = useState(false);
  const [initialSpinFrames, setInitialSpinFrames] = useState(100); // Number of frames for initial spin
  const [currentFrame, setCurrentFrame] = useState(0);

  if (!isModelLoaded) {
    setModelLoaded(true);
  }

  const { scene } = useGLTF('/zachuri-person.glb');

  // Add an automatic rotation using useFrame
  useFrame(() => {
    if (scene && isModelLoaded) {
      if (currentFrame < initialSpinFrames) {
        // Initial spin logic
        const initialSpinSpeed = 0.28;
        scene.rotation.y += initialSpinSpeed;
        setCurrentFrame(prevFrame => prevFrame + 1);
      } else {
        // Normal rotation logic
        const normalRotationSpeed = 0.002;
        scene.rotation.y += normalRotationSpeed;
      }
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
        <ModelMesh rotation={[0, Math.PI / 8, 0]} scale={0.2} />
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
