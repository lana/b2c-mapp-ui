module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  css: { extract: false },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
};
