const sass = require('sass');

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        implementation: sass,
      },
    },
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
};
