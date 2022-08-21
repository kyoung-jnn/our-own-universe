export interface planetType {
  id: string;
  url: string;
  radius: number;
  orbitRadius: number;
  rotation: number;
}

export const planetsData: planetType[] = [
  {
    id: "sun",
    url: "/models/sun/scene.gltf",
    radius: 1,
    orbitRadius: 0,
    rotation: 0,
  },
  {
    id: "mercury",
    url: "/models/mercury/scene.gltf",
    radius: 0.01,
    orbitRadius: 20,
    rotation: 50,
  },
  {
    id: "venus",
    url: "/models/venus/scene.gltf",
    radius: 0.01,
    orbitRadius: 30,
    rotation: 100,
  },
  {
    id: "earth",
    url: "/models/earth/scene.gltf",
    radius: 1,
    orbitRadius: 40,
    rotation: 150,
  },
];
