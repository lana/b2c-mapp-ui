# CopyToClipboardButton

A button that copies the given value to the clipboard and provides 3 steps of feedback to the user.

- Copy (default status)
- Copying... (Working/In progress)
- Copied! (success or end of the process)

(Optional) You can specify classNames for each feedback state, and specify the duration of the transitions between the states.

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


-----------
Modifying feedback times and labels for each state:
```
<CopyToClipboardButton toCopyValue='text to be copied' toCopyLabel={"This takes too long to copy"} copyingLabel={"Copying... get a coffee..."} copiedLabel={"Fast success feedback!"} copyingFeedbackTime={5000} copiedFeedbackTime={500}/>
```
