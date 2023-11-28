import { useGLTF } from "@react-three/drei";

export default function ModelMesh({ ...props }) {
	const { scene } = useGLTF("/zachuri-person.glb");

	return (
		<mesh castShadow receiveShadow>
			<primitive castShadow recieveShadow object={scene} {...props} />
		</mesh>
	);
}
