const esModules = ['vue-contenteditable'].join('|');
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: ['<rootDir>/setupTests.js'],
  testMatch: [
    '**/*.test.js',
    '**/*.spec.js',
  ],
  collectCoverageFrom: [
    'src/**/*.vue',
    '!src/main.js',
  ],
  verbose: true,
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};
