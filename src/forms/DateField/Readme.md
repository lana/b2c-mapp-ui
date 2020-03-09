# DateField
A simple date input field.

| Prop |  Value Type | Required |
| --- | --- | --- |
| `name` | `String` | false |
| `className` | `String` | false |
| `children` | `ReactNode` | false |
| `type` | `String` [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | **true** |
| `placeholder` | `String` | **true** |
| `value` | `String` | false |
| `readonly` | `boolean` | false |
| `errorLabel` | `String` | false |
| `onFocus` | `(e: HTMLMouseEvent) => void` | false |
| `onBlur` | `(e: HTMLMouseEvent) => void` | false |
| `onChange` | `(e: HTMLMouseEvent) => void` | false |
| `datepicker` | `boolean` | false |

```
<DateField placeholder='Enter your DOB' datepicker />
```
