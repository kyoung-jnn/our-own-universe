import { useLoader } from "@react-three/fiber";
import { DoubleSide } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const Stars = () => {
  const texture = useLoader(TextureLoader, "background/stars.jpeg");

  return (
    <mesh>
      <sphereBufferGeometry args={[10000, 64, 64]} />
      <meshBasicMaterial map={texture} side={DoubleSide} />
    </mesh>
  );
};

export default Stars;
