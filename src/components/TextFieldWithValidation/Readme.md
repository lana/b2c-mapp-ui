# TextFieldWithValidation

A text field with hint (rule) -> can use Field props as well

| Prop          | Value Type                                                                                                     | Required |
| ------------- | -------------------------------------------------------------------------------------------------------------- | -------- |
| `className`   | `String`                                                                                                       | false    |
| `dataTestId`  | `String`                                                                                                       | false    |
| `type`        | `String` [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | false    |
| `placeholder` | `String`                                                                                                       | **true** |
| `value`       | `String`                                                                                                       | false    |
| `rule`        | `Number`                                                                                                       | false    |
| `errorLabel`  | `String`                                                                                                       | false    |
| `onFocus`     | `(e: HTMLMouseEvent) => void`                                                                                  | false    |
| `onBlur`      | `(e: HTMLMouseEvent) => void`                                                                                  | false    |
| `onChange`    | `(newValue) => void`                                                                                           | false    |

- TextFieldWithValidation without given value:

```
<TextFieldWithValidation placeholder='Credit Card Number' rule={16} />
```

- TextFieldWithValidation and given value and focused:

```
<TextFieldWithValidation placeholder='Credit Card Number' rule={16} value='1' startFocused/>
```

- TextFieldWithValidation with error label:

```
<TextFieldWithValidation placeholder='Credit Card Number' errorLabel='Length should be 16' rule={16} value='1234' />
```
