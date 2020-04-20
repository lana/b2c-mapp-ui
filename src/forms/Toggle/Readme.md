# Toggle

A simple toggle input: The control of this component should be handled by its consumer.

| Prop         | Value Type                    | Required |
| ------------ | ----------------------------- | -------- |
| `className`  | `String`                      | false    |
| `dataTestId` | `String`                      | false    |
| `checked`    | `Boolean`                     | false    |
| `onChange`   | `(e: HTMLMouseEvent) => void` | **true** |

- Checked:

```
<Toggle checked onChange={() => {}} />
```

- UnChecked:

```
<Toggle onChange={() => {}} />
```
