# TextFieldRule
A text field with hint (rule)

| Prop |  Value Type | Required |
| --- | --- | --- |
| `className` | `String` | false | 
| `children` | `ReactNode` | false | 
| `type` | `String` [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | **true** | 
| `placeholder` | `String` | **true** | 
| `value` | `String` | false | 
| `rule` | `Number` | false | 
| `errorLabel` | `String` | false | 
| `onFocus` | `(e: HTMLMouseEvent) => void` | false | 
| `onBlur` | `(e: HTMLMouseEvent) => void` | false | 
| `onChange` | `(e: HTMLMouseEvent) => void` | false | 

```
<TextFieldRule placeholder='Credit Card Number' rule={16} />
```
