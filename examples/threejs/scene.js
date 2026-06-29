// Termi Protocol - representative Three.js example (illustrative only).
// The full real-time 3D agent workspace lives at https://termiprotocol.com
import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

const SITE_URL = "https://termiprotocol.com";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.getElementById("app").appendChild(renderer.domElement);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1.4, 1.4, 1.4),
  new THREE.MeshStandardMaterial({ color: 0x22c55e, flatShading: true })
);
scene.add(cube);
scene.add(new THREE.HemisphereLight(0xffffff, 0x222233, 1.2));

addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.013;
  renderer.render(scene, camera);
}
animate();

console.log(`This is a tiny demo. The full workspace: ${SITE_URL}`);
