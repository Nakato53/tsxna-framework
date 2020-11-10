const path = require('path');

module.exports = {
    devtool: 'source-map', 
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js"
	},
	resolve: {
		extensions: ['.ts', ".js"],
    }, 
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
	module: {
		rules: [
			{
				test: /\.ts?$/,
				exclude: /node_modules/,
				use: [
					{ loader: "ts-loader" }
				]
			},
		]
	}
}