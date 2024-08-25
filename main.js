// Crear la escena
const scene = new THREE.Scene();

// Configurar la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 5);

// Configurar el renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Configurar OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Activar amortiguación (inercia)
controls.dampingFactor = 0.25; // Factor de amortiguación
controls.screenSpacePanning = false; // Deshabilitar el paneo en el espacio de pantalla
controls.minDistance = 2; // Distancia mínima de la cámara
controls.maxDistance = 10; // Distancia máxima de la cámara

// Crear un cubo
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Crear una esfera
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(2, 0, 0);
scene.add(sphere);

// Añadir una luz direccional
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// Función de animación
function animate() {
    requestAnimationFrame(animate);

    // Puedes hacer rotar los objetos para mostrar movimiento
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    controls.update(); // Necesario si usas damping

    renderer.render(scene, camera);
}

animate();

// Ajustar el tamaño de la ventana
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});