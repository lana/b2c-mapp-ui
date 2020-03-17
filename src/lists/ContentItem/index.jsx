import CSS from './styles.css'
import Heading from '../../typography/Heading'
import Text from '../../typography/Text'
import { ForwardIcon } from '@lana/b2c-mapp-ui-assets'

export default ({ mediaColor, media, meta, onClick, className, title, dataTestId }) => {
	const mediaColorClass = mediaColor ? CSS[mediaColor] : ''
	const mediaIcon = media ? <div className={`${CSS.media} ${mediaColorClass}`}>{media}</div> : ''
	const metaInfo = meta ? <Text>{meta}</Text> : ''
	const testId = dataTestId || 'content-item'

	return (
		<li
			data-testid={testId}
			onClick={onClick ? e => onClick(e) : false}
			className={`${CSS.item} ${className || ''}`}
		>
			{mediaIcon}
			<div data-testid={`${testId}-heading`} className={CSS.body}>
				<Heading type="txt-medium">{title}</Heading>
				{metaInfo}
			</div>
			{onClick ? (
				<ForwardIcon dataTestId={`${testId}-forward`} color="inactive" className={CSS.icon} />
			) : (
				''
			)}
		</li>
	)
}
