
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path fill="#84D20F" fill-rule="evenodd" d="M20 38a6.896 6.896 0 0 1-6.004-3.505 6.894 6.894 0 0 1-8.49-8.491 6.893 6.893 0 0 1 0-12.008 6.891 6.891 0 0 1 8.49-8.49 6.895 6.895 0 0 1 12.008 0 6.891 6.891 0 0 1 8.49 8.49 6.895 6.895 0 0 1 0 12.008 6.895 6.895 0 0 1-8.49 8.49A6.895 6.895 0 0 1 20 38zm-2.41-14.42l-4.17-4.17L12 20.82l5.59 5.59 11-11L27.18 14l-9.59 9.58z"/></svg></i>
		)
	}
}

