# 06-cameras

### Introduction

Camera types in Three.js: Various camera classes are available, including PerspectiveCamera, OrthographicCamera, ArrayCamera, StereoCamera, and CubeCamera.

https://threejs.org/docs/#api/en/cameras/Camera

### Camera Classes

- **Camera:** Abstract class not used directly but inherited for common properties and methods.
- **ArrayCamera:** Renders the scene multiple times using multiple cameras, useful for split-screen effects.
- **StereoCamera:** Creates a parallax effect for depth perception, requires VR equipment or special glasses.
- **CubeCamera:** Renders scenes in all directions, useful for environment maps and reflections.
- **OrthographicCamera:** Renders scenes without perspective, useful for games like RTS where element sizes remain constant.
- **PerspectiveCamera:** Simulates a real-life camera with perspective, commonly used.

### PerspectiveCamera

- **Parameters:** Requires field of view, aspect ratio, near, and far values.
- **Field of view (FOV):** Vertical amplitude angle in degrees, affecting how stretched or squeezed the view is.
- **Aspect ratio:** Width divided by height, important for fitting the scene to the canvas.
- **Near and far:** Determines the visible range, with inappropriate values causing z-fighting issues.

```js
//75 is the vertical field of view (a range between 45 and 75 is the best)
//prevent z-fighting: keep the values 1, 100 between those
const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	1,
	100
);
```

### OrthographicCamera

- **Parameters:** Defines visibility in each direction (left, right, top, bottom), and near and far values.
- **Aspect ratio adjustment:** Ensures the rendered area matches the canvas ratio for accurate depiction.

```js
const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.OrthographicCamera(
	-1 * aspectRatio,
	1 * aspectRatio,
	1,
	-1,
	0.1,
	100
);
```

#### Custom Controls

- **Mouse interaction:** Using native JavaScript to track and adjust camera position based on mouse movement.
- **Cursor adjustments:** Normalize cursor values for clean input (-0.5 to 0.5 range).
- **Camera updates:** Update camera position in the tick function based on cursor position.
- **Improving controls:** Invert y-axis, increase amplitude, and use trigonometric functions for circular motion.

### Built-in Controls

- **Types:** Various built-in controls like FlyControls, FirstPersonControls, PointerLockControls, OrbitControls, TrackballControls, TransformControls, and DragControls.
- **OrbitControls:** Commonly used, allows for easy camera manipulation (rotation, translation, zoom).[OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls)
- **Enabling OrbitControls:** Import from

```js
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
```

instantiate with camera and canvas.

- **Target and Damping:** Adjust camera target, enable and update damping for smoother controls.
