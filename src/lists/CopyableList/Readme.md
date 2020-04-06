# CopyableList

A list item which takes the consumer to perform an action in another screen.

| Prop       | Value Type                                                                             | Required   |
| ---------- | -------------------------------------------------------------------------------------- | ---------- |
| `options`  | `{icon: ReactNode, text: String, itemTitle: String, single: Boolean, hide: Boolean}[]` | **_true_** |
| `title`    | `String`                                                                               | **true**   |
| `children` | `ReactNode`                                                                            | false      |

```
<CopyableList
	title={'Datos de la cuenta'}
	options={[
		{
			icon: <InfoIcon color="blue-500" />,
			text: 'Text to be copied',
			itemTitle: 'An Info text',
			hide: false,
		},
		{
			icon: <img src="https://source.unsplash.com/random/24x24" />,
			text: 'https://source.unsplash.com/random/24x24',
			itemTitle: 'Random URL',
			hide: true,
		},
		{
			icon: <FaceidIcon color="blue-500" />,
			text: '1234567890ABCDE',
			itemTitle: 'FaceID',
			hide: false,
		},
		{
			icon: <TouchidIcon color="blue-500" />,
			text: '1234567890ABCDE',
			itemTitle: 'Touch ID',
			hide: false,
		},
	]}
/>


```
