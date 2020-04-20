# Stepper

A step based progress indicator for multi screen flows.

| Prop         | Value Type | Required |
| ------------ | ---------- | -------- |
| `className`  | `String`   | false    |
| `dataTestId` | `String`   | false    |
| `title`      | `String`   | false    |
| `steps`      | `Int`      | **true** |
| `activeStep` | `Int`      | false    |
| `hideActive` | `Bool`     | false    |

```
<Stepper title='Your progress' steps={4} activeStep={1} />
```
