import { Component } from "preact"

import CSS from './ButtonWrapped.css'
import Button from '../Button'

export default class ButtonWrapped extends Component {
	render() {
		return (
			<section className={`${CSS.wrapper} ${this.props.className || ''}`}>
				<Button id={this.props.id} href={this.props.href} onClick={this.props.onClick} type={this.props.type} loading={this.props.loading}>
					{this.props.children}
				</Button>
			</section>
		)
	}
}
