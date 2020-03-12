# b2c-mapp-ui
Lana B2C µApp UI library.

## Install
You can install it as a standard yarn package.

`npm install @lana/b2c-mapp-ui`

## Usage example

1. Import `import { Button } from '@lana/b2c-mapp-ui'`
2. Consume `<Button>Action</Button>`

## Build

We can build the package by `npm run build`. To seperately build `es` and `cjs` modules please use `npm run build:esm` and `npm run build:cjs` respectively.

### Documentation
All documentation is generated based on the `Readme.md` files inside each library and component. You can use those `Readme.md` files to test your changes.

To start a local documentation site follow this steps.

1. `npm install`
2. `npm start`

Now every change you make will be automatically avaliable at [localhost:3000](http://localhost:3000).

### Tests

The tests are configured to 'verbose', so, that means when you run you should see a list of all current test, their descriptions and a report with the current coverage status.

`yarn test`

## Technologies
A list of the technologies used in this project:
* Preact
* CSS Modules + PostCSS
* Babel for ES6 and Preact transpiling
* Webpack(for dev server to test the component in realtime)
* Rollup(for building the package)
* libphonenumber-js
* Jest
* Enzyme
