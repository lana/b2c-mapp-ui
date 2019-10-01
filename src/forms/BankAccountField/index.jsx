import { Component } from 'preact'

import CSS from './styles.css'
import Field from '../Field'

// BankAccountField extends a regular Field including special formatting
// for bank account numbers as the user types. Validation is passed to the caller.
export default class BankAccountField extends Component {
	templates = {
		MX: `XXX XXX XXXXXXXXXXX X`,
	}

	validations = {
		MX: account => {
			let value = account.split('')
			let dcIn = parseInt(value.pop())

			let sum = value.reduce(
				(buffer, digit, index) => (buffer += (digit * [3, 7, 1][index % 3]) % 10),
				0,
			)
			let dcOut = (10 - (sum % 10)) % 10

			return dcIn === dcOut
		},
	}

	validateAccountNumber(accountNumber, countryCode) {
		let value = accountNumber.replace(/ /g, '')
		let templateLength = this.templates[countryCode].replace(/ /g, '').length
		let customValidation = this.validations[countryCode](value)

		let isMaxLength = value.length === templateLength
		let isValid = isMaxLength && customValidation

		return { isValid: isValid, isMaxLength: isMaxLength }
	}

	parseAccountNumber(accountNumber, countryCode) {
		let template = this.templates[countryCode].slice(0)
		let accountDigits = accountNumber.split('')

		let value = accountDigits.reduce((buffer, digit, index) => {
			if (index < template.length && !isNaN(digit)) {
				if (template[index] === 'X') {
					buffer.push(digit)
				} else {
					if (digit !== ' ') buffer.push(' ')
					buffer.push(digit)
				}
			}
			return buffer
		}, [])

		// Remove leading spaces
		if (value[value.length - 1] === ' ') value.pop()

		return value.join('')
	}

	onChange(e) {
		let value = this.parseAccountNumber(e.target.value, this.props.countryCode)
		let validation = this.validateAccountNumber(value, this.props.countryCode)
		if (this.props.onChange) this.props.onChange(value, validation)
	}

	onBlur(ev) {
		if (this.props.onBlur) this.props.onBlur(ev.target.value)
	}

	render(props) {
		return (
			<Field
				placeholder={props.placeholder}
				className={`${props.className || ''}`}
				errorLabel={props.errorLabel}
				type='tel'
				value={props.value}
				maxLength={props.maxLength}
				onChange={ev => this.onChange(ev)}
				onBlur={ev => this.onBlur(ev)}
			/>
		)
	}
}
