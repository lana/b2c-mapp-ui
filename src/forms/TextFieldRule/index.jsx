import { Component } from 'preact'
import PropTypes from 'prop-types'
import Field from '../Field'
import Text from '../../typography/Text'
import CSS from './styles.css'

export default class TextFieldRule extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: props.value,
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.value !== this.props.value) {
			this.setState({
				value: this.props.value,
			})
		}
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

	render(props, state) {
		let labeledClass
		let type = this.props.type
		if (!type) {
			type = 'text'
		}
		if (props.value)
			labeledClass =
				(state.value != undefined && state.value != '') || props.value.length > 0
					? CSS.alignTop
					: ''
		const length = parseInt(props.rule)
		const dataTestId = props.dataTestId || 'TextFieldRule'

		return (
			<div className={CSS.wrapper}>
				<Field
					dataTestId={dataTestId}
					ref={field => (this.field = field)}
					placeholder={props.placeholder}
					className={props.className}
					type={type}
					name={props.name}
					value={props.value}
					errorLabel={props.errorLabel}
					onChange={ev => this.onChange(ev)}
					onBlur={ev => this.onBlur(ev)}
					maxLength={length}
				/>
				<Text color={`ash`} className={`${CSS.rule} ${labeledClass}`}>
					{props.rule}
				</Text>
			</div>
		)
	}
}

TextFieldRule.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	type: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
}
