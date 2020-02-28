module.exports = {
	plugins: [
		[
			'module:fast-async',
			{
				spec: true,
			},
		],
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-export-namespace-from',
		[
			'@babel/plugin-transform-react-jsx',
			{
				pragma: 'h',
				pragmaFrag: 'Fragment',
			},
		],
		[
			'@emotion/babel-plugin-jsx-pragmatic',
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
				useBuiltIns: false,
				exclude: ['transform-regenerator', 'transform-async-to-generator'],
				targets: '> 0.1%, not dead',
			},
		],
	],
}
