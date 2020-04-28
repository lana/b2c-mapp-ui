import { Component } from 'preact'

import CSS from './styles.css'
import Button from '../Button'

export default class ButtonWrapped extends Component {
	render() {
		const dataTestId = this.props.dataTestId || null
		return (
			<section className={`${CSS.wrapper} ${this.props.className || ''}`}>
				<Button
					dataTestId={dataTestId}
					id={this.props.id}
					href={this.props.href}
					onClick={this.props.onClick}
					type={this.props.type}
					loading={this.props.loading}
				>
					{this.props.children}
				</Button>
			</section>
		)
	}
}