import CSS from './styles.css'
import Heading from '../../typography/Heading'
import Text from '../../typography/Text'
import { ForwardIcon } from '@lana/b2c-mapp-ui-assets'

export default ({ mediaColor, media, meta, onClick, className, title }) => {
	const mediaColorClass = mediaColor ? CSS[mediaColor] : ''
	const mediaIcon = media ? <div className={`${CSS.media} ${mediaColorClass}`}>{media}</div> : ''
	const metaInfo = meta ? (
		<Text>{meta}</Text>
	) : (
		''
	)
	return (
		<li onClick={onClick ? e => onClick(e) : false} className={`${CSS.item} ${className || ''}`}>
			{mediaIcon}
			<div className={CSS.body}>
				<Heading type='txt-medium'>{title}</Heading>
				{metaInfo}
			</div>
			{onClick ? <ForwardIcon color="inactive" className={CSS.icon} /> : ''}
		</li>
	)
}
