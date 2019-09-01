
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#303334" fill-rule="nonzero" d="M17.877 11l-1.319 2.28L14.297 11h3.58zm0-8l-3.838 7.74-6.08-6.13V3h9.918zm-13.479.86L20 19.59 18.602 21l-4.117-4.15-3.55 6.15v-9H7.959v-3.73L3 5.27l1.398-1.41z"/></svg></i>
		)
	}
}

