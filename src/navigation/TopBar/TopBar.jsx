import { useMemo } from 'preact/hooks';
import PropTypes from 'prop-types';
import CSS from './styles.css';
import Heading from '../../typography/Heading/Heading';

const TopBar = ({ className, title, dataTestId }) =>
	useMemo(
		() => (
			<header data-testid={dataTestId} className={`${CSS.topbar} ${className}`}>
				<Heading type={`headline`} className={CSS.title}>
					{title}
				</Heading>
			</header>
		),
		[title],
	);

TopBar.defaultProps = {
	className: '',
	dataTestId: 'topbar-header',
};

TopBar.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
	dataTestId: PropTypes.string,
};

export default TopBar;