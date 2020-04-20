import PropTypes from 'prop-types';

import CSS from './styles.css';

const Heading = ({type, weight, className, dataTestId, children}) => {
	const typeClass = CSS[type] || '';
	const weightClass = CSS[weight] || '';
	return (
		<h1 data-testid={dataTestId} className={`${CSS.title} ${typeClass} ${weightClass} ${className}`}>
			{children}
		</h1>
	);
};

Heading.defaultProps = {
	type: null,
	weight: null,
	className: '',
	dataTestId: 'heading',
};

Heading.propTypes = {
	type: PropTypes.string,
	weight: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	dataTestId: PropTypes.string,
};

export default Heading;
