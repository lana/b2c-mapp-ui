# ActionItem
A list item which takes the consumer to perform an action in another screen.

| Prop |  Value Type | Required |
| --- | --- | --- |
| `className` | `String` | false | 
| `media` | `ReactNode` | false | 
| `mediaColor` | `blue`, `green`, `yellow`, `brown`, `purple` | false | 
| `title` | `String` | **true** | 
| `onClick` | `(e: HTMLMouseEvent) => void` | false | 
| `highlight` | `Boolean` | false | 

```
<ul>
    <ActionItem title='1st item' media={<img src="https://source.unsplash.com/random/44x44" />} />
    <ActionItem title='2nd item' media={<ExampleIcon/>} highlight mediaColor="blue" />
    <ActionItem title='3nd item' media={<ExampleIcon />} highlight mediaColor="purple" />
    <ActionItem title='4rd item' media={<ExampleIcon/>} />
</ul>
```




