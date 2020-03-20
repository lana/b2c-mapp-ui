# FigureCard

Card looks like button containing figure & caption

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
<FigureCard imageSrc={'assets/lanaLogo.svg'} title={'Lana FigureCard'} meta={'Meta for FigureCard'} link={'#'}/>
```
