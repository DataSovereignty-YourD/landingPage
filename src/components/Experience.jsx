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

export const Experience = () => {
  const xLogo = useTexture("/yourd-logo.png");

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
        <Newstone scale={0.4} rotation-y={-Math.PI / 4} />
        <ambientLight intensity={0.2} />
        <pointLight intensity={10} position={[10, 10, 10]} />
        <GlowSphere />
        {/* <pointLight
          position={[1, 1, 1]} // 빛의 위치를 0,0,0으로 설정
          intensity={100} // 빛의 강도
          distance={40} // 빛의 최대 사거리
          decay={5} // 빛의 감쇄 정도
          castShadow={true} // 그림자 생성 여부
        /> */}
        <Cloud></Cloud>
        {/* <Stars></Stars> */}
        {/* <SpriteAnimator /> */}
        <SpotLight
          color="white" // 빛의 색상
          intensity={10} // 빛의 강도
          position={[0.1, 0.1, 0.1]} // Spotlight의 위치
          // Spotlight가 비추는 대상의 위치
          angle={Math.PI / 36} // 빛의 산개 각도
          // 그림자 경계
          decay={2} // 빛의 감쇠 정도
          distance={5} // 빛의 최대 사거리
          castShadow={true}
        />
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
