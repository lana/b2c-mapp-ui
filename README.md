# b2c-mapp-ui
Lana B2C µApp UI library.

## Install
You can install it as a standard npm package.

`npm install @lana/b2c-mapp-ui`

## Usage example

1. Import `import { Button } from '@lana/b2c-mapp-ui'`
2. Consume `<Button>Action</Button>`

## Build

We can build the package by `npm run build`.

### Documentation
All documentation can be found inside of Storybook: `npm run storybook`

### Tests

The tests are configured to 'verbose', so, that means when you run you should see a list of all current test, their descriptions and a report with the current coverage status.

`yarn test`

## Technologies
A list of the technologies used in this project:
* VueJS
* Vuex
* Storybook
* CSS Modules + PostCSS
* Babel for ES6
* Webpack(for dev server to test the component in realtime)
* libphonenumber-js
* Jest

### Customize Vue-CLI Configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
