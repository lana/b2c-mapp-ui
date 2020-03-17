import { Component } from 'preact'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import Field from '../Field'
import CSS from './styles.css'
import { strToDate, dateToString, autoformatDate } from '../../utils'
import { CalendarIcon } from '@lana/b2c-mapp-ui-assets'

export default class DateField extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: props.value,
			validation: 'incomplete',
			calValue: props.value,
		}
		this.calendar = null
		this.uniqueId = ''
	}

	componentDidMount() {
		this.uniqueId = uuidv4().substring(0, 8)
	}

	onChange(ev) {
		const { autoformat } = this.props
		let date = ''
		let validation = 'incomplete'
		const regex = /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d$/
		let value = ev.target.value
		if (autoformat) {
			value = autoformatDate(value)
		}
		validation = regex.test(value) ? 'success' : 'error'
		let calValue = value
		if (regex.test(value)) {
			calValue = strToDate(calValue)
		}
		if (this.calendar) {
			this.calendar.value = calValue
		}

		this.setState(
			{
				value: date || value,
				validation,
				calValue,
			},
			() => {
				if (this.props.onValidation) {
					this.props.onValidation(this.state.value, this.props.id)
				}
			},
		)
	}

	changeCalendar(e) {
		if (e.target.value) {
			const date = new Date(e.target.value)
			this.onChange({ target: { value: dateToString(date) } })
		}
	}

	componentWillReceiveProps(nextProps, prevProps) {
		if (nextProps.validation && nextProps.validation !== prevProps.validation) {
			this.setState({ validation: nextProps.validation })
		}
	}

	render(props, state) {
		const dataTestId = props.dataTestId || 'DateField'

		return (
			<div className={CSS.calendar_wrapper}>
				<Field
					dataTestId={dataTestId}
					placeholder={props.label}
					className={props.className}
					type="text"
					value={state.value}
					errorLabel={
						state.validation === 'error' ? props.errorLabel || 'Fecha no válida (DD/MM/YYYY)' : null
					}
					onChange={ev => this.onChange(ev)}
					readOnly={props.readOnly || false}
					maxLength={10}
				/>
				{props.datepicker && (
					<label htmlFor={`input-date-${this.uniqueId}`} className={CSS.icon_calendar}>
						<CalendarIcon />
						<input
							id={`input-date-${this.uniqueId}`}
							tabIndex={-1}
							ref={el => {
								this.calendar = el
							}}
							type="date"
							className={CSS.hidden_input}
							value={state.calValue}
							onChange={e => {
								this.changeCalendar(e)
							}}
						/>
					</label>
				)}
			</div>
		)
	}
}

DateField.propTypes = {
	errorLabel: PropTypes.string.isRequired,
	type: PropTypes.string,
	value: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	datepicker: PropTypes.bool,
	autoformat: PropTypes.bool,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onValidation: PropTypes.func,
}

DateField.defaultProps = {
	datepicker: false,
	autoformat: false,
}
