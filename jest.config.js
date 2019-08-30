module.exports = {
  "setupFiles": [
    "./jest.setup.js"
  ],
  "moduleNameMapper": {
    "^react-dom/server$": "<rootDir>/node_modules/preact-render-to-string/dist/index.js",
    "^react-addons-test-utils$": "<rootDir>/node_modules/preact-test-utils/lib/index.js",
    "react-dom/test-utils": "<rootDir>/node_modules/preact-test-utils/lib/index.js",
    "react-test-renderer/shallow": "<rootDir>/node_modules/preact-test-utils/lib/index.js",
    "react-test-renderer": "<rootDir>/node_modules/preact-test-utils/lib/index.js",
    "react-addons-test-utils": "<rootDir>/node_modules/preact-test-utils/lib/index.js",
    "^react$": "<rootDir>/node_modules/preact-compat-enzyme/lib/index.js",
    "^react-dom$": "<rootDir>/node_modules/preact-compat-enzyme/lib/index.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy",
  },

  "moduleFileExtensions": [
    "js",
    "jsx"
  ],
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/UI/(lists|navigation|buttons)/**/*.{js,jsx}"
  ],
  "verbose": true
}