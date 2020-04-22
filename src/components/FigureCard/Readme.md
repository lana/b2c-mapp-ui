# FigureCard

The FigureCard looks like a button containing a figure and a caption.

| Prop        | Value Type                         | Required |
| ----------- | ---------------------------------- | -------- |
| `size`      | `String`                           | false    |
| `imageSrc`  | `String`                           | false    |
| `className` | `String`                           | false    |
| `meta`      | `String`                           | false    |
| `title`     | `secondary`, `dismiss`, `disabled` | false    |
| `link`      | `string`                           | false    |
| `onClick`   | `(link) => void`                   | false    |

```
<FigureCard imageSrc={'https://source.unsplash.com/random/44x44'} title={'Lana FigureCard'} meta={'Meta for FigureCard'} link={'#'}/>
```
