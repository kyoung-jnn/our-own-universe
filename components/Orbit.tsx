import React from "react";
import * as THREE from "three";

interface OrbitProps {
  xRadius: number;
  zRadius: number;
}

const Orbit = ({ xRadius, zRadius }: OrbitProps) => {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }
  points.push(points[0]);

  // 1. points로 geometry 만들기
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  // 2. geometry + material 합치기
  return (
    // @ts-ignore
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#5a5a5a" linewidth={20} />
    </line>
  );
};

export default Orbit;
