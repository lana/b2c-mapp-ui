import cjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const babelConfig = require('./babelConfig');

const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle-esm.js',
    format: 'esm',
    name: 'b2cMappUI',
    sourcemap: true,
  },
  external: [
    '@lana/b2c-mapp-ui-assets',
    'prop-types',
    'libphonenumber-js/custom',
  ],
  plugins: [
    cjs({
      exclude: 'node_modules/**',
      include: '',
    }),
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
      ...babelConfig,
    }),
    json(),
  ],
};

export default config;
