# ModalConfirmationDialog

A modal dialog that requires a decision from the user or provides critical information.

| Prop        | Value Type                    | Required |
| ----------- | ----------------------------- | -------- |
| children    | `ReactNode`                   | false    |
| title       | `String`                      | false    |
| dataTestId  | `String`                      | false    |
| description | `String`                      | false    |
| dismiss     | `String`                      | false    |
| confirm     | `String`                      | false    |
| visible     | `Bool`                        | false    |
| onConfirm   | `(e: HTMLMouseEvent) => void` | false    |
| onDismiss   | `(e: HTMLMouseEvent) => void` | false    |

```
<ModalConfirmationDialog
    title='My title'
    description='Description of the action required or critical information.'
    dismiss='Cancel'
    confirm='Accept'
    visible
 />
```
