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
	dataTestId,
}) {
	const mediaColorClass = iconColor ? CSS[iconColor] : ''
	const testId = dataTestId || 'list-item'

	return (
		<li className={`${CSS.item} ${className || ''}`} data-testid={testId}>
			{icon ? <div className={`${CSS.media} ${mediaColorClass}`}>{icon}</div> : null}
			<div data-testid={`${testId}-heading`} className={CSS.body}>
				<Heading type="txt-medium">{title}</Heading>
				{description ? <Text>{description}</Text> : null}
				{onLink ? (
					<span
						data-testid={`${testId}-heading-link`}
						onClick={() => {
							onLink()
						}}
						className={CSS.link}
					>
						{linkText}
					</span>
				) : null}
			</div>
			{onChange ? (
				<Toggle dataTestId={`${testId}-toggle`} checked={checked} onChange={onChange} />
			) : null}
		</li>
	)
}
