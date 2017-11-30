const path = require('path')

module.exports = {
	entry: {
		index: './src/js/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: []
	},
	node: {
		global: false,
		setImmediate: false
	},
	devtool: 'source-map'
}