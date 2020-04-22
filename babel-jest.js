const babelJest = require('babel-jest');

const babelConfig = require('./babelConfig');

const config = babelJest.createTransformer({
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
});

module.exports = config;
