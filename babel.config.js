const config = (api) => {
  const isTest = api.env('test');
  const result = {
    plugins: [
      [
        'module:fast-async',
        {
          spec: true,
        },
      ],
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-export-namespace-from',
    ],
    presets: [
      [
        '@babel/preset-env',
        {
          debug: false,
          modules: (isTest) ? 'commonjs' : false,
          useBuiltIns: false,
          exclude: ['transform-regenerator', 'transform-async-to-generator'],
          targets: '> 0.1%, not dead',
        },
      ],
    ],
  };
  return result;
};

module.exports = config;
