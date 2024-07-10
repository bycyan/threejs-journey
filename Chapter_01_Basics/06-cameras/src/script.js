import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

console.log(OrbitControls)

/**
 * Cursor
 */
const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) =>
    {
        //this way the width and the height is always 1 (center is 0) regardless of the screen size
        cursor.x = - (event.clientX / sizes.width - 0.5)
        cursor.y = event.clientY / sizes.height - 0.5
    
        console.log(cursor.x, cursor.y)
    })

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// OrthographicCamera
// const aspectRatio = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(
// 	-1 * aspectRatio,
// 	1 * aspectRatio,
// 	1,
// 	-1,
// 	0.1,
// 	100
// );

//PerspectiveCamera
const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	1,
	100
);

// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3
console.log(camera.position)
camera.lookAt(mesh.position)
scene.add(camera)

//Controls for OrbitalControls
const controls = new OrbitControls(camera, canvas)
// controls.target.y = 2
// controls.update()

//damping
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // // Update objects
    // mesh.rotation.y = elapsedTime;

    // option 1 Update camera on mouse movement
    // camera.position.x = cursor.x * 10
    // camera.position.y = cursor.y * 10

    //option 2 revolution around the cube
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    // camera.position.y = cursor.y * 5

    //OrbitControls Damping Update
    controls.update()

    
    //always center the cube, regardless of the camera position
    camera.lookAt(new THREE.Vector3())

    // Render
    renderer.render(scene, camera)

    // // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()