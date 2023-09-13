import * as THREE from "../node_modules/three/build/three.module";

import { WEBGL } from "../webgl";

if (WEBGL.isWebGAvailable()) {
  const scene = new THREE.Scene();

  //Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  //렌더러
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  renderer.render(scene, camera);
} else {
  var warning = WEBGL.getWebGLErrorMessage();
  document.body.appendChild(warning);
}
