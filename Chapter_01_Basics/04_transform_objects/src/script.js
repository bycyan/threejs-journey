import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects (groupped)
 */
const group = new THREE.Group()
group.scale.y = 0.5
group.rotation.y = 0.5
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff0000 })
)
cube1.position.x = - 1.5
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff0000 })
)
cube2.position.x = 0.5
group.add(cube2)

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Objects (not groupped)
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

// // Position example:
// // mesh.position.x = 0.7
// // mesh.position.y = - 0.6
// // mesh.position.z = 1
// //short:
// mesh.position.set(0.7, - 0.6, 1)

// // Scale example:
// mesh.scale.set(0.5, 2, 0.5)

// //Rotate example
// //Reorder(...)
// // mesh.rotation.reorder('YXZ');
// mesh.rotation.y = Math.PI * 0.25;
// // mesh.rotation.x = Math.PI * 0.25;

// //Rotate

// scene.add(mesh)


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

//Rotate example
// camera.rotation.y = Math.PI * 0.1
// camera.rotation.x = Math.PI * -0.1
// camera.rotation.z = Math.PI * 0.05

scene.add(camera)

//LookAt(...)
// camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

//various log of length of a vector:
console.log(mesh.position.length())
console.log(mesh.position.distanceTo(camera.position))
console.log(mesh.position.normalize())