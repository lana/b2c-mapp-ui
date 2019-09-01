
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#303334" fill-rule="nonzero" d="M13.338 4.5L14.5 5.72 8 12.5 1.5 5.713 2.662 4.5 8 10.073z"/></svg></i>
		)
	}
}

