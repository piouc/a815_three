import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	IcosahedronGeometry,
	MeshBasicMaterial,
	Mesh
} from 'three'

export default function(){
	const scene = new Scene()
	const camera = new PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000)
	window.camera = camera

	const renderer = new WebGLRenderer()

	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	const geometry = new IcosahedronGeometry(2, 2)
	const material = new MeshBasicMaterial({wireframe: true, color: 0xffffff})
	const cube = new Mesh(geometry, material)

	scene.add(cube)

	camera.position.z = 100

	camera.setLens(500, 35)

	render()

	function render(){
		requestAnimationFrame(render)

		const now = Date.now()

		cube.rotation.x = now % 3600000 / 10000
		cube.rotation.y = now % 3600000 / 10000

		renderer.render(scene, camera)
	}
}
