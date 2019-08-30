import { Component } from "preact";
import PropTypes from 'prop-types';

import CSS from "./Field.css";

export default class Field extends Component {
	constructor(props) {
		super(props);
		const value = props.value || "";
		this.state = {
			name: props.name,
			value: value,
			isFocused: false,
			isLabeled: (value.length != 0),
		};
		this.ref = null;
	}

	onFocus(e) {
		const { onFocus } = this.props;
		this.setState({ isFocused: true });
		if (onFocus) onFocus(e);
	}

	onBlur(e) {
		const { onBlur } = this.props;
		this.setState({ isFocused: false });
		if (onBlur) onBlur(e);
	}

	onChange(e) {
		const { onChange } = this.props;
		this.setValue(e.target.value);
		if (onChange) onChange(e);
	}

	setValue(value) {
		this.setState({
			value: value,
			isLabeled: (value.length != 0)
		});
	}

	focus() {
		if (this.ref) {
			this.ref.focus()
		}
	}

	render() {
		const {
			props: { errorLabel, placeholder, className, children, type, showPrefix, maxLength, readOnly },
			state: { isLabeled, isFocused, name, value }
		} = this;
		const labeledClass = showPrefix || isLabeled || readOnly ? CSS.labeled : ""
		const focusClass = isFocused ? CSS.focus : ""
		const hasError = errorLabel
		const errorClass = hasError ? CSS.error : ""
		const readonlyClass = readOnly ? CSS.readonly : null

		return (
			<label
				className={`${CSS.field} ${labeledClass} ${focusClass} ${errorClass} ${readonlyClass} ${className || ""}`}>
				{children || ""}
				<strong className={CSS.label}>
					{hasError ? errorLabel : placeholder}
				</strong>
				<input
					ref={(elem) => this.ref = elem}
					onFocus={e => this.onFocus(e)}
					onBlur={e => this.onBlur(e)}
					onInput={e => this.onChange(e)}
					autoComplete="off"
					className={CSS.input}
					type={type}
					maxLength={maxLength || 1000}
					readOnly={readOnly || false }
					name={name}
					value={value}
				/>
			</label>
		);
	}
}

Field.propTypes = {
	errorLabel: PropTypes.string.isRequired,
	errors: PropTypes.array,
	maxLength: PropTypes.number,
	type: PropTypes.string,
	value: PropTypes.string,
	readOnly: PropTypes.bool,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	showPrefix: PropTypes.bool,
	children: PropTypes.node,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func
};

