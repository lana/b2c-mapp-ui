import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/index.js',
		format: 'cjs',
		name: 'b2cMappUI',
		sourcemap: true,
	},
	external: ['@lana/b2c-mapp-ui-assets', 'prop-types', 'libphonenumber-js/custom'],
	plugins: [
		cjs({
			exclude: 'node_modules/**',
			include: '',
		}),
		globals(),
		replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
		resolve({
			extensions: ['.jsx', '.js'],
			modules: true,
			mainFields: ['module', 'browser', 'main'],
			preferBuiltins: true,
			browser: false,
		}),
		postcss({
			extract: true,
			plugins: [autoprefixer()],
			modules: true,
		}),
		babel({
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
						useBuiltIns: 'entry',
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
		}),
	],
}
