# FormField

A simple text field.

| Prop           | Value Type                                                                                                     | Required |
| -------------- | -------------------------------------------------------------------------------------------------------------- | -------- |
| `dataTestId`   | `String`                                                                                                       | false    |
| `startFocused` | `boolean` -> caution, only one field can be focused at the same time                                           | false    |
| `maxLength`    | `number` -> (default 100)                                                                                      | false    |
| `name`         | `String`                                                                                                       | **true** |
| `id`           | `String` -> If not provided, takes its value from `name`                                                       | false    |
| `className`    | `String`                                                                                                       | false    |
| `children`     | `ReactNode`                                                                                                    | false    |
| `type`         | `String` [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | **true** |
| `placeholder`  | `String`                                                                                                       | **true** |
| `value`        | `String`                                                                                                       | false    |
| `readOnly`     | `boolean`                                                                                                      | false    |
| `showPrefix`   | `boolean`                                                                                                      | false    |
| `errorLabel`   | `String`                                                                                                       | false    |
| `onFocus`      | `(e: HTMLMouseEvent) => void`                                                                                  | false    |
| `onBlur`       | `(e: HTMLMouseEvent) => void`                                                                                  | false    |
| `onChange`     | `(e: HTMLMouseEvent) => void`                                                                                  | false    |

- Not focused & No value

```
<FormField placeholder='Enter your name' name={'example_one'}/>
```

- Focused & Value

```
<FormField placeholder="Example" value="foo" startFocused name={'example_two'}/>
```

- Not Focused, with error:

```
<FormField value="foo" errorLabel="Invalid value"  name={'example_three'}/>
```

- Readonly:

```
<FormField placeholder='Enter your name' value='value locked' readOnly name={'example_four'}/>
```