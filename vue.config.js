// TODO JASON: Add this dev-dependency back to package.json once ready: "@lana/b2c-mapp-ui-assets": "^3.2.0",

module.exports = {
  lintOnSave: false,
  css: { extract: false },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
};
