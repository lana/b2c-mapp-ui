# BottomDialog

A wrapper above an overlay or backdrop that requires a decision from the consumer or provides critical information.

| Prop        | Value Type                    | Required |
| ----------- | ----------------------------- | -------- |
| children    | `ReactNode`                   | false    |
| dataTestId  | `String`                      | false    |
| title       | `String`                      | false    |
| description | `String`                      | false    |
| secondary   | `String`                      | false    |
| confirm     | `String`                      | false    |
| visible     | `Bool`                        | false    |
| loading     | `Bool`                        | false    |
| onConfirm   | `(e: HTMLMouseEvent) => void` | false    |
| onSecondary | `(e: HTMLMouseEvent) => void` | false    |
| onDismiss   | `() => void`                  | false    |

```
<BottomDialog
    title='My title'
    description='Description of the action required or critical information.'
    secondary='View Terms & Conditions'
    confirm='Continue'
    visible
 />
```
