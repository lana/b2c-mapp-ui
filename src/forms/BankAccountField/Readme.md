# BankAccountField
An international bank account formatting and validation field.


| Prop |  Value Type | Required |
| --- | --- | --- |
| `className` | `String` | false | 
| `placeholder` | `String` | **true** | 
| `value` | `String` | false | 
| `countryCode` | `String(Alpha-2 code)` [all country codes](https://wikipedia.org/wiki/ISO_3166-1) | **true** | 
| `errorLabel` | `String` | false | 
| `onFocus` | `(e: HTMLMouseEvent) => void` | false | 
| `onBlur` | `(e: HTMLMouseEvent) => void` | false | 
| `onChange` | `(value: String, validation: { isValid: Bool, isMaxLength: Bool }) => void` | false | 

```
<BankAccountField countryCode='MX' placeholder='Introduce un CLABE' />
```
