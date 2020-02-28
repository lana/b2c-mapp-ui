const babelConfig = require('./babelConfig')

module.exports = require('babel-jest').createTransformer({
	...babelConfig,
})
