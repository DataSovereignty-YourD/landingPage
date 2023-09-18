import { useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

export const useExplode = (group, { distance = 3, enableRotation = true }) => {
  const scrollData = useScroll();

  useEffect(() => {
    {
      const groupWorldPosition = new THREE.Vector3();
      group.current?.getWorldPosition(groupWorldPosition);

      group.current?.children.forEach((mesh) => {
        mesh.originalPosition = mesh.position.clone();
        const meshWorldPosition = new THREE.Vector3();
        mesh.getWorldPosition(meshWorldPosition);

        mesh.directionVector = meshWorldPosition
          .clone()
          .sub(groupWorldPosition)
          .normalize();

        mesh.originalRotation = mesh.rotation.clone();
        mesh.targetRotation = new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
      });
    }
  }, [group]);

  useEffect(() => {
    group.current?.children.forEach((mesh) => {
      mesh.targetPosition = mesh.originalPosition
        .clone()
        .add(mesh.directionVector.clone().multiplyScalar(distance));
    });
  }, [distance, group]);

  useFrame(() => {
    group.current?.children.forEach((mesh) => {
      if (scrollData.offset < 0.0001) {
        if (mesh.name === "origin") {
          mesh.visible = true;
        } else {
          mesh.visible = false;
        }
      } else {
        if (mesh.name === "origin") {
          mesh.visible = false;
        } else {
          mesh.visible = true;
        }
      }

      mesh.position.x = THREE.MathUtils.lerp(
        mesh.originalPosition.x,
        mesh.targetPosition.x,
        scrollData.offset
      );
      mesh.position.y = THREE.MathUtils.lerp(
        mesh.originalPosition.y,
        mesh.targetPosition.y,
        scrollData.offset
      );
      mesh.position.z = THREE.MathUtils.lerp(
        mesh.originalPosition.z,
        mesh.targetPosition.z,
        scrollData.offset
      );

      if (enableRotation) {
        mesh.rotation.x = THREE.MathUtils.lerp(
          mesh.originalRotation.x,
          mesh.targetRotation.x,
          scrollData.offset
        );
        mesh.rotation.y = THREE.MathUtils.lerp(
          mesh.originalRotation.y,
          mesh.targetRotation.y,
          scrollData.offset
        );
        mesh.rotation.z = THREE.MathUtils.lerp(
          mesh.originalRotation.z,
          mesh.targetRotation.z,
          scrollData.offset
        );
      }
    });
  });
};
