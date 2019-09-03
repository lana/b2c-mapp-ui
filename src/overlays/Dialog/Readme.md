# Dialog
A wrapper above an overlay or backdrop that requires a decision from the consumer or provides critical information.

| Prop |  Value Type | Required |
| --- | --- | --- |
| children | `ReactNode` | false | 
| title | `String` | false | 
| description | `String` | false | 
| dismiss | `String` | false | 
| confirm | `String` | false | 
| visible | `Bool` | false | 
| onConfirm | `(e: HTMLMouseEvent) => void` | false | 
| onDismiss | `(e: HTMLMouseEvent) => void` | false | 

```
<Dialog
    title='My title'
    description='Description of the action required or critical information.'
    dismiss='Cancel'
    confirm='Accept'
    visible={true}
 />
```




