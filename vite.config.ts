import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/library.ts'),
      name: 'b2cMappUi',
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
        '@vueform/slider',
      ],
      output: {
        globals: {
          vue: 'Vue',
          'vue-contenteditable': 'VueContenteditable',
          'vue-currency-input': 'VueCurrencyInput',
          'libphonenumber-js/custom': 'LibphonenumberJs',
          'lodash-es': 'Lodash',
          '@lana/b2c-mapp-ui-assets': 'b2cMappUiAssets',
          '@vueform/slider': 'VueFormSlider',
        },
      },
    },
  },
});
