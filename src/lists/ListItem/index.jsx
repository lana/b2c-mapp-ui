import CSS from './styles.css'
import Heading from '../../typography/Heading'
import Text from '../../typography/Text'
import Toggle from '../../forms/Toggle'

export default function ListItem({
	title,
	icon,
	iconColor,
	description,
	className,
	onLink,
	linkText,
	onChange,
	checked,
}) {
	const mediaColorClass = iconColor ? CSS[iconColor] : ''
	return (
		<li className={`${CSS.item} ${className || ''}`}>
			{icon ? <div className={`${CSS.media} ${mediaColorClass}`}>{icon}</div> : null}
			<div className={CSS.body}>
				<Heading type='txt-medium'>{title}</Heading>
				{description ? (
					<Text>
						{description}
					</Text>
				) : null}
				{onLink ? (
					<span
						onClick={() => {
							onLink()
						}}
						className={CSS.link}
					>
						{linkText}
					</span>
				) : null}
			</div>
			{onChange ? <Toggle checked={checked} onChange={onChange} /> : null}
		</li>
	)
}
