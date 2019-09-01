
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#303334" fill-rule="nonzero" d="M4 5.83a2.995 2.995 0 0 0 2 0V20h12V9h-5V4H7.83a2.995 2.995 0 0 0 0-2H14l6 6v12c0 1.1-.9 2-2 2H5.99C4.89 22 4 21.1 4 20V5.83zM8 16h8v2H8v-2zm0-4h8v2H8v-2zM5 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg></i>
		)
	}
}

