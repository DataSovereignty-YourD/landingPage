import {
  Billboard,
  Environment,
  Float,
  OrbitControls,
  useTexture,
  Lightformer,
  Text3D,
  SpriteAnimator,
  SpotLight,
  Point,
  Stars,
  Cloud,
} from "@react-three/drei";
import { Newstone } from "./Newstone";
import * as THREE from "three";
import { PointLight } from "three";
import { useRef, useEffect } from "react";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshPhysicalMaterial } from "three";
import { ScrollControls } from "@react-three/drei";
import { LensFlare } from "@andersonmancini/lens-flare";
import { Vignette, EffectComposer, Bloom } from "@react-three/postprocessing";
import { Loader, PerformanceMonitor } from "@react-three/drei";
import { AnimationReal } from "./Animation_real";

const parameters = {
  stars: 2000,
  size: 0.012,
  starColor: "#5f5f5f",
};
const scene = new THREE.Scene();
const textureLoader = new THREE.TextureLoader();
const shape = textureLoader.load(
  "https://uploads-ssl.webflow.com/647fa9e68cb822c74d6ec016/647fbfd9250220d14fa29b84_1.png"
);

function BackgroundStars({ scene }) {
  useEffect(() => {
    let bgStarsGeometry = new THREE.BufferGeometry();
    const bgStarsPositions = new Float32Array(parameters.stars * 3);

    for (let j = 0; j < parameters.stars; j++) {
      bgStarsPositions[j * 3 + 0] = (Math.random() - 0.5) * 20;
      bgStarsPositions[j * 3 + 1] = (Math.random() - 0.5) * 20;
      bgStarsPositions[j * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    bgStarsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(bgStarsPositions, 3)
    );

    const bgStarsMaterial = new THREE.PointsMaterial({
      size: parameters.size,
      depthWrite: false,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      color: parameters.starColor,
      transparent: true,
      alphaMap: shape,
    });

    const bgStars = new THREE.Points(bgStarsGeometry, bgStarsMaterial);
    scene.add(bgStars);

    return () => {
      bgStarsGeometry.dispose();
      bgStarsMaterial.dispose();
      scene.remove(bgStars);
    };
  }, [scene]);

  return null;
}

export const Experience = () => {
  const xLogo = useTexture("/yourd-logo.png");
  // const scene = new THREE.Scene(); // 실제 씬 객체로 대체해야 합니다.
  // const camera = new THREE.PerspectiveCamera(
  //   75,
  //   window.innerWidth / window.innerHeight,
  //   0.1,
  //   1000
  // ); // 실제 카메라 객체로 대체해야 합니다.
  // camera.position.z = 5;

  // const composer = new EffectComposer();
  // const renderPass = new RenderPass(scene, camera);
  // composer.addPass(renderPass);

  function GlowSphere() {
    const ref = useRef();

    useFrame(({ clock }) => {
      const material = ref.current.material;

      // 빛의 세기를 조절하여 깜박거리는 효과를 만듭니다.
      const intensity = 0.5 + Math.sin(clock.getElapsedTime()) * 0.25;

      material.emissiveIntensity = intensity;
    });

    return (
      <mesh ref={ref}>
        <sphereGeometry args={[0.2]} />
        <meshPhysicalMaterial
          color="white" // 빛의 색상
          emissive="white" // 빛나는 부분의 색상
          emissiveIntensity={5} // 빛의 강도
        />
      </mesh>
    );
  }

  return (
    <>
      <OrbitControls enableZoom={false} />
      <Float floatIntensity={1} speed={1}>
        <Newstone scale={0.1} rotation-y={-Math.PI / 4} />
        <ambientLight intensity={0.2} />
        <pointLight intensity={10} position={[10, 10, 10]} angle={1} />

        {/* <GlowSphere /> */}
        <pointLight
          position={[1, 1, 1]} // 빛의 위치를 0,0,0으로 설정
          intensity={20} // 빛의 강도
          distance={40} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
          color="red"
        />
        <pointLight
          position={[-1, -1, -1]} // 빛의 위치를 0,0,0으로 설정
          intensity={20} // 빛의 강도
          distance={40} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
          color="skyblue"
        />
        <pointLight
          position={[1, 1, -1]} // 빛의 위치를 0,0,0으로 설정
          intensity={20} // 빛의 강도
          distance={40} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
          color="gray"
        />
        <pointLight
          position={[-1, -1, 1]} // 빛의 위치를 0,0,0으로 설정
          intensity={20} // 빛의 강도
          distance={40} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
          color="skyblue"
        />
        <pointLight
          position={[1, -1, -1]} // 빛의 위치를 0,0,0으로 설정
          intensity={20} // 빛의 강도
          distance={40} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
          color="white"
        />
        <pointLight
          position={[-1, 1, -1]} // 빛의 위치를 0,0,0으로 설정
          intensity={20} // 빛의 강도
          distance={40} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
          color="skyblue"
        />
        {/* <BackgroundStars scene={scene} /> */}
        {/* <EffectComposer multisampling={false} disableNormalPass>
          <LensFlare
            opacity={0.01}
            glareSize={0.01}
            animated={true}
            enabled={true}
            flareSize={0.1}
            flareShape={0}
            starPoints={0.1}
            followMouse={false}
            position={{ x: 0, y: 0, z: 0 }}
          />
        </EffectComposer> */}
        <Cloud opacity={0.1}></Cloud>
        {/* <Stars></Stars> */}
        {/* <SpriteAnimator /> */}
        {/* <SpotLight
          color="white" // 빛의 색상
          intensity={10} // 빛의 강도
          position={[0.1, 0.1, 0.1]} // Spotlight의 위치
          // Spotlight가 비추는 대상의 위치
          angle={Math.PI / 36} // 빛의 산개 각도
          // 그림자 경계
          decay={2} // 빛의 감쇠 정도
          distance={5} // 빛의 최대 사거리
          castShadow={true}
        /> */}
        {/* <SpotLight
          position={[1, 0, 0]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[-1, 0, 0]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[0, 1, 0]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[0, -1, 0]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[1, 1, 0]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[1, -1, 0]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[-1, 1, 0]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[-1, -1, 0]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[-1, 1, 1]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[-1, 1, -1]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[-1, -1, -1]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[-1, -1, 1]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[1, 1, 1]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[1, 1, -1]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[1, -1, -1]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[1, -1, 1]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[1, 0, 1]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[1, 0, -1]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[-1, 0, 1]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        />
        <SpotLight
          position={[-1, 0, -1]} // 빛의 위치를 0,0,0으로 설정
          intensity={5} // 빛의 강도
          distance={100} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        /> */}
        {/* <pointLight intensity={100}></pointLight> */}
        {/* <Billboard>
          <mesh>
            <planeGeometry args={[0.4, 0.4]} />
            <meshBasicMaterial map={xLogo} transparent />
          </mesh>
        </Billboard> */}
      </Float>
      {/* <Environment preset="sunset" background blur={0.4} /> */}
    </>
  );
};
