import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<g fill="none" fill-rule="evenodd">
						<path d="M0 0h24v24H0z" />
						<path fill="#303334" fill-rule="nonzero" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
					</g>
				</svg>
			</i>
		)
	}
}
