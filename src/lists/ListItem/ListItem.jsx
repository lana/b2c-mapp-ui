import PropTypes from 'prop-types';

import CSS from './styles.css';
import Heading from '../../typography/Heading/Heading';
import Text from '../../typography/Text/Text';
import Toggle from '../../forms/Toggle/Toggle';

const ListItem = ({ title, icon, iconColor, description, className, onLink, linkText, onChange, checked, dataTestId }) => (
	<li className={`${CSS.item} ${className}`} data-testid={dataTestId}>
		{icon ? (
			<div data-testid={`${dataTestId}-icon`} className={`${CSS.media} ${iconColor ? CSS[iconColor] : ''}`}>
				{icon}
			</div>
		) : null}
		<div data-testid={`${dataTestId}-heading`} className={CSS.body}>
			<Heading type="txt-medium">{title}</Heading>
			{description ? <Text dataTestId={`${dataTestId}-description`}>{description}</Text> : null}
			{onLink ? (
				<span
					data-testid={`${dataTestId}-heading-link`}
					onClick={onLink}
					className={CSS.link}
				>
					{linkText}
				</span>
			) : null}
		</div>
		{onChange ? <Toggle dataTestId={`${dataTestId}-toggle`} checked={checked} onChange={onChange} /> : null}
	</li>
);

ListItem.defaultProps = {
	dataTestId: 'list-item',
	icon: null,
	iconColor: '',
	className: '',
	description: '',
	linkText: '',
	checked: false,
	onLink: null,
	onChange: null,
};

ListItem.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.node,
	iconColor: PropTypes.string,
	description: PropTypes.string,
	className: PropTypes.string,
	onLink: PropTypes.func,
	linkText: PropTypes.string,
	onChange: PropTypes.func,
	checked: PropTypes.bool,
	dataTestId: PropTypes.string,
};

export default ListItem;
