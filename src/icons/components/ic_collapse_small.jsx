
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#303334" fill-rule="nonzero" d="M13.338 12.5l1.162-1.22L8 4.5l-6.5 6.787L2.662 12.5 8 6.927z"/></svg></i>
		)
	}
}

