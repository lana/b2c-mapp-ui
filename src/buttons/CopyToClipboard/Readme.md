# CopyToClipboard

Button that copy the given value to the clipboard and provide 3 steps feedback for user

- Copy (default status)
- Copying... (work in progress)
- Copied! (success or end of the process)

Allow to add specific classNames for each feedback and specific transition time between them (no required)

| Prop                  | Value Type | Required |
| --------------------- | ---------- | -------- |
| `dataTestId`          | `String`   | false    |
| `valueToCopy`         | `String`   | true     |
| `labelToCopy`         | `String`   | false    |
| `labelCopying`        | `String`   | false    |
| `labelCopied`         | `String`   | false    |
| `classToCopy`         | `String`   | false    |
| `classCopying`        | `String`   | false    |
| `classCopied`         | `String`   | false    |
| `copyingFeedbackTime` | `Number`   | false    |
| `copiedFeedbackTime`  | `Number`   | false    |

Default:
```
<CopyToClipboard valueToCopy='text to be copied'/>

```
-----------
Modifying feedback times and labels for each state:
```
<CopyToClipboard valueToCopy='text to be copied' labelToCopy={"Takes too long to copy"} labelCopying={"Copying... take a coffee..."} labelCopied={"Fast success feedback!"} copyingFeedbackTime={5000} copiedFeedbackTime={500}/>
```
