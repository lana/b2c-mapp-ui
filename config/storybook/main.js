module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|mdx)'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
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
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-notes',
  ],
};
