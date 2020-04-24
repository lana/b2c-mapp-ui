import PropTypes from 'prop-types';
import { useState, useEffect, useMemo } from 'preact/hooks';

import FormField from '../FormField/FormField';

const TextField = ({ className, dataTestId, name, readOnly, placeholder, errorLabel, value, type, onChange, onBlur, startFocused, ...props }) => {
  const [currentValue, setCurrentValue] = useState('');

  useEffect(() => {
    if (!value) { return; }
    setCurrentValue(value);
  }, []);

  const handleOnChange = (eventValue) => {
    if (currentValue !== eventValue) { setCurrentValue(eventValue); }
    if (onChange) { onChange(eventValue); }
  };

  const handleOnBlur = (event) => {
    const { target: { eventValue } } = event;
    if (currentValue !== eventValue) { setCurrentValue(eventValue); }
    if (onBlur) { onBlur(event); }
  };

  const result = useMemo(() => (
    <FormField
      dataTestId={dataTestId}
      placeholder={placeholder}
      className={className}
      type={type}
      name={name}
      value={currentValue}
      errorLabel={errorLabel}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      readOnly={readOnly}
      startFocused={startFocused}
      {...props}
    />
  ), [value, currentValue, errorLabel, readOnly]);
  return result;
};

TextField.defaultProps = {
  className: '',
  dataTestId: 'text-field',
  type: 'text',
  name: '',
  value: '',
  placeholder: '',
  onBlur: null,
  onChange: null,
  onFocus: null,
  readOnly: false,
  startFocused: false,
};

TextField.propTypes = {
  errorLabel: PropTypes.string,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  readOnly: PropTypes.bool,
  startFocused: PropTypes.bool,
};

export default TextField;
