
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#303334" fill-rule="nonzero" d="M21.871 8.464c1.216 3.409.63 7.305-1.775 10.218l1.061 1.06c3.995-4.716 3.776-11.78-.672-16.227l-.488-.446v5.388l1.874.007zm-3.875-4.963A1.49 1.49 0 0 0 16.497 2H7.503a1.49 1.49 0 0 0-1.5 1.5v16.998a1.49 1.49 0 0 0 1.5 1.5h8.994a1.49 1.49 0 0 0 1.5-1.5V3.501zM7.503 20.499V3.501h8.994v16.998H7.503zm-5.374-4.963A10.487 10.487 0 0 1 3.904 5.318l-1.061-1.06c-3.995 4.716-3.776 11.78.672 16.227l.488.446v-5.388l-1.874-.007z"/></svg></i>
		)
	}
}

