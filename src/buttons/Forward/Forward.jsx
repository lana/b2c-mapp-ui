import { Component } from 'preact'

import Button from '../Button'
import { ForwardIcon } from '../../Icons'
import CSS from './Forward.css'

export default class Forward extends Component {
	render() {
		return (
			<section className={`${CSS.wrapper} ${this.props.className || ''}`}>
				<Button
					id={this.props.id}
					href={this.props.href}
					onClick={this.props.onClick}
					type={this.props.type}
					loading={this.props.loading}
				>
					<ForwardIcon color="white" />
					{this.props.children}
				</Button>
			</section>
		)
	}
}
