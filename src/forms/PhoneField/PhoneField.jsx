import {useState, useEffect, useRef, useMemo} from 'preact/hooks';
import PropTypes from 'prop-types'

import Metadata from '../../../data/libphonenumber-metadata.min.json';
import { AsYouType, getCountryCallingCode } from 'libphonenumber-js/custom';
import CSS from './styles.css';
import Field from '../Field/Field';
import Text from '../../typography/Text/Text';

const PhoneField = ({countryCode, className, dataTestId, name, value, placeholder, errorLabel, showCountryCode, onChange, onBlur, ...props}) => {
	const [phoneValue, setPhoneValue] = useState('');

	let phoneField = useRef(null);

	useEffect(() => {
		if (!value) { return; }
		setPhoneValue(formatPhoneNumber(value));
	}, []);

	const formatPhoneNumber = (unformattedPhoneNumber) => {
		const asYouType = new AsYouType(countryCode, Metadata)
		return asYouType.input(unformattedPhoneNumber);
	}

	const handleOnChange = (eventValue) => {
		const formattedValue = formatPhoneNumber(eventValue);
		setPhoneValue(formattedValue);
		if (onChange) { onChange(eventValue); }
	}

	const handleOnBlur = (event) => {
		const {target: {value: eventValue}} = event;
		const formattedValue = formatPhoneNumber(eventValue);
		setPhoneValue(formattedValue);
		phoneField.value = formattedValue;
		if (onBlur) { onBlur(formattedValue); }
	};

	const getPrefix = () => `+${getCountryCallingCode(countryCode, Metadata)}`;

	const result = useMemo(() => {
		const prefix = getPrefix();
		const filledClass = showCountryCode ? CSS.filled : '';
		return (
			<Field
				dataTestId={dataTestId}
				ref={field => { phoneField = field; }}
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
				{showCountryCode && (
					<Text dataTestId={`${dataTestId}-prefix`} color="ash" className={CSS.prefix}>
						{prefix}
					</Text>
				)}
			</Field>
		)
	}, [showCountryCode, countryCode, phoneValue, value]);

	return result;
};

PhoneField.propTypes = {
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

PhoneField.defaultProps = {
	onBlur: () => {},
	onChange: () => {},
	name: '',
	value: '',
	className: '',
	showCountryCode: true,
	dataTestId: 'phone-field',
	placeholder: 'Default placeholder',
};

export default PhoneField;
