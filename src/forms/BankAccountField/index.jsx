import PropTypes from 'prop-types';

import Field from '../Field';

const BankAccountField = ({
	countryCode,
	className,
	dataTestId,
	maxLength,
	placeholder,
	errorLabel,
	value,
	onChange,
	onBlur,
	onFocus,
}) => {
	const templates = {
		MX: `XXX XXX XXXXXXXXXXX X`,
	};

	const validations = {
		MX: account => {
			const accountValue = account.split('');
			const controlDigitIn = parseInt(accountValue.pop());

			const sum = accountValue.reduce(
				(buffer, digit, index) => (buffer += (digit * [3, 7, 1][index % 3]) % 10),
				0,
			);

			const controlDigitOut = (10 - (sum % 10)) % 10;
			return controlDigitIn === controlDigitOut;
		},
	};

	const validateAccountNumber = ({ accountNumber, countryCode }) => {
		const accountValue = accountNumber.replace(/ /g, '');
		const templateLength = templates[countryCode].replace(/ /g, '').length;
		const customValidation = validations[countryCode](accountValue);

		const isMaxLength = accountValue.length === templateLength;
		const isValid = isMaxLength && customValidation;

		return { isValid, isMaxLength };
	};

	const accountNumberFormatter = ({ accountNumber, countryCode }) => {
		const template = templates[countryCode].slice(0);
		const accountDigits = accountNumber.split('');

		const accountValue = accountDigits.reduce((buffer, digit, index) => {
			if (index < template.length && !isNaN(digit)) {
				if (template[index] === 'X') {
					buffer.push(digit);
				} else {
					if (digit !== ' ') buffer.push(' ');
					buffer.push(digit);
				}
			}
			return buffer;
		}, []);

		return accountValue.join('').trim();
	};

	const handleOnChange = ({ target: { value: fieldValue } }) => {
		const parsedValue = accountNumberFormatter({ accountNumber: fieldValue, countryCode });
		const validation = validateAccountNumber({ accountNumber: parsedValue, countryCode });
		if (onChange) {
			onChange(fieldValue, validation);
		}
	};

	const handleOnBlur = ({ target: { value: fieldValue } }) => {
		if (onBlur) {
			onBlur(fieldValue);
		}
	};

	const handleOnFocus = ({ target: { value: fieldValue } }) => {
		if (onFocus) {
			onFocus(fieldValue);
		}
	};

	return (
		<Field
			dataTestId={dataTestId}
			placeholder={placeholder}
			className={`${className || ''}`}
			errorLabel={errorLabel}
			type="tel"
			value={value}
			maxLength={maxLength}
			onChange={handleOnChange}
			onBlur={handleOnBlur}
			onFocus={handleOnFocus}
		/>
	);
};

BankAccountField.defaultProps = {
	dataTestId: 'bank-account-field',
	className: '',
	maxLength: 18,
	errorLabel: '',
	value: '',
	onBlur: null,
	onChange: null,
	onFocus: null
};

BankAccountField.propTypes = {
	dataTestId: PropTypes.string,
	className: PropTypes.string,
	countryCode: PropTypes.string.isRequired,
	maxLength: PropTypes.number,
	placeholder: PropTypes.string.isRequired,
	errorLabel: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
};

export default BankAccountField;
