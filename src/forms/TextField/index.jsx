import { Component } from 'preact'
import PropTypes from 'prop-types'
import Field from '../Field'

export default class TextField extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: props.value,
		}
		this.field = null
	}

	onChange(ev) {
		this.setState({ value: ev.target.value }, () => {
			if (this.props.onChange) {
				this.props.onChange(this.state.value)
			}
		})
	}

	onBlur(ev) {
		this.setState({ value: ev.target.value }, () => {
			if (this.props.onBlur) {
				this.props.onBlur(this.state.value)
			}
		})
	}

	focus() {
		if (this.field) {
			this.field.focus()
		}
	}

	render(props) {
		let { type } = this.props
		if (!type) {
			type = 'text'
		}
		return (
			<Field
				ref={field => (this.field = field)}
				placeholder={props.placeholder}
				className={props.className}
				type={type}
				name={props.name}
				value={props.value}
				errorLabel={props.errorLabel}
				onChange={ev => this.onChange(ev)}
				onBlur={ev => this.onBlur(ev)}
				readOnly={props.readOnly || false}
			/>
		)
	}
}

TextField.propTypes = {
	errorLabel: PropTypes.string.isRequired,
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
}
