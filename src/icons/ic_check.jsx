
import { Component } from 'preact'
import CSS from './Icons.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path fill="#303334" fill-rule="nonzero" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></g></svg></i>
		)
	}
}	

		