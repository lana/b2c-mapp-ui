
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#303334" fill-rule="nonzero" d="M4.56 2.58L5.747 1.4 12.34 8l-6.6 6.6-1.18-1.18L9.98 8z"/></svg></i>
		)
	}
}

