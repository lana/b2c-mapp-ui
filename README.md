# lana-µapp-libs
Shared custom libraries for building µapps.

## Install
You can install it as a standard yarn package.

`yarn add https://github.com/lana/b2c-mapp-libs.git`

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
* React Intl
* libphonenumber-js
* Jest
* Enzyme


## Aries SDK and Message Bus

The Aries browser provided by the mobile apps provides a message bus system that allows microapps to communicate with the native components.

Messages are sent from the webview with a specific event type that the native application will respond to.

| Topic Name | Sender | Description |
| ------------ | ------ | ----------- |
| `view.loaded` | µApp | The microapp sends this message to indicate they have loaded |
| `view.close` | µApp | Microapp is requesting that the session has finished and can close the window |
| `view.layout` | µApp | Set the layout. |
| `view.dismiss-icon` | µApp | Set the icon used to dismiss the view. |
| `view.title` | µApp | Set the application view title. |
| `scan.qr` | µApp | Launch a view to scan a QR code |
| `scan.barcode` | µApp | Launch a view to scan a regular Barcode |
| `selfie.enrole` | µApp | Launch a view that will be used to enrole a new selfie, usually used in signup. |
| `selfie.verify` | µApp | Launch a view to verify an existing selfie. |
| `user.fetch` | µApp | Request data on the current user. |
| `account.fetch` | µApp | Request data on the currently selected account. |
| `transaction.execute` | µApp | Show a view that will use to provided attributes to prepare a new transaction to be sent to the server to execute inmediatly. |
| `transaction.request` | µApp | Similar to `transaction.execute`, but will send a request to receive money. |
| `share.text` | µApp | Launch the native sharing components to be able to copy and paste or send the provide text. |
| `session.sign` | µApp | Generate a JSON Web Signature for the current microapp and optionally contain additional signed data provided in the params. |

Messages are published in a standardised format that must include a `topic` and `params` if there are any. For example:

```json
{
  "id": 20,
  "topic": "scan.qr",
  "params": {
    "userId": "XXXX"
  }
}
```

Recipients of the message must take a copy of the message, and add their own fields, ensuring that any fields included in the original are also passed through. An example reply might be:

```json
{
  "id": 20,
  "topic": "scan.qr",
  "params": {
    "userId": "XXXX"
  },
  "result": "ok",
  "response": {
    "sh": "XXXXXX"
  }
}
```

The `result` field must be `"ok"` for the request to be considered resolved. The `response` field contains any additional structured data.

A failure response could be like the following setting the `result` field to `"fail"` and providing a machine readible `reason`:

```json
{
  "id": 20,
  "topic": "scan.qr",
  "params": {
    "userId": "XXXX"
  },
  "result": "fail",
  "reason": "invalid_user"
}
```

For the message bus to work, the µApp library expects there to be one of two options of communication:

 * The Native application injects a `AriesLocalBus` global (i.e. on `window`) that responds to two calls: `publish(msg)` for sending messages to the native land and `setReceiver(function(msg))` that will set a callback to receive messages.
 * If no local global is found, the `AriesBus` will assume the webview is used inside an iframe and call the `window.parent.postMessage` to send messages and receive messages.

### Response Payloads

All response payloads are JSON objectives. We show nested data with a `.` seperator. Fields with `[]` imply an array of sub-objects.

Responses bodies should follow lowercase `snake_case` semantics, with a preference for short names. This most closely matches the naming of protobuf definitions, firebase data, and CouchDB documents.

#### User

User details are provided on the `user.fetch` topic.

| Field | Type | Description |
| ----- | ---- | ----------- |
| `region_id` | string | Two-letter code of the user's region. |
| `locale` | string | ISO code for user's locale, e.g. `es-MX`, `en-US`, etc. |
| `name.prefix` | string | Like Mr. Mrs. Miss, etc. Not normally used. |
| `name.given` | string | First or given name. |
| `name.surname` | string | First Surname. |
| `name.surname2` | string | Optional second surname. |
| `name.full` | string | Convenience output, shows the user's complete name. |
| `tel[].num` | string | User's active telephone numbers, the first always being the default. |
| `tel[].label` | string | Label or alternative name for the number. |

#### Account

Accounts are povided on the `account.fetch` topic.

| Field | Type | Description |
| ----- | ---- | ----------- |
| `product_id` | string | ID of the account's product type. |
| `owner_name` | string | Brief name of the account owner. |
| `num` | string | Account's regional short-number. Can be used for generating complete bank codes with a conversion algorithm. |

