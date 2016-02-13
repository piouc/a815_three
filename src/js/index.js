import app from './app'

var f = true

document.addEventListener('keydown', () => {
	document.body.mozRequestFullScreen()
	if(f) app()
	f = false
})