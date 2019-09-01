
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#303334" fill-rule="nonzero"><path d="M5 2v2h4.59L3 10.59 4.41 12 11 5.41V10h2V2zM19 22v-2h-4.59L21 13.41 19.59 12 13 18.59V14h-2v8z"/></g></svg></i>
		)
	}
}

