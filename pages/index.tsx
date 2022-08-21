import type { NextPage } from "next";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Stars from "@/components/background/Stars";
import CameraController from "@/components/CameraController";
import Light from "@/components/background/Light";
import Planet from "@/components/Planet";
import { planetsData } from "@/database/planetsData";

const Home: NextPage = () => {
  return (
    <Canvas>
      <CameraController />
      {/* Light */}
      <Light />
      {/* Backgrounds */}
      <Stars />
      <primitive object={new THREE.AxesHelper(10)} />
      {/* Objects */}
      <>
        {planetsData.map((planet) => (
          <Planet key={planet.id} data={planet} />
        ))}
      </>
    </Canvas>
  );
};

export default Home;
