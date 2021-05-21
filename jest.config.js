const esModules = ['vue-contenteditable'].join('|');
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: ['<rootDir>/setupTests.js'],
  roots: ['<rootDir>/src/components'],
  modulePathIgnorePatterns: [
    '<rootDir>/config',
    '<rootDir>/data',
    '<rootDir>/dist',
    '<rootDir>/public',
    '<rootDir>/src/styles',
  ],
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
