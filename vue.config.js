// TODO JASON: Update storybook's template to be similar to LAMB (for appearing like a mobile device) for the stories that need it

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
