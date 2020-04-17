import PropTypes from 'prop-types';

import CSS from './styles.css';
import Text from '../../typography/Text/Text';

const ActionItem = ({ onClick, mediaContent, mediaColor, highlight, className, title, dataTestId }) => {
	const mediaColorClass = mediaColor ? CSS[mediaColor] : '';
	const highLighClass = highlight ? `${CSS['highlight']}` : '';

	return (
		<li data-testid={dataTestId} onClick={onClick ? e => onClick(e) : false} className={`${CSS.item} ${className}`}>
			{mediaContent && (
				<div data-testid={`${dataTestId}-mediacolor`} className={`${CSS.media} ${mediaColorClass}`}>
					{mediaContent}
				</div>
			)}
			<div className={CSS.body}>
				<Text dataTestId={`${dataTestId}-highlight`} className={highLighClass}>
					{title}
				</Text>
			</div>
		</li>
	);
};

ActionItem.defaultProps = {
	dataTestId: 'action-item',
	className: '',
	onClick: null,
	mediaContent: null,
	mediaColor: false,
	highlight: false,
};

ActionItem.propTypes = {
	onClick: PropTypes.func,
	mediaContent: PropTypes.node,
	mediaColor: PropTypes.bool,
	highlight: PropTypes.bool,
	dataTestId: PropTypes.string,
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
};

export default ActionItem;
