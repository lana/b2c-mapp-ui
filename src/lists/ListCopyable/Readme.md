# ListCopyable
A list item which takes the consumer to perform an action in another screen.

| Prop |  Value Type | Required |
| --- | --- | --- |
| `options` | `{icon: ReactNode, text: String, itemTitle: String, single: Boolean, hide: Boolean}[]` | ***true*** |
| `title` | `String` | **true** |
| `children` | `ReactNode` | false |

```
<ListCopyable
	title={'Datos de la cuenta'}
	options={[
		{
			icon: <InfoIcon color="blue-500" />,
			text: 'Text to be copied',
			itemTitle: 'An Info text',
			single: false,
		},
		{
			icon: <img src="https://source.unsplash.com/random/24x24" />,
			text: 'https://source.unsplash.com/random/24x24',
			itemTitle: 'Random URL',
			single: false,
		},
		{
			icon: <FaceidIcon color="blue-500" />,
			text: '1234567890ABCDE',
			itemTitle: 'FaceID',
			single: false,
		},
		{
			icon: <TouchidIcon color="blue-500" />,
			text: '1234567890ABCDE',
			itemTitle: 'Touch ID',
			single: false,
		},
	]}
/>


```
