import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { Scene } from 'three';
import { Object3D } from 'three/src/core/Object3D';
import { Mesh } from 'three/src/objects/Mesh';

interface Options {
  receiveShadow: boolean;
  castShadow: boolean;
}

export function loadGLTFModel(
  scene: Scene,
  glbPath: string,
  options: Options = { receiveShadow: true, castShadow: true }
): Promise<Object3D> {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    dracoLoader.setDecoderPath('/draco/');
    dracoLoader.setDecoderConfig({ type: 'js' });
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      glbPath,
      (gltf: GLTF) => {
        const obj = gltf.scene;
        obj.name = 'desk';
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;

        scene.scale.set(3, 3, 3);
        scene.add(obj);

        obj.traverse((child: Object3D) => {
          if (child instanceof Mesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(obj);
      }
      // (event: ProgressEvent<EventTarget>) => {
      //   reject(new Error(`Error loading model: ${event.loaded} bytes loaded.`));
      // }
    );
  });
}
