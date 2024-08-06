const path = require('path');
const toml = require('toml');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'static'),
		publicPath: 'js/',
		filename: 'js/[name].js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: 'css/',
						},
					},
					"css-loader"
				],
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/i,
				type: 'asset/resource',
				generator: {
					outputPath: 'img',
					publicPath: 'img/',
					filename: '[name][ext]',
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: 'css/',
						},
					},
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					outputPath: 'fonts',
					publicPath: 'fonts/',
					filename: '[name][ext]',
				},
			},
			{
				test: /\.toml$/i,
				type: 'json',
				parser: {
					parse: toml.parse,
				},
			},
		],
	},
	resolve: {
		fallback: {
			fs: false,
		},
	},
	plugins: [new MiniCssExtractPlugin({
		filename: 'css/[name].css',
	})],
	optimization: {
		minimizer: [
			`...`,
			new CssMinimizerPlugin(),
		],
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				leafletVendor: {
					test: /[\\/]node_modules[\\/]leaflet[\\/]/,
					name: 'vendor-leaflet',
				},
				bootstrapVendor: {
					test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
					name: 'vendor-bootstrap',
				},
			},
		},
		runtimeChunk: 'single',
	},
	mode: 'development',
};