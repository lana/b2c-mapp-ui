import { useState, useEffect, useMemo } from 'preact/hooks';
import PropTypes from 'prop-types';

import Field from '../Field/Field';

const digitPattern = 'X';
const templates = {
	MX: 'XXX XXX XXXXXXXXXXX X',
};
const defaultCountryCode = 'MX';
const spaceRegexp = / /g;

const BankAccountField = ({ countryCode, className, dataTestId, placeholder, name, errorLabel, value, onChange, onBlur, onFocus }) => {
	
	const [bankAccountValue, setBankAccountValue] = useState('');
	const [isValidBankAccount, setIsValidBankAccount] = useState(true);

	useEffect(() => {
		if (!value) { return; }
		const template = (countryCode) ? templates[countryCode] : templates[defaultCountryCode];
		const formattedAccountNumber = accountNumberFormatter({accountNumber: value, template});
		setBankAccountValue(formattedAccountNumber);
		const validation = validateAccountNumber({accountNumber: value, countryCode: countryCode || defaultCountryCode})
		setIsValidBankAccount(validation.isValid);
	}, []);

	const validations = {
		MX: account => {
			const accountValue = account.split('');
			const controlDigitIn = parseInt(accountValue.pop());
			const sum = accountValue.reduce((buffer, digit, index) => (buffer += (digit * [3, 7, 1][index % 3]) % 10), 0);
			const controlDigitOut = (10 - (sum % 10)) % 10;
			return controlDigitIn === controlDigitOut;
		},
	};

	const validateAccountNumber = ({ accountNumber, countryCode }) => {
		const templateLength = templates[countryCode].replace(spaceRegexp, '').length;
		const customValidation = validations[countryCode](accountNumber);
		const isMaxLength = accountNumber.length === templateLength;
		const isValid = isMaxLength && customValidation;
		return { isValid, isMaxLength };
	};

	const accountNumberFormatter = ({ accountNumber, template }) => {
		let accountDigitIndex = 0;
		const generateAccountValue = (prevResult, patternCharacter) => {
		if (!accountNumber[accountDigitIndex]) { return prevResult; }
		const nextCharacter = (patternCharacter === digitPattern) ? accountNumber[accountDigitIndex] : patternCharacter;
		if (patternCharacter === digitPattern) { accountDigitIndex++; }
		const newResult = `${prevResult}${nextCharacter}`;
		return newResult;
	}
		
		const parsedAccountNumber = template.split('').reduce(generateAccountValue, '');
		return parsedAccountNumber;
	};

	const handleOnChange = fieldValue => {
		const template = (countryCode) ? templates[countryCode] : templates[defaultCountryCode];
		const templateLength = template.replace(spaceRegexp, '').length;
		const accountNumber = fieldValue.replace(spaceRegexp, '');
		if (accountNumber.length > templateLength) { return; }
		const validation = validateAccountNumber({ accountNumber, countryCode: countryCode || defaultCountryCode });
		const parsedAccountNumber = accountNumberFormatter({accountNumber, template});
		setBankAccountValue(parsedAccountNumber);
		setIsValidBankAccount(validation.isValid);
		if (onChange) { onChange(fieldValue, validation); }
	};

	const handleOnBlur = ({ target: { value: fieldValue } }) => {
		if (onBlur) { onBlur(fieldValue); }
	};

	const handleOnFocus = ({ target: { value: fieldValue } }) => {
		if (onFocus) { onFocus(fieldValue); }
	};

	const result = useMemo(() => {
		const showErrorLabel = (isValidBankAccount) ? false : true;
		const maxLength = (countryCode) ? templates[countryCode].length : templates[defaultCountryCode].length;
		return <Field 
					dataTestId={dataTestId} 
					placeholder={placeholder} 
					className={className} 
					errorLabel={(showErrorLabel) ? errorLabel : ''} 
					type="tel" 
					name={name} 
					value={bankAccountValue} 
					maxLength={maxLength} 
					onChange={handleOnChange} 
					onBlur={handleOnBlur} 
					onFocus={handleOnFocus} 
				/>
	},[value, bankAccountValue, isValidBankAccount]);
	
	return result;
};

BankAccountField.defaultProps = {
	dataTestId: 'bank-account-field',
	className: '',
	errorLabel: 'Invalid account number',
	value: '',
	onBlur: null,
	onChange: null,
	onFocus: null,
};

BankAccountField.propTypes = {
	dataTestId: PropTypes.string,
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	countryCode: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	errorLabel: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
};

export default BankAccountField;
