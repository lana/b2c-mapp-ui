# TextFieldRule

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

- TextFieldRule without given value:

```
<TextFieldRule placeholder='Credit Card Number' rule={16} />
```

- TextFieldRule and given value and focused:

```
<TextFieldRule placeholder='Credit Card Number' rule={16} value='1' startFocused/>
```

- TextFieldRule with error label:

```
<TextFieldRule placeholder='Credit Card Number' errorLabel='Length should be 16' rule={16} value='1234' />
```
