import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import Sun from "@/components/models/Sun";

const Home: NextPage = () => {
  const canvasRef = useRef(null);
  useEffect(() => {}, [canvasRef]);

  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.2} />
        <directionalLight />
        <Sun />
      </Canvas>
    </div>
  );
};

export default Home;
