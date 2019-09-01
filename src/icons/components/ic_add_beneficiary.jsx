import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path
						fill="#303334"
						fill-rule="nonzero"
						d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c2.67 0 8 1.34 8 4v2H7v-2c0-2.66 5.33-4 8-4zm-6 4h12c-.2-.71-3.3-2-6-2-2.69 0-5.78 1.28-6 2zm-3-3H4v-3H1v-2h3V7h2v3h3v2H6v3z"
					/>
				</svg>
			</i>
		)
	}
}
