'use client';

import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  Preload,
  Stage,
  useGLTF,
  useProgress
} from '@react-three/drei';
import { Progress } from '../ui/progress';
import Model from './model-pmnd';

function ModelMesh({ ...props }) {
  const { scene } = useGLTF('/zachuri-person.glb');

  return (
    <mesh>
      {/* <directionalLight position={[10, 10, 0]} intensity={1.5} />
      <directionalLight position={[-10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, 20, 0]} intensity={1.5} />
      <directionalLight position={[0, -10, 0]} intensity={0.25} /> */}
      <primitive object={scene} {...props} />
    </mesh>
  );
}

export function ThreeModel() {
  const { progress } = useProgress();

  return (
    <Suspense
      fallback={
        <div className="w-[80%]">
          {/* <Icons.loading /> */}
          {/* {progress}% */}
          <Progress className="h-[2px]" value={progress} />
        </div>
      }
    >
      <Canvas camera={{ fov: 12 }} shadows>
        <Stage
          // controls={ref}
          // // preset= {
          // //   value: 'rembrandt',
          // //   options: ['rembrandt', 'portrait', 'upfront', 'soft'],
          // // }
          // // intensity={value: 1, min: 0, max: 2, step: 0.1, label: 'light intensity'}
          // contactShadow={true}
          shadows
          adjustCamera
          environment={'city'}
        >
          {/* <ModelMesh rotation={[0, Math.PI / 8, 0]} scale={0.17} /> */}
          <Model rotation={[0, Math.PI / 8, 0]} scale={0.17} />
        </Stage>

        <Environment preset="sunset" />
        <OrbitControls
          autoRotate={true}
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
