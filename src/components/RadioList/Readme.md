# RadioList

A control that allows a user to select an option by showing all available options as a list of radio buttons.

| Prop         | Value Type                                                                                            | Required |
| ------------ | ----------------------------------------------------------------------------------------------------- | -------- |
| `className`  | `String`                                                                                              | false    |
| `dataTestId` | `String`                                                                                              | false    |
| `value`      | `String` -> Value of selected option (to auto-select by parent)                                       | false    |
| `id`         | `String`                                                                                              | **true** |
| `title`      | `String`                                                                                              | **true** |
| `options`    | `{selected: Bool, label: String, value: String, children: ReactNode, onClick: (...): not required}[]` | **true** |
| `onChange`   | `(value: String, index: Int) => void`                                                                 | false    |

```
<RadioList id='UniquePageID' title='Select something'
    options={[
        { selected: true, label: 'Option 1', value: 'option_1' },
        { label: 'Option 2', value: 'option_2' }
    ]}
 />
```
