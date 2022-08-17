import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const Sun = () => {
  const model = useLoader(GLTFLoader, "/models/sun/scene.gltf");
  /* const texture = useLoader(TextureLoader, [
    "/models/sun/textures/material_1_baseColor.png",
    "/models/sun/textures/material_1_transmission.png",
  ]); */

  // console.log(texture);

  return (
    <Suspense fallback={null}>
      <mesh>
        {/* <sphereGeometry args={[1, 32, 32]} /> */}
        <primitive object={model.scene} />
        <meshStandardMaterial />
      </mesh>
    </Suspense>
  );
};

export default Sun;
