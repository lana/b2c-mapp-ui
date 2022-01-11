const esModules = ['vue-contenteditable', 'lodash-es'].join('|');
module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'vue',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(j|t)s$': 'babel-jest',
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
    '**/*.test.ts',
    '**/*.spec.ts',
  ],
  collectCoverageFrom: [
    'src/**/*.vue',
    '!src/main.ts',
  ],
  verbose: true,
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};
