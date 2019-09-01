
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#303334" fill-rule="nonzero" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 10H4V6h16v8zm0 4H4v-2h16v2zm-5-9h-2V7h2v2zm2 2h-2V9h2v2zm-2 2h-2v-2h2v2zm4-4h-2V7h2v2zm0 4h-2v-2h2v2z"/></svg></i>
		)
	}
}

