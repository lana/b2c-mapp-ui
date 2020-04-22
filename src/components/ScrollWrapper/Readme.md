# ScrollWrapper
A wrapper that provides vertical scrolling. Commonly used as a direct child of the Screen component.

| Prop |  Value Type | Required |
| --- | --- | --- |
| `className` | `String` | false | 
| `children` | `ReactNode` | **true** | 
| `position` | `Int` | false | 

```
<Screen>
    <ScrollWrapper>
        Something to be scrolled
    </ScrollWrapper>
</Screen>
```

As this is a non-visual component the best way to know how it works is by [looking at an example](https://github.com/lana/lana-mapp-template/blob/master/src/screens/HomeScreen/HomeScreen.jsx).





