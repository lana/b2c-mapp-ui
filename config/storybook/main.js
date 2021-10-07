module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  core: {
    builder: 'storybook-builder-vite',
  },
};
