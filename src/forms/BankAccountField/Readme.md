# BankAccountField

An international bank account formatting and validation field.

| Prop          | Value Type                                                                        | Required |
| ------------- | --------------------------------------------------------------------------------- | -------- |
| `dataTestId`  | `String`                                                                          | false    |
| `className`   | `String`                                                                          | false    |
| `placeholder` | `String`                                                                          | **true** |
| `value`       | `String`                                                                          | false    |
| `maxLength`   | `Number`                                                                          | false    |
| `countryCode` | `String(Alpha-2 code)` [all country codes](https://wikipedia.org/wiki/ISO_3166-1) | **true** |
| `errorLabel`  | `String`                                                                          | false    |
| `onFocus`     | `(e: HTMLMouseEvent) => void`                                                     | false    |
| `onBlur`      | `(e: HTMLMouseEvent) => void`                                                     | false    |
| `onChange`    | `(value: String, validation: { isValid: Bool, isMaxLength: Bool }) => void`       | false    |


### Normal status:

```
<BankAccountField countryCode='MX' placeholder='Introduce un CLABE' />
```

### With valid value:

```
<BankAccountField value='138211000000000127' countryCode='MX' placeholder='Introduce un CLABE' />
```

### With invalid value:

```
 <BankAccountField value='138211000000000' errorLabel='Invalid CLABE number' countryCode='MX' placeholder='Introduce un CLABE' />
```
