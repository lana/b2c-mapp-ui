import { Component } from 'preact'

import Button from '../Button'
import { ForwardIcon } from '@lana/b2c-mapp-ui-assets'
import CSS from './styles.css'

export default class Forward extends Component {
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
					<ForwardIcon color="black-100" />
					{this.props.children}
				</Button>
			</section>
		)
	}
}
