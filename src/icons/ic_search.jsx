
import { Component } from 'preact'
import CSS from './Icons.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path fill="#303334" fill-rule="nonzero" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></g></svg></i>
		)
	}
}	

		