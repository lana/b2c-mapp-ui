module.exports = {
  stories: ['../../src/**/*.stories.(js|jsx|mdx)'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: {
          presets: [
            [
              '@vue/cli-plugin-babel/preset',
              {
                jsx: false,
              },
            ],
          ],
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-notes',
  ],
};
