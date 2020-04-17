import PropTypes from 'prop-types';

import '../../Theme/Theme';
import CSS from './styles.css';

const Text = ({ type, color, weight, className, dataTestId, children }) => {
	const typeClass = CSS[type] || '';
	const colorClass = CSS[color] || '';
	const weightClass = CSS[weight] || '';

	return (
		<p data-testid={dataTestId} className={`${CSS.txt} ${typeClass} ${colorClass} ${weightClass} ${className}`}>
			{children}
		</p>
	);
};

Text.defaultProps = {
	type: '',
	color: '',
	weight: '',
	className: '',
	dataTestId: 'text',
};

Text.propTypes = {
	type: PropTypes.string,
	color: PropTypes.string,
	weight: PropTypes.string,
	className: PropTypes.string,
	dataTestId: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Text;
