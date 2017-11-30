import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	IcosahedronGeometry,
	MeshBasicMaterial,
	Mesh,
	TextureLoader,
	BackSide,
	SphereGeometry,
	LinearFilter
} from 'three'

import OrbitControls from './OrbitControls.js'
// import CanvasRenderer from './CanvasRenderer.js'

document.addEventListener('DOMContentLoaded', () => {
	const scene = new Scene()
	const camera = new PerspectiveCamera(1000, window.innerWidth / window.innerHeight, 0.1, 1000)
	window.camera = camera

	const renderer = new WebGLRenderer()

	renderer.setSize(window.innerWidth, window.innerHeight)
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	})
	document.body.appendChild(renderer.domElement)

	const geometry = new SphereGeometry(5, 32, 32)
	const texture = new TextureLoader().load('texture.jpg')
	texture.minFilter = LinearFilter
	texture.magFilter = LinearFilter
	const material = new MeshBasicMaterial({wireframe: false, color: 0xffffff, map: texture, overdraw: true})
	material.side = BackSide
	const cube = new Mesh(geometry, material)

	scene.add(cube)
	const controls = new OrbitControls(camera)
	camera.position.z = 4



	render()

	function render(){
		requestAnimationFrame(render)

		const now = Date.now()
		cube.rotation.x = Math.PI
		cube.rotation.y = now % 3600000 / 10000

		renderer.render(scene, camera)
	}
})