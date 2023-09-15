import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import * as THREE from "three";

function App() {
  return (
    <div className="fullscreen-container">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 5], fov: 30 }}
      >
        <color attach="background" args={["#000000"]} />
        <ScrollControls pages={12}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
