# 07-fullscreen-and-resizing

### Fit in the viewport

- **Adjust Canvas Size:** Use `window.innerWidth` and `window.innerHeight` for the canvas size.
- **CSS Adjustments:** Remove default browser margins and padding. Fix canvas to the top-left corner and remove outline.
- **Prevent scrolling using overflow:** hidden on html and body.

You don't need to specify width or height on the canvas because Three.js is already taking care of that when you call the renderer.setSize(...) method.

### Handle resize & Handle pixel ratio

- **Event Listener:** Add a resize listener to update the canvas size.
- **Update Variables:** Adjust the sizes object, camera aspect ratio, and renderer size.
- **Complete Implementation:** Combine all updates within the resize event listener to ensure the canvas covers the viewport without scroll bars.

```js
// Sizes
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

window.addEventListener("resize", () => {
	console.log("window has been resized");
	// Update sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	//Update camera
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	//Update renderer
	renderer.setSize(sizes.width, sizes.height);
	//Update pixelratio
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
```

```js
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
```

### Handle fullscreen

https://developer.mozilla.org/docs/Web/API/Element/dblclick_event

- **Trigger Fullscreen:** Use double-click to toggle fullscreen mode.
- **Fullscreen Detection and Toggling:** Check if the canvas is in fullscreen mode using document.fullscreenElement.
- Use requestFullscreen and exitFullscreen methods on the canvas and document.
- **Browser Compatibility:** Implement prefixed versions for fullscreenElement, requestFullscreen, and exitFullscreen to support all modern browsers.

```js
window.addEventListener("dblclick", () => {
	const fullscreenElement =
		document.fullscreenElement || document.webkitFullscreenElement;
	if (!fullscreenElement) {
		if (canvas.requestFullscreen) {
			canvas.requestFullscreen();
		} else if (canvas.webkitRequestFullscreen) {
			canvas.webkitRequestFullscreen();
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
});
```
