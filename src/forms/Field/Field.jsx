import { useMemo, useEffect, useRef } from 'preact/hooks'
import PropTypes from 'prop-types';

import {useToggle} from '../../utils/hooks';

import CSS from './styles.css';

const Field = ({
	id,
	name,
	dataTestId,
	errorLabel,
	startFocused,
	maxLength,
	type,
	value,
	readOnly,
	className,
	placeholder,
	showPrefix,
	children,
	onBlur,
	onChange,
	onFocus,
}) => {
	const [isFocused, toggleFocus] = useToggle(false);

	let inputRef = useRef(null);

	useEffect(() => {
		if (!startFocused) { return; }
		toggleFocus();
		if (inputRef) { inputRef.focus(); } 
	}, []);
	
	const handleOnFocus = (event) => {
		toggleFocus();
		if (onFocus) { onFocus(event); }
	}

	const handleOnBlur = (event) => {
		toggleFocus();
		if (onBlur) { onBlur(event); }
	}

	const handleOnChange = ({target: { value: fieldValue }}) => {
		if (onChange) { onChange(fieldValue); }
	}

	const result = (useMemo(() => {
		const isLabeled = value !== '';
		const labeledClass = (showPrefix || isLabeled || readOnly) ? CSS.labeled : '';
		const inputId = ( id !== null ) ? id : name;

		return (
			<label
				data-testid={`${dataTestId}-label`}
				className={`${CSS.field} ${labeledClass} ${(isFocused) ? CSS.focus : ''} ${(errorLabel) ? CSS.error : ''} ${(readOnly) ? CSS.readonly : ''} ${className}`}
			>
				{ children || '' }
				<strong className={CSS.label}>{errorLabel || placeholder}</strong>
				<input
					data-testid={`${dataTestId}-input`}
					id={inputId || name}
					ref={elem => (inputRef = elem)}
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
					onChange={handleOnChange}
					onInput={handleOnChange}
					autoComplete="off"
					className={CSS.input}
					type={type}
					maxLength={maxLength}
					readOnly={readOnly}
					name={name}
					value={value}
				/>
			</label>
		);
	}, [inputRef, isFocused, value]));

	return result;
};

Field.defaultProps = {
	id: null,
	dataTestId: 'field',
	errorLabel: '',
	maxLength: 100,
	value: '',
	readOnly: false,
	className: '',
	showPrefix: false,
	children: null,
	startFocused: false,
	onBlur: null,
	onChange: null,
	onFocus: null,
}

Field.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	errorLabel: PropTypes.string,
	id: PropTypes.string,
	dataTestId: PropTypes.string,
	maxLength: PropTypes.number,
	value: PropTypes.string,
	readOnly: PropTypes.bool,
	startFocused: PropTypes.bool,
	className: PropTypes.string,
	showPrefix: PropTypes.bool,
	children: PropTypes.node,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
};

export default Field;
