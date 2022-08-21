import React, { Suspense, useRef } from "react";
import {
  PrimitiveProps,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { planetType } from "@/database/planetsData";

interface PlanetProps {
  data: planetType;
}

const Planet = ({
  data: { url, radius, orbitRadius, rotation },
}: PlanetProps) => {
  const model = useLoader(GLTFLoader, url);
  const planetRef = useRef<PrimitiveProps>(null);
  const { camera } = useThree();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const x = orbitRadius * Math.sin(time);
    const z = orbitRadius * Math.cos(time);

    if (planetRef.current) {
      // 자전
      if (orbitRadius) {
        planetRef.current.rotation.y = time / rotation;
      }
      // 공전
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
    }
  });

  return (
    <Suspense fallback={null}>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          const { x, y, z } = e.eventObject.position;
          camera.position.set(x, y, z);
        }}
      >
        <primitive
          ref={planetRef}
          scale={radius}
          object={model.scene}
          onClick={(e: any) => {
            e.stopPropagation();
            const { x, y, z } = e.eventObject.position;
            camera.position.set(x, y, z);
          }}
        />
      </mesh>
    </Suspense>
  );
};

export default Planet;
