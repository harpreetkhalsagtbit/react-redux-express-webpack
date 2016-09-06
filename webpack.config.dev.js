var path = require("path");
var webpack = require("webpack");

module.exports = {
	debug: true,
	devtool: "eval",
	entry: [
		// 'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
		'./src/index'
	],
	target: 'web',
	output: {
		path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './src'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			include: path.join(__dirname, 'src'),
			loaders: ['babel']
		}, {
			test: /(\.css)$/,
			loaders: ['style', 'css']
		}, ]
	}
};