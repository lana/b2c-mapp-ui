# Screen
A wrapper that is bound to the Router library and listens on URL changes, so it can become active when the Browser URL and the Screen `url` prop are the same.

If the Browser URL contains any data in form of [query string](https://wikipedia.org/wiki/Query_string), it will be passed down as an object to the `onBeforeActivate`, `onActivate`, `onDeactivate` props.


| Prop |  Value Type | Required |
| --- | --- | --- |
| `className` | `String` | false | 
| `children` | `ReactNode` | **true** | 
| `title` | `String` | false | 
| `url` | `String` | **true** | 
| `displayMode` | `stack`, `overlap` | false | 

```jsx readonly
<Screen>
    Content
</Screen>
```

As this is a non-visual component the best way to know how it works it's by [looking at an example](https://github.com/cabify/lana-mapp-template/blob/master/src/App.jsx).





