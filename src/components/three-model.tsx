'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  Preload,
  useGLTF,
  useProgress
} from '@react-three/drei';
import { Icons } from './ui/icons';
import { progress } from 'framer-motion';

function ModelMesh({ ...props }) {
  const { scene } = useGLTF('/zachuri-person.glb');

  useFrame(() => {
    if (scene) {
      scene.rotation.y += 0.002;
    }
  });

  return (
    <>
      <mesh>
        <primitive object={scene} {...props} />
      </mesh>
    </>
  );
}

export const angleToRadians = (angleInDeg: number) =>
  (Math.PI / 180) * angleInDeg;

export function ThreeModel() {
  const { progress } = useProgress();

  return (
    <Suspense
      fallback={
        <p className="flex flex-col">
          <Icons.loading />
          {progress.toFixed(2)}%
        </p>
      }
    >
      <Canvas camera={{ fov: 12 }} shadows>
        <ModelMesh rotation={[0, Math.PI / 8, 0]} scale={0.2} />
        <Environment preset="sunset" />
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
        <axesHelper args={[5]} />
        <Preload all />
      </Canvas>
    </Suspense>
  );
}
