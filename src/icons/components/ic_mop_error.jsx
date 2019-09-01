
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path fill="#C23490" fill-rule="evenodd" d="M20 38a6.896 6.896 0 0 1-6.004-3.505 6.894 6.894 0 0 1-8.49-8.491 6.893 6.893 0 0 1 0-12.008 6.891 6.891 0 0 1 8.49-8.49 6.895 6.895 0 0 1 12.008 0 6.891 6.891 0 0 1 8.49 8.49 6.895 6.895 0 0 1 0 12.008 6.895 6.895 0 0 1-8.49 8.49A6.895 6.895 0 0 1 20 38zm7-23.59L25.59 13 20 18.59 14.41 13 13 14.41 18.59 20 13 25.59 14.41 27 20 21.41 25.59 27 27 25.59 21.41 20 27 14.41z"/></svg></i>
		)
	}
}

