# TextField

A simple text field. (It can also handle props for a normal Field)

| Prop           | Value Type                                                                                                     | Required |
| -------------- | -------------------------------------------------------------------------------------------------------------- | -------- |
| `className`    | `String`                                                                                                       | false    |
| `dataTestId`   | `String`                                                                                                       | false    |
| `type`         | `String` [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | false    |
| `placeholder`  | `String`                                                                                                       | **true** |
| `value`        | `String`                                                                                                       | false    |
| `name`         | `String`                                                                                                       | false    |
| `id`           | `String` -> nice to have                                                                                       | false    |
| `errorLabel`   | `String`                                                                                                       | false    |
| `readOnly`     | `boolean`                                                                                                      | false    |
| `startFocused` | `boolean`                                                                                                      | false    |
| `onFocus`      | `(e: HTMLMouseEvent) => void`                                                                                  | false    |
| `onBlur`       | `(e: HTMLMouseEvent) => void`                                                                                  | false    |
| `onChange`     | `(e: HTMLMouseEvent) => void`                                                                                  | false    |

- Normal TexField without given value and not focused:

```
<TextField placeholder='Home address' />
```

- Normal TextField without given value and focused:

```
<TextField placeholder='Home address' startFocused/>
```

- Normal TextField with given value and not focused:

```
<TextField placeholder='Home address' value={'Street'}/>
```

- Error TextField:

```
<TextField errorLabel={'The given address is not valid'} placeholder='Home address' value={'Street'}/>
```
