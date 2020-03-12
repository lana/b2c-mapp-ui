const babelConfig = require('./babelConfig')

module.exports = require('babel-jest').createTransformer({
	presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
	plugins: babelConfig.plugins,
})
