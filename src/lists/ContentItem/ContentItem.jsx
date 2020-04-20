import PropTypes from 'prop-types';

import CSS from './styles.css';
import Heading from '../../typography/Heading/Heading';
import Text from '../../typography/Text/Text';
import { ForwardIcon } from '@lana/b2c-mapp-ui-assets';

const ContentItem =  ({ mediaColor, media, meta, onClick, className, title, dataTestId }) => {
	const mediaColorClass = mediaColor ? CSS[mediaColor] : '';
	const mediaIcon = media ? (
		<div data-testid={`${dataTestId}-media-icon`} className={`${CSS.media} ${mediaColorClass}`}>
			{media}
		</div>
	) : (
		''
	);
	const metaInfo = meta ? <Text dataTestId={`${dataTestId}-meta-text`}>{meta}</Text> : '';

	const forwardIcon = onClick ? <ForwardIcon data-testid={`${dataTestId}-forward-icon`} color="inactive" className={CSS.icon} /> : null;

	return (
		<li data-testid={dataTestId} onClick={onClick ? event => onClick(event) : false} className={`${CSS.item} ${className || ''}`}>
			{mediaIcon}
			<div data-testid={`${dataTestId}-heading`} className={CSS.body}>
				<Heading type="txt-medium">{title}</Heading>
				{metaInfo}
			</div>
			{forwardIcon}
		</li>
	);
};

ContentItem.defaultProps = { 
	mediaColor: false, 
	media: null, 
	meta: null, 
	onClick: () => {}, 
	className: '', 
	title: '', 
	dataTestId: 'content-item',
}

ContentItem.propTypes = {
	mediaColor: PropTypes.boolean, 
	media: PropTypes.node, 
	meta: PropTypes.node, 
	onClick: PropTypes.func, 
	className: PropTypes.string, 
	title: PropTypes.string, 
	dataTestId: PropTypes.string,
}

export default ContentItem;