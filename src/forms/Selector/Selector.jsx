import { Component } from 'preact'
import CSS from './Selector.css'
import { ExpandSmallIcon } from '@lana/b2c-mapp-ui-assets'

export default class Selector extends Component {
	state = {
		value: '',
		isFocused: false,
	}

	onFocus() {
		this.setState({ ...this.state, isFocused: true })
	}

	onBlur() {
		this.setState({ ...this.state, isFocused: false })
	}

	onChange(e) {
		this.setState({ ...this.state, value: e.target.value })
		if (this.props.onChange) this.props.onChange(e.target.value)
	}

	render() {
		let focusClass = this.state.isFocused ? CSS.focus : ''

		return (
			<label className={`${CSS.selector} ${focusClass} ${this.props.className || ''}`}>
				<strong className={CSS.label}>{this.props.label}</strong>
				<ExpandSmallIcon className={CSS.Icon} />
				<select
					className={CSS.select}
					onFocus={e => this.onFocus(e)}
					onBlur={e => this.onBlur(e)}
					onChange={e => this.onChange(e)}
				>
					{this.props.options.map(option => (
						<option selected={option.selected} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</label>
		)
	}
}
