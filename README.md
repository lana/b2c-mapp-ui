# b2c-mapp-ui
Lana B2C µApp UI library.

## Install
You can install it as a standard yarn package.

`npm add https://github.com/lana/b2c-mapp-ui.git`

## Usage example

1. Import `import Button from 'b2c-mapp-ui/src/buttons/Button'`
2. Consume `<Button>Action</Button>`

## Build
Currently, the package is not prebuilt on a distribution folder with the generated code, so when building your application, you will also be building the libs from the source code.

Source code import is an intentional feature because it allows you to include only the necessary files without bloating your final build. Otherwise, you will be shipping a full library with tons of un-used components.

For better tooling compatibility you should start your project using [lana-µapp-template](https://github.com/cabify/lana-mapp-template) boilerplate, which already includes this library as an yarn package.

## Contribute
To easily contribute to this project you need to use  [yarn link](https://yarnpkg.com/lang/en/docs/cli/link/) feature.

1. `cd b2c-mapp-ui`
2. `yarn link`
3. `cd your-project-consuming-mapp-libs`
4. `yarn link b2c-mapp-ui`
5. Ensure that your `webpack.config.js` has `config.resolve.symlinks: false`
6. Build your project as usually with `yarn start`

By following this steps you are creating a symlink from `node_modules/b2c-mapp-ui` to the source code of the b2c-mapp-ui repo. So every change you make on the source code will be available on the project consuming this lib.

To revert this process and consume the module again from `node_modules`

1. `cd b2c-mapp-ui`
2. `yarn unlink`
3. `cd your-project-consuming-mapp-libs`
4. `yarn install`

### Documentation
If you don't want to struggle with the `yarn link` approach you can always build the documentation site to preview your changes.

All documentation is generated based on the `Readme.md` files inside each library and component. You can use those `Readme.md` files to test your changes.

To start a local documentation site follow this steps.

1. `yarn install`
2. `yarn start`

Now every change you make will be automatically avaliable at [localhost:3000](http://localhost:3000).

### Tests

The tests are configured to 'verbose', so, that means when you run you should see a list of all current test, their descriptions and a report with the current coverage status.

`yarn test`

## Technologies
A list of the technologies used in this project:
* Preact
* CSS Modules + PostCSS
* Babel for ES6 and Preact transpiling
* Webpack
* libphonenumber-js
* Jest
* Enzyme
