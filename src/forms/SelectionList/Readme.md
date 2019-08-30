# SelectionList
A control that allows a consumer to select an option by providing all available options visible upfront.


| Prop |  Value Type | Required |
| --- | --- | --- |
| `className` | `String` | false | 
| `id` | `String` | **true** | 
| `title` | `String` | **true** | 
| `options` | `{selected: Bool, label: String, value: String, children: ReactNode}[]` | **true** | 
| `onChange` | `(value: String, index: Int) => void` | false | 

```
<SelectionList id='UniquePageID' title='Select something'
    options={[
        { selected: true, label: 'Option 1', value: 'option_1' },
        { label: 'Option 2', value: 'option_2' }
    ]}
 />
```
