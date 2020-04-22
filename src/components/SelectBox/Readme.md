# SelectBox

A control that provides a menu of options to be selected.
The first item passed as option will be selected by default.

| Prop         | Value Type                                         | Required |
| ------------ | -------------------------------------------------- | -------- |
| `className`  | `String`                                           | false    |
| `dataTestId` | `String`                                           | false    |
| `value`      | `String`                                           | false    |
| `label`      | `String`                                           | **true** |
| `options`    | `{selected: Bool, label: String, value: String}[]` | **true** |
| `onChange`   | `(e: HTMLMouseEvent) => void`                      | false    |

```
<SelectBox label='Select something' options={[{ selected: true, label: 'Option 1', value: 'option_1' }, { selected: false, label: 'Option 2', value: 'option_2' }]} />
```

### Pre-selected option specified by the consumer:

```
<SelectBox value='option_2' label='Select something' options={[{ selected: true, label: 'Option 1', value: 'option_1' }, { selected: false, label: 'Option 2', value: 'option_2' }]} />
```