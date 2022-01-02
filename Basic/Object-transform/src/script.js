// import "./style.css";
// import * as THREE from "three";
// import gsap from "gsap";
// /**
//  * Sizes
//  */
// const sizes = {
//   width: 800,
//   height: 600,
// };
// let cursor = {
//   x: 0,
//   y: 0,
// };

// // Canvas
// const canvas = document.querySelector("canvas.webgl");

// // Scene
// const scene = new THREE.Scene();

// // mouse event
// window.addEventListener("mousemove", (e) => {
//   cursor.x = e.clientX / sizes.width;
//   cursor.y = e.clientY / sizes.height;
//   console.log(cursor.x, cursor.y);
// });

// /**
//  * Objects
//  */
// // const group = new THREE.Group();
// // scene.add(group);

// const cube1 = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: 0xff00ff })
// );
// // cube1.position.set(0, 2, 1);
// cube1.position.set(0, 2, 0);
// scene.add(cube1);

// // group.add(cube1);

// // const cube2 = new THREE.Mesh(
// //   new THREE.BoxGeometry(1, 1, 1),
// //   new THREE.MeshBasicMaterial({ color: 0xff0000 })
// // );
// // cube2.position.set(1, 2, 1);
// // group.add(cube2);

// // const cube3 = new THREE.Mesh(
// //   new THREE.BoxGeometry(1, 1, 1),
// //   new THREE.MeshBasicMaterial({ color: 0xffffff })
// // );
// // cube3.position.set(2, 2, 1);

// // group.add(cube3);
// // group.rotation.y = Math.PI;

// // const geometry = new THREE.BoxGeometry(1, 1, 1);
// // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// // const mesh = new THREE.Mesh(geometry, material);
// // // positioning object
// // mesh.position.set(0.7, -0.6, 1);
// // // scale
// // mesh.scale.set(2, 0.5, 0.5);
// // // rotation
// // // mesh.rotation.reorder("YXZ");
// // mesh.rotation.y = Math.PI * 0.25;
// // mesh.rotation.x = Math.PI * 0.25;
// // // mesh.rotation.z = Math.PI * 0.25;
// // scene.add(mesh);

// // AxesHelper - axis visible
// // const axesHelper = new THREE.AxesHelper(3);
// // scene.add(axesHelper);

// /**
//  * Camera
//  */
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   0.1,
//   100
// );
// // const aspectRatio = sizes.width / sizes.height;
// // const camera = new THREE.OrthographicCamera(
// //   -1 * aspectRatio,
// //   aspectRatio,
// //   1,
// //   -1,
// //   0.1,
// //   100
// // );
// camera.position.set(2, 2, 2);
// camera.lookAt(cube1.position);
// scene.add(camera);

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// // clock
// let clock = new THREE.Clock();

// // gsap -
// // gsap.to(group.position, { duration: 1, delay: 1, x: 2 });
// // gsap.to(group.position, { duration: 1, delay: 2, x: 0 });

// const tick = () => {
//   let elapsed = clock.getElapsedTime();
//   //   cube1.rotation.y = elapsed;
//   //   cube3.position.x = Math.sin(elapsed);
//   //   cube2.position.z = Math.cos(elapsed);
//   //   cube1.position.x = Math.cos(elapsed);
//   camera.position.x = cursor.x;
//   camera.position.z = cursor.y;
//   //   camera.position.x = Math.sin(cursor.x) * 3;
//   //   camera.position.y = Math.cos(cursor.y) * 3;
//   //   camera.lookAt(cube1);
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };
// tick();

import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Cursor
const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
  console.log(cursor.x, cursor.y);
});

// Scene
const scene = new THREE.Scene();

// Object
const texture = new THREE.TextureLoader().load("door.jpg");
const textureMaterial = new THREE.MeshBasicMaterial({ map: texture });

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  textureMaterial
  //   new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(- 1 * aspectRatio, 1 * aspectRatio, 1, - 1, 0.1, 100)
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();
  camera.position.x = Math.sin(cursor.x * 2);
  //   camera.position.y = cursor.y * Math.PI * 2;
  //   camera.lookAt(mesh.position);
  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
