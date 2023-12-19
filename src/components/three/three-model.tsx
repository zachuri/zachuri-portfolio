"use client";

import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	Environment,
	OrbitControls,
	Preload,
	Stage,
	useGLTF,
	useProgress,
} from "@react-three/drei";
import { Progress } from "../ui/progress";
import Model from "./model-pmnd";
import ModelMesh from "./model-mesh";

export function ThreeModel() {
	const { progress } = useProgress();

	return (
		<Suspense
			fallback={
				<div className='w-[200px] md:w-[80%]'>
					{/* <Icons.loading /> */}
					{/* {progress}% */}
					<Progress className='h-[2px]' value={progress} />
				</div>
			}>
			<Canvas camera={{ fov: 12 }} shadows>
				<ModelMesh rotation={[0, Math.PI / 8, 0]} scale={0.17} />
				<Environment preset='sunset' />
				<OrbitControls
					autoRotate={true}
					enableZoom={false}
					enablePan={false}
					minPolarAngle={Math.PI / 2.5}
					maxPolarAngle={Math.PI / 2.5}
				/>
				{/* <axesHelper args={[5]} /> */}
				{/* <Preload all /> */}
			</Canvas>
		</Suspense>
	);
}
