import { Component } from 'preact'

import Button from '../Button'
import { ForwardIcon } from '@lana/b2c-mapp-ui-assets'
import CSS from './styles.css'

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
