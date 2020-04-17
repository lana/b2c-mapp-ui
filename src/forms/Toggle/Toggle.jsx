import PropTypes from 'prop-types';

import CSS from './styles.css'

const Toggle = ({ onChange, checked, dataTestId }) => {
	const checkedClass = (checked) ? CSS.checked : null
	return (
		<div className={`${CSS.checkbox} ${checkedClass}`} data-testid={dataTestId}>
			<label>
				<span className={CSS.track} />
				<span className={CSS.knob} />
				<input
					data-testid={`${dataTestId}-input`}
					type="checkbox"
					checked={checked}
					onChange={e => {
						onChange ? onChange(e) : null
					}}
				></input>
			</label>
		</div>
	)
}

Toggle.defaultProps = {
	checked: false,
	dataTestId: 'toggle'
}

Toggle.propTypes = {
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool,
	dataTestId: PropTypes.string
}

export default Toggle;