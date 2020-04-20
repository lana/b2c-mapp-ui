# CopyToClipboard

Button that copy the given value to the clipboard and provide 3 steps feedback for user

- Copy (default status)
- Copying... (work in progress)
- Copied! (success or end of the process)

Allow to add specific classNames for each feedback and specific transition time between them (no required)

| Prop                  | Value Type | Required |
| --------------------- | ---------- | -------- |
| `dataTestId`          | `String`   | false    |
| `toCopyValue`         | `String`   | true     |
| `toCopyLabel`         | `String`   | false    |
| `copyingLabel`        | `String`   | false    |
| `copiedLabel`         | `String`   | false    |
| `toCopyClass`         | `String`   | false    |
| `copyingClass`        | `String`   | false    |
| `copiedClass`         | `String`   | false    |
| `copyingFeedbackTime` | `Number`   | false    |
| `copiedFeedbackTime`  | `Number`   | false    |

Default:
```
<CopyToClipboard toCopyValue='text to be copied'/>

```
-----------
Modifying feedback times and labels for each state:
```
<CopyToClipboard toCopyValue='text to be copied' toCopyLabel={"Takes too long to copy"} copyingLabel={"Copying... take a coffee..."} copiedLabel={"Fast success feedback!"} copyingFeedbackTime={5000} copiedFeedbackTime={500}/>
```
