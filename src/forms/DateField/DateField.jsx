import { useState, useRef } from 'preact/hooks';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { CalendarIcon } from '@lana/b2c-mapp-ui-assets';

import { strToDate, dateToString, autoformatDate } from '../../utils/utils';
import Field from '../Field/Field';
import CSS from './styles.css';

const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;

const DateField = ({ autoformat, className, dataTestId, datepicker, errorLabel, id, label, maxLength, name, readOnly, value, onChange, onBlur, onFocus, onValidation }) => {
	const uniqueId = uuidv4().substring(0, 8);

	let calendar = useRef(null);
	let dateField = useRef(null);

	const [validation, setValidation] = useState('incomplete');
	const [fieldValue, setFieldValue] = useState('');
	const [calendarValue, setCalendarValue] = useState('');

	const handleOnChange = eventDate => {
		let eventValue = (autoformat) ? autoformatDate(eventDate) : eventDate;
		const newValidation = dateRegex.test(eventValue) ? 'success' : 'error';
		let calValue = (newValidation === 'success') ? strToDate(eventValue) : eventValue;
		if (calendar) { calendar.value = calValue; }
		dateField.value = eventValue;
		setFieldValue(eventValue || value);
		setValidation(newValidation);
		setCalendarValue(calValue);
		if (onValidation && id) { onValidation(fieldValue, id);	}
	};

	const handleCalendarChange = event => {
		const { target: { value: eventValue }} = event;
		if (!eventValue) { return; }
		const formattedDate = dateToString(new Date(eventValue));
		dateField.value = formattedDate;
		setFieldValue(formattedDate);
		if (onChange) {
			onChange({ target: { value: formattedDate } });
		}
	};

	return (
		<div data-testid="date-field-wrapper" className={CSS.calendar_wrapper}>
			<Field
				ref={input => {
					dateField = input;
				}}
				name={`date-field${name ? `-${name}` : ''}`}
				dataTestId={dataTestId}
				placeholder={label}
				className={className}
				type="text"
				value={fieldValue || value}
				errorLabel={validation === 'error' ? errorLabel : null}
				onChange={handleOnChange}
				readOnly={readOnly}
				maxLength={maxLength}
				onBlur={onBlur}
				onFocus={onFocus}
				id={(id) ? `${id}-date-input` : null }
			/>
			{datepicker && (
				<label data-testid={`${dataTestId}-datepicker-label`} htmlFor={`input-date-${uniqueId}`} className={CSS.icon_calendar}>
					<CalendarIcon />
					<input
						name={`input-date${name ? `-${name}` : ''}`}
						data-testid={`${dataTestId}-datepicker-input`}
						id={`input-date-${uniqueId}`}
						tabIndex={-1}
						ref={el => {
							calendar = el;
						}}
						id={(id) ? `${id}-date-picker` : null }
						type="date"
						className={CSS.hidden_input}
						value={calendarValue}
						onChange={handleCalendarChange}
					/>
				</label>
			)}
		</div>
	);
};

DateField.defaultProps = {
	autoformat: false,
	className: null,
	dataTestId: 'date-field',
	datepicker: false,
	errorLabel: 'Fecha no válida (DD/MM/YYYY)',
	label: '',
	id: '',
	maxLength: 10,
	name: '',
	readOnly: false,
	value: '',
	onBlur: null,
	onChange: null,
	onFocus: null,
	onValidation: null,
};

DateField.propTypes = {
	autoformat: PropTypes.bool,
	className: PropTypes.string,
	dataTestId: PropTypes.string,
	datepicker: PropTypes.bool,
	errorLabel: PropTypes.string,
	label: PropTypes.string,
	maxLength: PropTypes.number,
	name: PropTypes.string,
	id: PropTypes.string,
	readOnly: PropTypes.bool,
	value: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	onValidation: PropTypes.func,
};

export default DateField;
