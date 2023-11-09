'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Icons } from './ui/icons';

function ModelMesh({ ...props }) {
  const [isModelLoaded, setModelLoaded] = useState(false);
  const [initialSpinFrames, setInitialSpinFrames] = useState(100);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [initialSpinSpeed, setInitialSpinSpeed] = useState(0.02);

  useEffect(() => {
    const handleResize = () => {
      const xsScreenThreshold = 600; // Adjust this threshold as needed for your design
      const newInitialSpinSpeed =
        window.innerWidth <= xsScreenThreshold ? 0.6 : 0.25;
      setInitialSpinSpeed(newInitialSpinSpeed);
    };

    handleResize(); // Call it initially to set the initial spin speed
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isModelLoaded) {
    setModelLoaded(true);
  }

  const { scene } = useGLTF('/zachuri-person.glb');

  useFrame(() => {
    if (scene && isModelLoaded) {
      if (currentFrame < initialSpinFrames) {
        // Initial spin logic
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
