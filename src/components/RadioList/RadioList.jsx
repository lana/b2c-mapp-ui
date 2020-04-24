import { useState, useEffect, useMemo } from 'preact/hooks';
import PropTypes from 'prop-types';

import Heading from '../Heading/Heading';
import CSS from './styles.css';

const RadioList = ({ className, dataTestId, value, title, options, id, onChange }) => {
  const [currentValue, setCurrentValue] = useState(null);
  const callbackDelayInMilliseconds = 250;

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
      return;
    }
    const defaultCheckedOptionIndex = options.findIndex(({ selected }) => selected);
    setCurrentValue((defaultCheckedOptionIndex !== -1) ? options[defaultCheckedOptionIndex].value : null);
  }, [value, options]);

  const handleOnClick = ({ optionValue, onClick }, index) => {
    const invokeOnClick = () => { onClick(optionValue, index); };
    const invokeOnChange = () => { onChange(optionValue, index); };
    if (onClick) { setTimeout(invokeOnClick, callbackDelayInMilliseconds); }
    if ((currentValue !== optionValue) && onChange) { setTimeout(invokeOnChange, callbackDelayInMilliseconds); }
    setCurrentValue(optionValue);
  };

  const result = useMemo(() => (
    <section className={`${CSS.wrapper} ${className}`}>
      {title && <Heading className={CSS.title} type="callout">{title}</Heading>}
      <ul data-testid={`${dataTestId}-select`}>
        {options.map(({ label, value: optionValue, children, onClick }, index) => {
          const elementId = `${id}-${index}`;
          const checked = (currentValue === optionValue);
          return (
            <li
              data-testid={`${dataTestId}-option`}
              key={index}
              data-checked={checked}
              className={`${CSS.item} ${(checked) ? CSS.checked : ''}`}
              onClick={() => { handleOnClick({ optionValue, onClick }, index); }}
            >
              <input
                type="radio"
                className={CSS.radio}
                id={elementId}
                checked={checked}
                name={elementId}
                value={optionValue}
              />

              <div className={CSS.content}>
                {(label) ? (
                  <label
                    data-testid={`${dataTestId}-option-label`}
                    className={CSS.label}
                    htmlFor={elementId}
                  >
                    {label}
                  </label>
                ) : (children || null)}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  ), [options, value, currentValue]);
  return result;
};

RadioList.defaultProps = {
  className: '',
  dataTestId: 'selection-list',
  value: '',
  onChange: null,
};

RadioList.propTypes = {
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      selected: PropTypes.bool,
      label: PropTypes.string,
      value: PropTypes.string,
      children: PropTypes.node,
      onClick: PropTypes.func,
    }).isRequired,
  ).isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default RadioList;
