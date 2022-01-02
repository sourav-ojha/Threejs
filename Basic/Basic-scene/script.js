const canvas = document.querySelector(".webgl");
// scenes
const scene = new THREE.Scene();

// red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#f0f" });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Sizes
const sizes = {
  width: 800,
  height: 350,
};

// camera
const camera1 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera1.position.x = 1;
camera1.position.y = 1;
camera1.position.z = 3;
scene.add(camera1);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera1);
