import { Component } from 'preact'

import CSS from './styles.css'
import { MopIcon } from '@lana/b2c-mapp-ui-assets'

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
		let defaultTestId = isButton ? 'button' : 'button-link'
		let testId = this.props.dataTestId || defaultTestId

		if (isButton) {
			return (
				<button
					data-testid={testId}
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

					data-testid={testId}
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
