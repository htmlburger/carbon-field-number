const path = require('path');
const webpack = require('webpack');
const root = path.resolve(__dirname, '../../vendor/htmlburger/carbon-fields');

module.exports = {
	entry: './src/bootstrap.js',
	output: {
		path: 'js/',
		filename: 'bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader?cacheDirectory=true',
				exclude: /node_modules/
			}
		]
	},

	resolve: {
		modules: [
			path.resolve(root, 'assets/react'),
			path.resolve(root, 'node_modules'),
			path.resolve(__dirname, 'src'),
			'node_modules'
		]
	},

	devtool: 'cheap-module-source-map',

	plugins: [
		new webpack.DllReferencePlugin({
			context: root,
			sourceType: 'this',
			manifest: require(path.resolve(root, 'assets/carbon.vendor.json'))
		}),

		new webpack.DllReferencePlugin({
			context: root,
			sourceType: 'this',
			manifest: require(path.resolve(root, 'assets/carbon.core.json'))
		})
	],
};
