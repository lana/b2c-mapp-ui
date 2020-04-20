import PropTypes from 'prop-types';
import { useState, useEffect, useMemo } from 'preact/hooks';
import TextField from '../TextField/TextField';
import Text from '../../typography/Text/Text';
import CSS from './styles.css';

const TextFieldRule = ({ className, dataTestId, name, readOnly, placeholder, errorLabel, value, type, rule, onChange, onBlur, startFocused, ...props }) => {
	const [currentValue, setCurrentValue] = useState('');

	useEffect(() => {
		if(!value) { return; }
		setCurrentValue(value);
	}, []);

	const handleOnChange = eventValue => {
		if (currentValue !== eventValue) {
			setCurrentValue(eventValue);
		}
		if (onChange) {
			onChange(eventValue);
		}
	};

	const handleOnBlur = event => {
		const {
			target: { eventValue },
		} = event;
		if (currentValue !== eventValue) {
			setCurrentValue(eventValue);
		}
		if (onBlur) {
			onBlur(event);
		}
	};

	const result = useMemo(() => {
		const labeledClass = (currentValue) ? CSS.alignTop : '';
		return (
			<div className={CSS.wrapper}>
				<TextField 
					dataTestId={dataTestId} 
					placeholder={placeholder} 
					className={className} 
					type={type} 
					name={name} 
					value={currentValue} 
					errorLabel={errorLabel} 
					onChange={handleOnChange} 
					onBlur={handleOnBlur} 
					maxLength={rule} 
					startFocused={startFocused} 
					{...props} 
				/>
				<Text 
					dataTestId={`${dataTestId}-rule`} 
					color={`ash`} 
					className={`${CSS.rule} ${labeledClass}`}
				>
					{rule}
				</Text>
			</div>
		);
	}, [value, currentValue, errorLabel, readOnly]);

	return result;
};

TextFieldRule.defaultProps = {
	className: '',
	dataTestId: 'text-field-rule',
	type: 'text',
	name: '',
	value: '',
	placeholder: '',
	onBlur: null,
	onChange: null,
	onFocus: null,
	startFocused: false,
};

TextFieldRule.propTypes = {
	errorLabel: PropTypes.string.isRequired,
	className: PropTypes.string,
	dataTestId: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	rule: PropTypes.number.isRequired,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	startFocused: PropTypes.bool,
};

export default TextFieldRule;
