# PhoneNumberInputField

An international phone-number formatting field.

## Usage

To use the PhoneNumberInputField component you need to provide your custom metadata for validating the phones.

Metadata can be generated using the command `npm run libphonenumber-metadata` (using [lana-µapp-template](https://github.com/lana/lana-mapp-template)).
Edit the `package.json` task to supply your custom options.

This approach allows us to have a minimal impact in the final build size when using `libphonenumber-js`.

| Prop              | Value Type                                                                        | Required |
| ----------------- | --------------------------------------------------------------------------------- | -------- |
| `className`       | `String`                                                                          | false    |
| `dataTestId`      | `String`                                                                          | false    |
| `placeholder`     | `String`                                                                          | **true** |
| `value`           | `String`                                                                          | false    |
| `countryCode`     | `String(Alpha-2 code)` [all country codes](https://wikipedia.org/wiki/ISO_3166-1) | **true** |
| `showCountryCode` | `Boolean`                                                                         | false    |
| `errorLabel`      | `String`                                                                          | false    |
| `onFocus`         | `(e: HTMLMouseEvent) => void`                                                     | false    |
| `onBlur`          | `(e: HTMLMouseEvent) => void`                                                     | false    |
| `onChange`        | `(newFormattedPhoneValue) => void`                                                | false    |

```
<PhoneNumberInputField placeholder='Enter your phone' countryCode='MX' />
```

Phone field with invalid pre-filled value:

```
<PhoneNumberInputField placeholder='Enter your phone' countryCode='MX' errorLabel='Invalid phone number' value='5512341234' />
```

