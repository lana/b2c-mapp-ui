import PropTypes from 'prop-types';
import { useState, useEffect, useMemo } from 'preact/hooks';
import { ExpandSmallIcon } from '@lana/b2c-mapp-ui-assets';

import { useToggle } from '../../utils/hooks';
import CSS from './styles.css';

const SelectBox = ({ className, dataTestId, options, label, value, onChange }) => {
  const [isFocused, toggleFocus] = useToggle(false);
  const [currentValue, setCurrentValue] = useState(null);

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
      return;
    }
    const selectedOptionIndex = options.findIndex(({ selected }) => selected);
    setCurrentValue((selectedOptionIndex !== -1) ? options[selectedOptionIndex].value : null);
  }, []);

  const handleOnChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { target: { value: eventValue } } = event;
    if (currentValue === eventValue) { return; }
    setCurrentValue(eventValue);
    if (onChange) { onChange(eventValue); }
  };

  const result = useMemo(() => {
    const focusClass = (isFocused) ? CSS.focus : '';
    return (
      <label data-testid={`${dataTestId}-label`} className={`${CSS.selector} ${focusClass} ${className}`}>
        <strong className={CSS.label}>{label}</strong>
        <ExpandSmallIcon className={CSS.Icon} />
        <select
          data-testId={`${dataTestId}-select`}
          className={CSS.select}
          onFocus={toggleFocus}
          onBlur={toggleFocus}
        >
          {options.map(({ value: optionValue, selected, disabled, label: optionLabel }) => {
            const isSelected = !!(((currentValue && currentValue === optionValue) || (!currentValue && selected)));
            return (
              <option
                data-testid={`${dataTestId}-option`}
                key={optionValue}
                data-selected={isSelected}
                selected={isSelected}
                value={optionValue}
                disabled={disabled}
                onClick={handleOnChange}
              >
                {optionLabel}
              </option>
            );
          })}
        </select>
      </label>
    );
  }, [currentValue, isFocused, value]);
  return result;
};

SelectBox.defaultProps = {
  className: '',
  dataTestId: 'selector',
  value: '',
  onChange: null,
};

SelectBox.propTypes = {
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      selected: PropTypes.boolean,
      disabled: PropTypes.boolean,
    }).isRequired,
  ).isRequired,
  onChange: PropTypes.func,
};

export default SelectBox;
