# PhoneField
An international phone formatting field.

## Usage
To use the PhoneField component you need to provide your custom metadata for validating the phones.

Metadata can be generated using the command `npm run libphonenumber-metadata` (using [lana-µapp-template](https://github.com/cabify/lana-mapp-template)).
Edit the `package.json` task to supply your custom options.

This approach allows us to have a minimal impact in the final build size when using `libphonenumber-js`.

| Prop |  Value Type | Required |
| --- | --- | --- |
| `className` | `String` | false | 
| `placeholder` | `String` | **true** | 
| `value` | `String` | false | 
| `countryCode` | `String(Alpha-2 code)` [all country codes](https://wikipedia.org/wiki/ISO_3166-1) | **true** | 
| `showCountryCode` | `Boolean` | false | 
| `errorLabel` | `String` | false | 
| `onFocus` | `(e: HTMLMouseEvent) => void` | false | 
| `onBlur` | `(e: HTMLMouseEvent) => void` | false | 
| `onChange` | `(e: HTMLMouseEvent) => void` | false | 
| `resetValue` | `Boolean` | false | 


```
<PhoneField placeholder='Enter your phone' countryCode='MX' />
```

Phone field with prefilled value:

```
<PhoneField placeholder='Enter your phone' countryCode='MX' value='5512341234' />
```

```
<PhoneField placeholder='Enter your phone' countryCode='ES' value='644 477 644' />
```