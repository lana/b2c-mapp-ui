import PropTypes from 'prop-types';

import CSS from './styles.css';

const ToggleSwitch = ({ onChange, checked, dataTestId, className }) => {
  const checkedClassName = (checked) ? CSS.checked : '';

  const invokeOnChangeIfPresent = (event) => {
    if (!onChange) { return; }
    onChange(event);
  };

  return (
    <div data-testid={`${dataTestId}-wrapper`} className={`${CSS.checkbox} ${checkedClassName} ${className}`}>
      <label>
        <span className={CSS.track} />
        <span className={CSS.knob} />
        <input
          data-testid={`${dataTestId}-input`}
          type="checkbox"
          checked={checked}
          onChange={invokeOnChangeIfPresent}
        />
      </label>
    </div>
  );
};

ToggleSwitch.defaultProps = {
  checked: false,
  dataTestId: 'toggle',
  className: '',
};

ToggleSwitch.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  dataTestId: PropTypes.string,
  className: PropTypes.string,
};

export default ToggleSwitch;
