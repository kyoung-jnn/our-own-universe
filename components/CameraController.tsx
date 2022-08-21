import { useEffect, useRef } from "react";
import {
  useThree,
  useFrame,
  extend,
  ReactThreeFiber,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

// Camera default setting
const CameraController = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const cameraRef =
    useRef<ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>>(
      null
    );

  useFrame(() => {
    if (cameraRef.current) cameraRef.current.update!();
  });

  useEffect(() => {
    camera.far = 100000;
    camera.position.set(100, 50, 100);
  }, [camera]);

  return (
    <orbitControls
      ref={cameraRef}
      args={[camera, domElement]}
      minDistance={10}
      maxDistance={3000}
      enableDamping={true}
      // target={[100, 100, 100]} 고정된 카메라
    />
  );
};

export default CameraController;
