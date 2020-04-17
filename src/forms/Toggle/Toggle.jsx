import PropTypes from 'prop-types';

import CSS from './styles.css';

const Toggle = ({ onChange, checked, dataTestId, className }) => {
	const checkedClass = (checked) ? CSS.checked : '';
	return (
		<div data-testid={`${dataTestId}-wrapper`} className={`${CSS.checkbox} ${checkedClass} ${className}`}>
			<label>
				<span className={CSS.track} />
				<span className={CSS.knob} />
				<input
					data-testid={`${dataTestId}-input`}
					type="checkbox"
					checked={checked}
					onChange={e => {
						onChange ? onChange(e) : null;
					}}
				></input>
			</label>
		</div>
	);
};

Toggle.defaultProps = {
	checked: false,
	dataTestId: 'toggle',
	className: ''
};

Toggle.propTypes = {
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool,
	dataTestId: PropTypes.string,
	className: PropTypes.string,
};

export default Toggle;
