'use client';

import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  Preload,
  useGLTF,
  useProgress
} from '@react-three/drei';
import { Progress } from './ui/progress';

function ModelMesh({ ...props }) {
  const { scene } = useGLTF('/zachuri-person.glb');

  useFrame(() => {
    if (scene) {
      scene.rotation.y += 0.002;
    }
  });

  return (
    <mesh>
      <primitive object={scene} {...props} />
    </mesh>
  );
}

export function ThreeModel() {
  const { progress } = useProgress();

  return (
    <Suspense
      fallback={
        <p className="w-[80%]">
          {/* <Icons.loading /> */}
          {/* {progress}% */}
          <Progress className="h-[2px]" value={progress} />
        </p>
      }
    >
      <Canvas camera={{ fov: 12 }} shadows>
        <ModelMesh rotation={[0, Math.PI / 8, 0]} scale={0.17} />
        <Environment preset="sunset" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
        {/* <axesHelper args={[5]} /> */}
        <Preload all />
      </Canvas>
    </Suspense>
  );
}
