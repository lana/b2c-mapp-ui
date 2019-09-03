const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BabelMinifyPlugin = require('babel-minify-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackLoggingPlugin = require('webpack-logging-plugin')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const pkg = require('./package.json')
const path = require('path')
const libraryName = pkg.name

let plugins = [
	new MiniCssExtractPlugin({
		filename: 'index.css',
	}),
	new HtmlWebpackPlugin({
		title: 'Lana µapp libs',
		filename: path.resolve(__dirname, 'build/index.html'),
	}),
	new WebpackLoggingPlugin({
		formatError: err => err,
		formatStats: stats => formatWebpackMessages(stats.toJson({}, true)),
		successCallback: () => console.log(`App is running at: http://localhost:3000/`),
	}),
	new BabelMinifyPlugin(),
]

let BabelLoaderConfig = {
	loader: 'babel-loader',
	options: {
		cacheDirectory: true,
		plugins: [
			[
				'fast-async',
				{
					spec: true,
				},
			],
			'@babel/plugin-proposal-object-rest-spread',
			'babel-plugin-syntax-dynamic-import',
			'@babel/plugin-proposal-export-default-from',
			'@babel/plugin-proposal-export-namespace-from',
			[
				'babel-plugin-transform-react-jsx',
				{
					pragma: 'h',
				},
			],
			[
				'babel-plugin-jsx-pragmatic',
				{
					module: 'preact',
					export: 'h',
					import: 'h',
				},
			],
			[
				'@babel/plugin-proposal-class-properties',
				{
					spec: true,
				},
			],
		],
		presets: [
			[
				'@babel/preset-env',
				{
					debug: false,
					modules: false,
					useBuiltIns: 'usage',
					exclude: ['transform-regenerator', 'transform-async-to-generator'],
					targets: {
						browsers: [
							'last 2 Chrome versions',
							'last 2 Firefox versions',
							'last 2 Edge versions',
							'last 2 Opera versions',
							'last 2 Safari versions',
							'last 2 iOS versions',
						],
					},
				},
			],
		],
	},
}

module.exports = {
	entry: path.join(__dirname, './src/index.js'),
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'index.js',
		library: libraryName,
		libraryTarget: 'umd',
		publicPath: '/dist/',
		umdNamedDefine: true,
	},
	plugins: plugins,
	optimization: {
		minimizer: [new OptimizeCSSAssetsPlugin({})],
	},
	node: {
		net: 'empty',
		tls: 'empty',
		dns: 'empty',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx|mjs)$/,
				include: [
					path.resolve(__dirname, 'src'),
					path.resolve(__dirname, 'test'),
				],
				exclude: [path.resolve(__dirname, 'src/static')],
				use: [BabelLoaderConfig],
			},
			{
				test: /\.css$/,
				include: [path.resolve(__dirname, 'src')],
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[name]__[local]___[hash:base64:5]',
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer'),
								function() {
									/* omitted long function */
								},
								function() {
									/* omitted long function */
								},
							],
						},
					},
				],
			},
			{
				test: /\.css$/,
				include: [path.resolve(__dirname, 'node_modules')],
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: false,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer'),
								function() {
									/* omitted long function */
								},
								function() {
									/* omitted long function */
								},
							],
						},
					},
				],
			},
		],
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src/'),
			'mapp-data': path.resolve(__dirname, 'data/'),
			react: 'preact-compat',
			'react-dom': 'preact-compat',
		},
		modules: [
			path.join(__dirname, 'node_modules'),
			path.join(__dirname, 'src'),
		],
		extensions: [' ', '.jsx', '.js', '.ts', '.tsx'],
		symlinks: false,
	},
	externals: {
		// Don't bundle react or react-dom
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'React',
			root: 'React',
		},
		'react-dom': {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			amd: 'ReactDOM',
			root: 'ReactDOM',
		},
	},
}
