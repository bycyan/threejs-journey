# 05-animations

### Introduction

- **Animations in Three.js:** Animations work like stop-motion, where objects are moved and rendered in successive frames.
- **Frame rate:** Screens have a specific frequency, usually 60 frames per second (fps), which equates to a frame every 16ms.
- **Goal:** Execute a function that moves objects and renders each frame regardless of the frame rate.

### requestAnimationFrame

- Function: requestAnimationFrame executes a provided function (once) on the next frame.
- Infinite loop: By calling requestAnimationFrame within the function again, you create an infinite loop.
- Example code:

```js
const tick = () => {
	console.log("tick");
	window.requestAnimationFrame(tick);
};
tick();
```

- Adding animation: Move the render call and increase the cube’s rotation inside the tick function.

### Adaptation to the framerate

- **DeltaTime:** Measure the time between frames to keep animations consistent across different frame rates.
  (so it's always moving at the same speed)
- **Example code:**

```js
let time = Date.now();
const tick = () => {
	const currentTime = Date.now();
	const deltaTime = currentTime - time;
	time = currentTime;
	mesh.rotation.y += 0.01 * deltaTime;
	window.requestAnimationFrame(tick);
	console.log("tick");
};
tick();
```

### Using Clock

- **Three.js Clock:** A built-in solution for time calculations.
- **Example code:**

```js
const clock = new THREE.Clock();
const tick = () => {
	const elapsedTime = clock.getElapsedTime();
	mesh.rotation.y = elapsedTime;
	window.requestAnimationFrame(tick);
};
tick();
```

### Using a library

- **GSAP:** A popular animation library.
- **Installation:** Install GSAP via npm (npm install gsap@3.12).
- **Usage:** Create a tween animation with gsap.to(...).
- **Example code:**

```js
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
const tick = () => {
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};
tick();
```
