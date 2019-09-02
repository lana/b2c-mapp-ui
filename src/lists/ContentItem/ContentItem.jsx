import CSS from './ContentItem.css'
import Text from '../../typography/Text'
import { ForwardIcon } from '@lana/b2c-mapp-ui-assets'

export default ({ mediaColor, media, meta, onClick, className, title }) => {
	const mediaColorClass = mediaColor ? CSS[mediaColor] : ''
	const mediaIcon = media ? <div className={`${CSS.media} ${mediaColorClass}`}>{media}</div> : ''
	const metaInfo = meta ? (
		<Text type={`callout`} color={`concrete`}>
			{meta}
		</Text>
	) : (
		''
	)
	return (
		<li onClick={onClick ? e => onClick(e) : false} className={`${CSS.item} ${className || ''}`}>
			{mediaIcon}
			<div className={CSS.body}>
				<Text>{title}</Text>
				{metaInfo}
			</div>
			{onClick ? <ForwardIcon color="inactive" className={CSS.icon} /> : ''}
		</li>
	)
}
