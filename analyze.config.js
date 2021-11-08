import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      open: true,
      title: 'Lana B2C µApp UI Bundle Visualizer',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/library.js'),
      name: 'b2cMappUiAssets',
      fileName: (format) => `b2c-mapp-ui.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue',
        'vue-contenteditable',
        'vue-currency-input',
        'libphonenumber-js/custom',
        'lodash-es',
        '@lana/b2c-mapp-ui-assets',
      ],
      output: {
        globals: {
          vue: 'Vue',
          'vue-contenteditable': 'VueContenteditable',
          'vue-currency-input': 'VueCurrencyInput',
          'libphonenumber-js/custom': 'LibphonenumberJs',
          'lodash-es': 'Lodash',
          '@lana/b2c-mapp-ui-assets': 'b2cMappUiAssets',
        },
      },
    },
  },
});
