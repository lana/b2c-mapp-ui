
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#303334" fill-rule="nonzero" d="M19 6h-1V4h1a2 2 0 0 1 2 2v12c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v2H5v12h14V6zM8 7l1 1 2-2v8h2V6l2 2 1-1-4-4-4 4z"/></svg></i>
		)
	}
}

