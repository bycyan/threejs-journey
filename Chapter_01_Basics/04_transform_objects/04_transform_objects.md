# 04_transform_objects

### There are 4 properties to transform objects in our scene

- **position** (to move the object) [Vector3](https://threejs.org/docs/#api/en/math/Vector3)
- **scale** (to resize the object) [Vector3](https://threejs.org/docs/#api/en/math/Vector3)
- **rotation** (to rotate the object) [Euler](https://threejs.org/docs/index.html#api/en/math/Euler)
- **quaternion** (to also rotate the object; more about that later)

### Position objects

```js
mesh.position.set(0.7, -0.6, -2);
```

### Axis Helper

One good solution is to use the Three.js [AxesHelper](https://threejs.org/docs/#api/en/helpers/AxesHelper).

```js
/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);
```

---

### Scale objects

```js
mesh.scale.set(0.7, -0.6, -2);
```

### Rotate objects

```js
//rotate normal xyz order
mesh.rotation.x = Math.PI * 0.25;

//reorder(...)
mesh.rotation.reorder("YXZ");
mesh.rotation.y = Math.PI * 0.25;
```

Problem: Rotation order

### LookAt(...)

[Object3D](https://threejs.org/docs/#api/en/core/Object3D)

If you want to look at the center of the cube

```js
camera.lookAt(new THREE.Vector3(0, -1, 0));
//or
camera.lookAt(mesh.position);
```

### Combining transformation

Creating a [Group](https://threejs.org/docs/#api/en/objects/Group) This is almost identical to an Object3D. Its purpose is to make working with groups of objects syntactically clearer.
you can nest all these objects in a group and manipulate the group as a whole.
