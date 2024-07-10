import * as THREE from 'three'
// Canvas declaration
const canvas = document.querySelector('canvas.webgl')

// 1. Scene ///
const scene = new THREE.Scene()

// 2. Object ///

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
//Add to scene!! the geometry + material called: "mesh" to the scene 
scene.add(mesh)

// 3. Camera ///
// Size of aspect ratio
const sizes = {
    width: 800,
    height: 600
}

// PerspectiveCamera(fov(field of view): 75, width and height of the camera)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
//Distance of the camera
camera.position.z = 5
//Add to scene!!
scene.add(camera)

// 4. Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

//Call the render
renderer.render(scene, camera)

