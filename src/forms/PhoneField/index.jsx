import { Component } from 'preact'
import PropTypes from 'prop-types'
import Metadata from '../../../data/libphonenumber-metadata.min.json'
import { parseNumber, AsYouType, getCountryCallingCode } from 'libphonenumber-js/custom'

import CSS from './styles.css'
import Field from '../Field'
import Text from '../../typography/Text'

// PhoneField extends a regular Field including special formatting
// for phone numbers as the user types. Validation should be made
// by the caller.
export default class PhoneField extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: this.formatPhoneNumber(props.value),
		}
	}

	formatPhoneNumber(value) {
		const ayt = new AsYouType(this.props.countryCode, Metadata)
		return ayt.input(value)
	}

	onChange(ev) {
		let value = this.formatPhoneNumber(ev.target.value)
		this.setState({ value }, () => {
			const { onChange } = this.props
			if (onChange) onChange(value)
		})
	}

	// getPhone provides a phone object that can be used for validation.
	// This will be empty if the number is invalid.
	getPhone() {
		return parseNumber(this.state.value, this.props.countryCode, { extended: false }, Metadata)
	}

	onBlur(ev) {
		let value = this.formatPhoneNumber(ev.target.value)
		this.setState({ value }, () => {
			const { onBlur } = this.props
			if (onBlur) onBlur(value)
			// Force a field update so we can use the new format
			this.field.setValue(value)
		})
	}

	getPrefix() {
		return `+${getCountryCallingCode(this.props.countryCode, Metadata)}`
	}

	focus() {
		if (this.field) {
			this.field.focus()
		}
	}

	render(props, state) {
		const prefix = this.getPrefix()
		const filledClass = props.showCountryCode ? CSS.filled : ''
		const dataTestId = props.dataTestId || 'PhoneField'

		return (
			<Field
				dataTestId={dataTestId}
				ref={field => (this.field = field)}
				placeholder={props.placeholder}
				className={`${CSS.Field} ${filledClass} ${props.className || ''}`}
				type="tel"
				name={props.name}
				value={state.value}
				errorLabel={props.errorLabel}
				onChange={ev => this.onChange(ev)}
				onBlur={ev => this.onBlur(ev)}
				showPrefix={props.showCountryCode}
			>
				{props.showCountryCode && (
					<Text color="ash" className={CSS.prefix}>
						{prefix}
					</Text>
				)}
			</Field>
		)
	}
}

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
}

PhoneField.defaultProps = {
	onBlur: () => {},
	onChange: () => {},
	name: '',
	value: '',
	className: '',
	showCountryCode: true,
	placeholder: 'Default placeholder',
}
