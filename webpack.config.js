const path = require('path')
const isProdMode = process.env.NODE_ENV == 'production'
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BabelMinifyPlugin = require("babel-minify-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackLoggingPlugin = require('webpack-logging-plugin')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const rehypePrism = require('@mapbox/rehype-prism')

let plugins = [
	new MiniCssExtractPlugin({
		filename: 'index.css'
	}),
	new HtmlWebpackPlugin({
		title: 'Lana µapp libs',
		filename: path.resolve(__dirname, 'build/index.html')
	}),
	new WebpackLoggingPlugin({
		formatError: (err) => err,
		formatStats: (stats) => formatWebpackMessages(stats.toJson({}, true)),
		successCallback: () => console.log(`App is running at: http://localhost:3000/`)
	}),
	new BabelMinifyPlugin()
]

let BabelLoaderConfig = {
	loader: 'babel-loader',
	options: {
		cacheDirectory: true,
		plugins: [
			[
				'fast-async',
				{
					spec: true
				}
			],
			'@babel/plugin-proposal-object-rest-spread',
			'babel-plugin-syntax-dynamic-import',
			[
				'babel-plugin-transform-react-jsx',
				{
					pragma: 'h'
				}
			],
			[
				'babel-plugin-jsx-pragmatic',
				{
					module: 'preact',
					'export': 'h',
					'import': 'h'
				}
			],
			[
				'@babel/plugin-proposal-class-properties',
				{
					spec: true
				}
			]
		],
		presets: [
			[
				'@babel/preset-env',
				{
					debug: false,
					modules: false,
					useBuiltIns: 'usage',
					exclude: [
						'transform-regenerator',
						'transform-async-to-generator'
					],
					targets: {
						browsers: [
							'last 2 Chrome versions',
							'last 2 Firefox versions',
							'last 2 Edge versions',
							'last 2 Opera versions',
							'last 2 Safari versions',
							'last 2 iOS versions'
						]
					}
				}
			]
		]
	}
}

module.exports = {
	target: 'web',
	entry: [
		path.resolve(__dirname, 'docs/Index.jsx')
	],
	output: {
		path: path.join(__dirname, 'build/'),
		filename: 'index' +
			'.js',
	},
	plugins: plugins,
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src/'),
			docs: path.resolve(__dirname, 'docs/'),
			'mapp-data': path.resolve(__dirname, 'data/'),
			'react': 'preact-compat',
			'react-dom': 'preact-compat'
		},
		modules: [
			path.join(__dirname, 'node_modules'),
			path.join(__dirname, 'src'),
			path.join(__dirname, 'docs')
		],
		extensions: [' ', '.jsx', '.js', '.ts', '.tsx'],
		symlinks: false
	},
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin({})
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'build/'),
		compress: true,
		https: false,
		host: '0.0.0.0',
    disableHostCheck: true,
		port: 3000,
		historyApiFallback: true,
		stats: {
			colors: true,
			hash: false,
			version: false,
			timings: true,
			assets: false,
			chunks: false,
			modules: false,
			reasons: false,
			children: false,
			source: false,
			errors: true,
			errorDetails: true,
			warnings: false,
			publicPath: false
		}
	},
	module: {
		rules: [
			{
				test: /.mdx?$/,
				use: [BabelLoaderConfig, {
					loader: '@mdx-js/loader',
					options: {
						hastPlugins: [rehypePrism]
					}
				}]
			},
			{
				test: /\.(html)$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(js|jsx|ts|tsx|mjs)$/,
				include: [
					path.resolve(__dirname, 'src'),
					path.resolve(__dirname, 'docs'),
					path.resolve(__dirname, 'test')
				],
				exclude: [
					path.resolve(__dirname, 'src/static')
				],
				use: [
					BabelLoaderConfig
				]
			},
			{
				test: /\.css$/,
				include: [
					path.resolve(__dirname, 'src'),
					path.resolve(__dirname, 'docs')
				],
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: "[name]__[local]___[hash:base64:5]"
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer'),
								function () { /* omitted long function */ },
								function () { /* omitted long function */ }
							]
						}
					}
				]
			},
			{
				test: /\.css$/,
				include: [
					path.resolve(__dirname, 'node_modules')
				],
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: false
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer'),
								function () { /* omitted long function */ },
								function () { /* omitted long function */ }
							]
						}
					}
				]
			}
		]
	}
}
