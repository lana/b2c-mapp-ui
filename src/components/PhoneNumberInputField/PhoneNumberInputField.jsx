import { useState, useEffect, useRef, useMemo } from 'preact/hooks';
import PropTypes from 'prop-types';
import { AsYouType, getCountryCallingCode } from 'libphonenumber-js/custom';

import FormField from '../FormField/FormField';
import TextParagraph from '../TextParagraph/TextParagraph';
import Metadata from '../../../data/libphonenumber-metadata.min.json';
import CSS from './styles.css';

const PhoneNumberInputField = ({ countryCode, className, dataTestId, name, value, placeholder, errorLabel, showCountryCode, onChange, onBlur, ...props }) => {
  const [phoneValue, setPhoneValue] = useState('');

  let phoneField = useRef(null);

  const formatPhoneNumber = (unformattedPhoneNumber) => {
    const asYouType = new AsYouType(countryCode, Metadata);
    const result = asYouType.input(unformattedPhoneNumber);
    return result;
  };

  useEffect(() => {
    if (!value) { return; }
    setPhoneValue(formatPhoneNumber(value));
  }, []);

  const handleOnChange = (eventValue) => {
    const formattedValue = formatPhoneNumber(eventValue);
    setPhoneValue(formattedValue);
    if (onChange) { onChange(eventValue); }
  };

  const handleOnBlur = ({ target: { value: eventValue } }) => {
    const formattedValue = formatPhoneNumber(eventValue);
    setPhoneValue(formattedValue);
    phoneField.value = formattedValue;
    if (onBlur) { onBlur(formattedValue); }
  };

  const getPrefix = () => `+${getCountryCallingCode(countryCode, Metadata)}`;

  const result = useMemo(() => {
    const prefix = getPrefix();
    const filledClass = (showCountryCode) ? CSS.filled : '';
    return (
      <FormField
        dataTestId={dataTestId}
        ref={(field) => { phoneField = field; }}
        placeholder={placeholder}
        className={`${CSS.Field} ${filledClass} ${className}`}
        type="tel"
        name={name}
        value={phoneValue}
        errorLabel={errorLabel}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        showPrefix={showCountryCode}
        {...props}
      >
        {showCountryCode && <TextParagraph dataTestId={`${dataTestId}-prefix`} color="ash" className={CSS.prefix}>{prefix}</TextParagraph>}
      </FormField>
    );
  }, [showCountryCode, countryCode, phoneValue, value]);
  return result;
};

PhoneNumberInputField.defaultProps = {
  onBlur: () => {},
  onChange: () => {},
  name: '',
  value: '',
  className: '',
  showCountryCode: true,
  dataTestId: 'phone-field',
  placeholder: 'Default placeholder',
};

PhoneNumberInputField.propTypes = {
  countryCode: PropTypes.string.isRequired,
  errorLabel: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  showCountryCode: PropTypes.bool,
  placeholder: PropTypes.string,
  dataTestId: PropTypes.string,
};

export default PhoneNumberInputField;
