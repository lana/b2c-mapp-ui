
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fill="#303334" fill-rule="nonzero"  d="m20.658 3.3756h2.9388v17.249h-2.9388zm-7.1912 0h4.3762v17.249h-4.3762zm-5.7948 0h2.9388v17.249h-2.9388zm-7.1912 0h4.3762v17.249h-4.3762z" fill="#303334"/>
				</svg>
			</i>
		)
	}
}

