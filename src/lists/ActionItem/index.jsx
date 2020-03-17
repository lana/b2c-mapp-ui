import CSS from './styles.css'
import Text from '../../typography/Text'

// eslint-disable-next-line react/display-name
export default ({ onClick, media, mediaColor, highlight, className, title, dataTestId }) => {
	const mediaColorClass = mediaColor ? CSS[mediaColor] : ''
	const highLighClass = highlight ? `${CSS['highlight']}` : ''
	const testId = dataTestId || 'action-item'

	return (
		<li data-testid={testId} onClick={onClick ? e => onClick(e) : false} className={`${CSS.item} ${className || ''}`}>
			{media && <div className={`${CSS.media} ${mediaColorClass}`}>{media}</div>}
			<div className={CSS.body}>
				<Text className={highLighClass}>{title}</Text>
			</div>
		</li>
	)
}
