# ContentItem
A list item which usually takes the consumer to a content in another screen.

| Prop |  Value Type | Required |
| --- | --- | --- |
| `className` | `String` | false | 
| `media` | `ReactNode` | false | 
| `mediaColor` | `blue`, `green`, `yellow`, `brown`, `purple` | false | 
| `title` | `String` | **true** | 
| `meta` | `String` | false | 
| `onClick` | `(e: HTMLMouseEvent) => void` | false | 

```
<ul>
    <ContentItem title='1st item' meta='additional metadata' media={<img src="https://source.unsplash.com/random/44x44" />} />
    <ContentItem title='2nd item' meta='additional metadata' media={<img src="https://source.unsplash.com/random/44x44" />} />
    <ContentItem title='3rd item' meta='additional metadata' media={<img src="https://source.unsplash.com/random/44x44" />} />
</ul>
```




