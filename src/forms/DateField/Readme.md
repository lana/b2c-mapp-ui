# DateField

A simple date input field.

| Prop           | Value Type                    | Required |
| -------------- | ----------------------------- | -------- |
| `name`         | `String`                      | false    |
| `dataTestId`   | `String`                      | false    |
| `className`    | `String`                      | false    |
| `children`     | `ReactNode`                   | false    |
| `label`        | `String`                      | **true** |
| `value`        | `String`                      | false    |
| `readOnly`     | `boolean`                     | false    |
| `autoformat`   | `boolean`                     | false    |
| `errorLabel`   | `String`                      | false    |
| `onFocus`      | `(e: HTMLMouseEvent) => void` | false    |
| `onBlur`       | `(e: HTMLMouseEvent) => void` | false    |
| `onChange`     | `(e: HTMLMouseEvent) => void` | false    |
| `onValidation` | `(e: HTMLMouseEvent) => void` | false    |
| `datepicker`   | `boolean`                     | false    |
| `maxLength`    | `number`                      | false    |

## Empty:

```
<DateField label='Enter your DOB' datepicker />
```

## With valid date:

```
<DateField value={'01/12/1990'} label='Enter your DOB' datepicker />
```
