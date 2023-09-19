import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export const useExplode = (group, { distance = 3, enableRotation = true }) => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const prevScrollOffsetRef = useRef(scrollOffset);

  useEffect(() => {
    const handleScroll = () => {
      const offset =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollOffset(offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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

  let prevOffsetData;

  useFrame(() => {
    if (scrollOffset !== prevScrollOffsetRef.current) {
      console.log(scrollOffset);
      group.current?.children.forEach((mesh) => {
        if (!mesh.originalPosition || !mesh.targetPosition) return;

        if (scrollOffset < 0.0001) {
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

        mesh.position.lerp(
          mesh.originalPosition.clone().lerp(mesh.targetPosition, scrollOffset),
          0.1
        );

        if (enableRotation) {
          mesh.rotation.x = THREE.MathUtils.lerp(
            mesh.originalRotation.x,
            mesh.targetRotation.x,
            scrollOffset
          );
          mesh.rotation.y = THREE.MathUtils.lerp(
            mesh.originalRotation.y,
            mesh.targetRotation.y,
            scrollOffset
          );
          mesh.rotation.z = THREE.MathUtils.lerp(
            mesh.originalRotation.z,
            mesh.targetRotation.z,
            scrollOffset
          );
        }
      });

      prevScrollOffsetRef.current = scrollOffset;
    }
  });
};
