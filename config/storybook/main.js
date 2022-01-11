module.exports = {
  stories: ['../../src/**/*.stories.@(ts|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal(config, { configType }) {
    const newConfig = {
      ...config,
      base: (configType === 'PRODUCTION') ? '/b2c-mapp-ui/' : config.base,
    };
    return newConfig;
  },
};
