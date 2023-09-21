import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import * as THREE from "three";

export default function AnimationReal() {
  return (
    <div className="w-full h-full fixed z-[1]">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 5], fov: 30 }}
      >
        <color attach="background" args={["#ffffff"]} />
        <ScrollControls>
          <Experience />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
