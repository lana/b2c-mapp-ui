import { Component } from 'preact'

import CSS from './Button.css'
import MopIcon from '../../icons/ic_mop'

export default class Button extends Component {
	state = {
		isPressed: false,
	}

	togglePressed() {
		this.setState({ isPressed: !this.state.isPressed })
	}

	onClick(e) {
		if (this.props.onClick) this.props.onClick(e)
		if (this.state.isPressed) this.togglePressed()
		e.preventDefault()
	}

	render() {
		let type = CSS[this.props.type] || ''
		let loadingClass = this.props.loading ? CSS.loading : ''
		let pressedClass = this.state.isPressed ? CSS.pressed : ''
		let isButton = !this.props.href

		if (isButton) {
			return (
				<button
					type="button"
					onTouchStart={e => this.togglePressed()}
					onTouchEnd={e => this.togglePressed()}
					onClick={e => this.onClick(e)}
					className={`${CSS.button} ${type} ${loadingClass} ${pressedClass} ${this.props
						.className || ''}`}
				>
					<em className={CSS.loadingWrapper}>
						<MopIcon className={CSS.loadingIcon} />
						{this.props.loading}...
					</em>
					<span className={CSS.defaultWrapper}>{this.props.children}</span>
				</button>
			)
		} else {
			return (
				<a
					href={this.props.href}
					onClick={e => this.onClick()}
					onTouchStart={e => this.togglePressed()}
					onTouchEnd={e => this.togglePressed()}
					className={`${CSS.button} ${type} ${loadingClass} ${this.props.className || ''}`}
				>
					{this.props.children}
				</a>
			)
		}
	}
}
