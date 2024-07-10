# 03 notes

https://threejs-journey.com/lessons/first-threejs-project#objects

### Introduction and Setup:

- Node.js and Vite setup for development environment. (local server)
- Importance of local servers and build tools like Vite.
- Differences between build tools (Webpack vs. Vite).

```bash
#create node.js project
npm init -y

#add dependencies
npm install vite

```

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>03 - First Three.js Project</title>
	</head>
	<body>
		<h1>Soon to be a Three.js website</h1>
	</body>
</html>
```

#### package.json "scripts"

```js
{
  // ...
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  // ...
}
```

```bash
npm run dev
```

### Three.js Basics:

```bash
npm install three
```

---

```js
//Example create scene
const scene = new THREE.Scene();
//Example create spere geometry
const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
```

- Creating a basic Three.js scene with a red cube.
- Components of a Three.js scene: Scene, Objects (Mesh), Camera, Renderer.
- Setting up a basic webpage structure with HTML and
- JavaScript integration.

### Lesson Structure:

- Lessons divided into chapters covering progressively advanced topics in Three.js.
- Each chapter focuses on specific techniques and applications (e.g., Lights, Shaders, React Three Fiber).
- Utilization of starter files for efficiency in lesson execution.

- https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera

### Advanced Techniques:

- Integration of physics, imported models, raycasting, and custom models using Blender.
- Application of shaders for complex visual effects and realistic renders.
- Structuring and managing larger Three.js projects for scalability.

### Additional Resources:

- Troubleshooting tips for common issues encountered during setup and development.
- Utilization of Discord community for additional support and collaboration.
