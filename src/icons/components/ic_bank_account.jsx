
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#303334" fill-rule="nonzero" d="M6.5 10v7h-2v-7h2zm6 0v7h-2v-7h2zm8.5 9v2H2v-2h19zm-2.5-9v7h-2v-7h2zm-7-9L21 6v2H2V6l9.5-5zm0 2.26L6.29 6h10.42L11.5 3.26z"/></svg></i>
		)
	}
}

