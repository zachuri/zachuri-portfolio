'use client';

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Tshirt001: THREE.Mesh;
    Trousers001: THREE.Mesh;
    Tounge001: THREE.Mesh;
    Teeth_upper001: THREE.Mesh;
    Teeth_lower001: THREE.Mesh;
    Sphere002: THREE.Mesh;
    Sphere003: THREE.Mesh;
    Vert006: THREE.Mesh;
    Vert006_1: THREE.Mesh;
    Vert006_2: THREE.Mesh;
    Vert006_3: THREE.Mesh;
    Vert006_4: THREE.Mesh;
    Nose001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder002_1: THREE.Mesh;
    Mesh_5: THREE.Mesh;
    Mesh_6: THREE.Mesh;
    Hair_Top001: THREE.Mesh;
    Hair_Inner001: THREE.Mesh;
    Ears001: THREE.Mesh;
    Cube001: THREE.Mesh;
    Circle002: THREE.Mesh;
    Circle003: THREE.Mesh;
    Body001: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube009: THREE.Mesh;
    Mesh001: THREE.Mesh;
    Mesh001_1: THREE.Mesh;
    Screen_Monitor_Middle: THREE.Mesh;
  };
  materials: {
    ['Tshirt.002']: THREE.MeshStandardMaterial;
    ['jeans.002']: THREE.MeshStandardMaterial;
    ['tounge.002']: THREE.MeshStandardMaterial;
    ['teeth.002']: THREE.MeshStandardMaterial;
    ['eyes.004']: THREE.MeshStandardMaterial;
    ['eyes.005']: THREE.MeshStandardMaterial;
    ['Base.002']: THREE.MeshStandardMaterial;
    ['scondary colour.002']: THREE.MeshStandardMaterial;
    ['dots.002']: THREE.MeshStandardMaterial;
    ['tick.002']: THREE.MeshStandardMaterial;
    ['laces.002']: THREE.MeshStandardMaterial;
    ['Skin.002']: THREE.MeshStandardMaterial;
    ['inner mouth.002']: THREE.MeshStandardMaterial;
    ['hair.002']: THREE.MeshStandardMaterial;
    ['Table Top']: THREE.MeshStandardMaterial;
    ['Standing Desk Arms']: THREE.MeshStandardMaterial;
    ['Monitor outside']: THREE.MeshStandardMaterial;
    Mount: THREE.MeshStandardMaterial;
    ['blinn1.001']: THREE.MeshPhysicalMaterial;
    ['blinn2.001']: THREE.MeshPhysicalMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/zachuri-person.glb') as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tshirt001.geometry}
        material={materials['Tshirt.002']}
        position={[-0.002, 0.737, 0.022]}
        scale={1.286}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trousers001.geometry}
        material={materials['jeans.002']}
        position={[0.002, 0.959, 0.021]}
        scale={[1.377, 1.749, 1.377]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tounge001.geometry}
        material={materials['tounge.002']}
        position={[-0.002, 1.787, 0.134]}
        scale={[1.161, 0.477, 1.286]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teeth_upper001.geometry}
        material={materials['teeth.002']}
        position={[-0.002, 1.811, 0.151]}
        scale={[0.614, 0.093, 0.208]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teeth_lower001.geometry}
        material={materials['teeth.002']}
        position={[-0.002, 1.786, 0.149]}
        rotation={[0, 0, Math.PI]}
        scale={[0.566, 0.088, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials['eyes.004']}
        position={[0.062, 1.903, 0.162]}
        scale={[1.242, 1.892, 0.993]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={materials['eyes.005']}
        position={[0.062, 1.903, 0.162]}
        scale={[1.242, 1.892, 0.993]}
      />
      <group position={[-0.11, 0.044, 0.329]} scale={0.644}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert006.geometry}
          material={materials['Base.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert006_1.geometry}
          material={materials['scondary colour.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert006_2.geometry}
          material={materials['dots.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert006_3.geometry}
          material={materials['tick.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert006_4.geometry}
          material={materials['laces.002']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nose001.geometry}
        material={materials['Skin.002']}
        position={[-0.001, 1.853, 0.172]}
        scale={1.286}
      />
      <group position={[0.002, 0.629, 0.013]} scale={[2.331, 25.518, 2.331]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials['jeans.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials['Skin.002']}
        />
      </group>
      <group position={[-0.002, 1.893, 0.022]} scale={[1.279, 1.408, 1.279]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials['Skin.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          material={materials['inner mouth.002']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Top001.geometry}
        material={materials['hair.002']}
        position={[-0.002, 1.893, 0.022]}
        scale={[1.279, 1.408, 1.279]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Inner001.geometry}
        material={materials['hair.002']}
        position={[-0.002, 1.893, 0.022]}
        scale={[1.279, 1.408, 1.279]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ears001.geometry}
        material={materials['Skin.002']}
        position={[0.161, 1.868, 0.019]}
        rotation={[Math.PI / 2, -0.382, 0]}
        scale={[0.881, 1.057, 1.282]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-0.002, 1.882, 0.184]}
        scale={[0.011, 0.001, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={nodes.Circle002.material}
        position={[-0.077, 1.882, 0.186]}
        rotation={[1.573, 0, 0]}
        scale={0.062}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={nodes.Circle003.material}
        position={[0.074, 1.882, 0.186]}
        rotation={[1.573, 0, 0]}
        scale={0.062}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body001.geometry}
        material={materials['Skin.002']}
        position={[-0.002, 0.737, 0.022]}
        scale={1.286}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Table Top']}
        position={[0.002, 0.865, 1.002]}
        rotation={[-0.037, 1.568, 0.037]}
        scale={[0.752, 0.039, 1.54]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Standing Desk Arms']}
        position={[-1.294, 0.01, 1.008]}
        rotation={[-0.02, 1.568, 0.02]}
        scale={[0.597, 0.011, 0.074]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Standing Desk Arms']}
        position={[-1.294, 0.024, 1.008]}
        rotation={[-0.037, 1.568, 0.037]}
        scale={[-0.042, -0.002, -0.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Monitor outside']}
        position={[0.002, 1.393, 1.209]}
        rotation={[0.037, 1.568, 3.105]}
        scale={[-0.024, -0.272, -0.459]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['Monitor outside']}
        position={[0.964, 1.491, 1.176]}
        rotation={[-Math.PI, 0.981, -Math.PI]}
        scale={[0.025, 0.57, 0.31]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.Mount}
        position={[0.003, 1.38, 1.403]}
        rotation={[-0.037, 1.568, 0.037]}
        scale={[0.169, 0.023, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.Mount}
        position={[0.002, 1.379, 1.594]}
        rotation={[3.061, -1.568, -0.08]}
        scale={[-0.023, -0.023, -0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.Mount}
        position={[1.071, 1.525, 1.339]}
        rotation={[-Math.PI, 0.973, -Math.PI]}
        scale={[0.167, 0.023, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.Mount}
        position={[1.179, 1.519, 1.498]}
        rotation={[0, -0.973, Math.PI]}
        scale={[-0.023, -0.03, -0.028]}
      />
      <group
        position={[-0.003, 0.905, 0.62]}
        rotation={[1.559, -0.008, -3.136]}
        scale={[0.014, 0.016, 0.011]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials['blinn1.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials['blinn2.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen_Monitor_Middle.geometry}
        material={materials['Monitor outside']}
        position={[0.002, 1.393, 1.209]}
        rotation={[0.037, 1.568, 3.105]}
        scale={[-0.024, -0.272, -0.459]}
      />
    </group>
  );
}

useGLTF.preload('/zachuri-person.glb');
