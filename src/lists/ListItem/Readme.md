# ListItem

A list item which usually takes the consumer to a content in another screen.

| Prop          | Value Type                                   | Required |
| ------------- | -------------------------------------------- | -------- |
| `className`   | `String`                                     | false    |
| `icon`        | `ReactNode`                                  | false    |
| `iconColor`   | `blue`, `green`, `yellow`, `brown`, `purple` | false    |
| `title`       | `String`                                     | **true** |
| `description` | `String`                                     | false    |
| `checked`     | `Boolean`                                    | false    |
| `onClick`     | `(e: HTMLMouseEvent) => void`                | false    |
| `onLink`      | `(e: HTMLMouseEvent) => void`                | false    |
| `onChange`    | `(e: HTMLMouseEvent) => void`                | false    |

```
<ul>
    <ListItem title='1st item' description='additional metadata' icon={<img src="https://source.unsplash.com/random/44x44" />} />
    <ListItem title='2nd item' description='additional metadata' icon={<img src="https://source.unsplash.com/random/44x44" />} />
    <ListItem title='3rd item' description='additional metadata' icon={<img src="https://source.unsplash.com/random/44x44" />} />
</ul>
```
