const config = (api) => {
  const isTest = api.env('test');
  const result = {
    presets: [
      [
        '@babel/preset-env',
        {
          debug: false,
          modules: (isTest) ? 'commonjs' : false,
          exclude: ['transform-regenerator'],
        },
      ],
    ],
  };
  return result;
};

module.exports = config;
