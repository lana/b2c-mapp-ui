import vue from 'rollup-plugin-vue';
import svg from 'rollup-plugin-vue-inline-svg';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import json from '@rollup/plugin-json';

import { svgOptions } from './rollupHelper';

const babelConfig = require('./babel.config');

const config = {
  input: 'src/library.js',
  output: {
    file: 'dist/bundle-esm.js',
    format: 'es',
    name: 'b2cMappUI',
    sourcemap: false,
  },
  external: [
    '@babel/runtime',
    '@lana/b2c-mapp-ui-assets',
    'libphonenumber-js/custom',
    'lodash.debounce',
    'vue-contenteditable',
    'vue-currency-input',
  ],
  plugins: [
    commonjs({
      exclude: 'node_modules/**',
      include: '',
    }),
    globals(),
    resolve({
      extensions: ['.js', '.vue'],
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
    svg(svgOptions),
    vue(),
    babel({
      ...babelConfig,
      babelHelpers: 'inline',
    }),
    json(),
  ],
};

export default config;
