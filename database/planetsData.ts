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
  {
    id: "mars",
    url: "/models/mars/scene.gltf",
    radius: 0.01,
    orbitRadius: 50,
    rotation: 200,
  },
  {
    id: "jupiter",
    url: "/models/jupiter/scene.gltf",
    radius: 0.01,
    orbitRadius: 60,
    rotation: 250,
  },
  {
    id: "saturn",
    url: "/models/saturn/scene.gltf",
    radius: 0.01,
    orbitRadius: 70,
    rotation: 300,
  },
  {
    id: "uranus",
    url: "/models/uranus/scene.gltf",
    radius: 0.01,
    orbitRadius: 80,
    rotation: 350,
  },
  {
    id: "neptune",
    url: "/models/neptune/scene.gltf",
    radius: 0.01,
    orbitRadius: 90,
    rotation: 400,
  },
];
