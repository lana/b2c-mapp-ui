# Screen

A wrapper that is bound to the Router library and listens for URL changes, so that it can become active whenever the Browser URL and the Screen `url` prop are the same.

If the Browser URL contains any data in the form of a [query string](https://wikipedia.org/wiki/Query_string), it will be passed down as an object to the `onBeforeActivate`, `onActivate`, `onDeactivate` props.

| Prop          | Value Type         | Required |
| ------------- | ------------------ | -------- |
| `className`   | `String`           | false    |
| `children`    | `ReactNode`        | **true** |
| `title`       | `String`           | false    |
| `url`         | `String`           | **true** |
| `displayMode` | `stack`, `overlap` | false    |

```
<Screen>Example Content</Screen>
```

As this is a non-visual component the best way to know how it works is by [looking at an example](https://github.com/lana/lana-mapp-template/blob/master/src/App.jsx).
