
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#303334" fill-rule="nonzero" d="M19 3c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-.14 0-.27-.01-.4-.03a2.008 2.008 0 0 1-1.44-1.19c-.1-.24-.16-.51-.16-.78V5c0-.28.06-.54.16-.77A2.008 2.008 0 0 1 4.6 3.04c.13-.03.26-.04.4-.04h4.18C9.6 1.84 10.7 1 12 1c1.3 0 2.4.84 2.82 2H19zm-7-.25c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zM19 19V5H5v14h14zM7 15h7v2H7v-2zm0-4h10v2H7v-2zm0-4h10v2H7V7z"/></svg></i>
		)
	}
}

