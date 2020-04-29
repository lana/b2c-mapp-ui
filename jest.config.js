module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: ['<rootDir>/setupTests.js'],
  testMatch: [
    '**/*.test.js',
    '**/*.spec.js',
  ],
  verbose: true,
};
