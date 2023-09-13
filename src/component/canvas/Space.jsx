import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Space = () => {
  const space = useGLTF("./space/scene.gltf");

  return (
    <primitive
      object={space.scene}
      scale={[40, 40, 40]}
      position-y={0}
      rotation-y={0}
    />
  );
};

const SpaceCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-2, -280, 10],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Space />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SpaceCanvas;

{
  /* <div class="sketchfab-embed-wrapper">
  {" "}
  <iframe
    title="Need some space?"
    frameborder="0"
    allowfullscreen
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
    allow="autoplay; fullscreen; xr-spatial-tracking"
    xr-spatial-tracking
    execution-while-out-of-viewport
    execution-while-not-rendered
    web-share
    width="640"
    height="480"
    src="https://sketchfab.com/models/d6521362b37b48e3a82bce4911409303/embed"
  >
    {" "}
  </iframe>{" "}
  <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
    {" "}
    <a
      href="https://sketchfab.com/3d-models/need-some-space-d6521362b37b48e3a82bce4911409303?utm_medium=embed&utm_campaign=share-popup&utm_content=d6521362b37b48e3a82bce4911409303"
      target="_blank"
      rel="nofollow"
      style="font-weight: bold; color: #1CAAD9;"
    >
      {" "}
      Need some space?{" "}
    </a>{" "}
    by{" "}
    <a
      href="https://sketchfab.com/norgeotloic?utm_medium=embed&utm_campaign=share-popup&utm_content=d6521362b37b48e3a82bce4911409303"
      target="_blank"
      rel="nofollow"
      style="font-weight: bold; color: #1CAAD9;"
    >
      {" "}
      Loïc Norgeot{" "}
    </a>{" "}
    on{" "}
    <a
      href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d6521362b37b48e3a82bce4911409303"
      target="_blank"
      rel="nofollow"
      style="font-weight: bold; color: #1CAAD9;"
    >
      Sketchfab
    </a>
  </p>
</div>; */
}
