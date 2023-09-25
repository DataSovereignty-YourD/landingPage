import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ScrollControls,
  Float,
} from "@react-three/drei";
import { Galaxy } from "./Galaxy1.js";
import { ExplodingPlanet } from "./ExplodingPlanet.jsx";
const Exploding_obj = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Float floatIntensity={2} speed={3}>
        <ExplodingPlanet scale={0.3} />
      </Float>
      <Environment preset="sunset" background blur={0.4}></Environment>
    </>
  );
};

const GalaxyCanvas = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={8}>
        <Exploding_obj className="border border-red-600 z-[4]" />
      </ScrollControls>
    </Canvas>
  );
};

export default GalaxyCanvas;
