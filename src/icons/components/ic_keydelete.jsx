
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z"/><path fill="#303334" fill-rule="nonzero" d="M11.759 8.952c.212-.48 1.096-.952 1.93-.952h16.414C31.673 8.014 33 9.286 33 10.857v14.286c0 1.571-1.326 2.843-2.897 2.857H13.69c-.835 0-1.72-.471-1.931-.952L5 18.476l6.759-9.524zM26 14l-3 3-3-3-1 1 3 3-3 3 1 1 3-3 3 3 1-1-3-3 3-3-1-1z"/></g></svg></i>
		)
	}
}

