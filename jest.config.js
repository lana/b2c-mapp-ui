const esModules = ['vue-contenteditable', 'lodash-es'].join('|');
module.exports = {
  moduleFileExtensions: [
    'js',
    'vue',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
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
