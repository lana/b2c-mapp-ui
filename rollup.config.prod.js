import vue from 'rollup-plugin-vue';
import svg from 'rollup-plugin-vue-inline-svg';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import globals from 'rollup-plugin-node-globals';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import json from '@rollup/plugin-json';

import { svgOptions } from './rollupHelper';

const babelConfig = require('./babel.config');

const config = {
  input: 'src/library.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    name: 'b2cMappUI',
    sourcemap: false,
    inlineDynamicImports: true,
  },
  external: [
    '@babel/runtime',
    '@lana/b2c-mapp-ui-assets',
    'libphonenumber-js/custom',
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
    terser(),
  ],
};

export default config;
