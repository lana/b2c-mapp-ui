
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#303334" fill-rule="nonzero" d="M5.84 3.87L7.62 2.1l9.89 9.9-9.9 9.9-1.77-1.77L13.97 12z"/></svg></i>
		)
	}
}

