# BankAccountNumberInputField

An international bank account formatting and validation field.

| Prop          | Value Type                                                                        | Required                          |
| ------------- | --------------------------------------------------------------------------------- | --------------------------------- |
| `dataTestId`  | `String`                                                                          | false                             |
| `className`   | `String`                                                                          | false                             |
| `placeholder` | `String`                                                                          | **true**                          |
| `name`        | `String`                                                                          | **true**                          |
| `value`       | `String`                                                                          | false                             |
| `countryCode` | `String(Alpha-2 code)` [all country codes](https://wikipedia.org/wiki/ISO_3166-1) | **false** MX is taken as fallback |
| `errorLabel`  | `String`                                                                          | false                             |
| `onFocus`     | `(e: HTMLMouseEvent) => void`                                                     | false                             |
| `onBlur`      | `(e: HTMLMouseEvent) => void`                                                     | false                             |
| `onChange`    | `(value: String, validation: { isValid: Bool, isMaxLength: Bool }) => void`       | false                             |

### Normal status:

```
<BankAccountNumberInputField countryCode='MX' placeholder='Introduce un CLABE' name={'example_one'} errorLabel='Ivalid CLABE number' value='' />
```

### With valid value:

```
<BankAccountNumberInputField value='138211000000000127' countryCode='MX' placeholder='Introduce un CLABE' name={'example_two'} errorLabel='Invalid CLABE number'/>
```

### With invalid value:

```
 <BankAccountNumberInputField value='1382110000000' errorLabel='Invalid CLABE number' countryCode='MX' placeholder='Introduce un CLABE' name={'example_rd'}/>
```
