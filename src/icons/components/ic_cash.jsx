
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path fill="#303334" fill-rule="nonzero" d="M20 4c1.11 0 2 .89 2 2v12c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-12c0-1.11.88-2 1.99-2h16zm0 14V6H4v12h16zm-7.847-6.733c1.514.393 3.134 1.04 3.134 2.933 0 1.367-1.034 2.12-2.334 2.367V18h-2v-1.447C9.673 16.28 8.58 15.46 8.5 14h1.467c.073.787.613 1.4 1.986 1.4 1.474 0 1.8-.733 1.8-1.193 0-.62-.333-1.207-2-1.607-1.86-.447-3.133-1.213-3.133-2.753 0-1.287 1.04-2.127 2.333-2.407V6h2v1.46c1.394.34 2.094 1.393 2.14 2.54H13.62c-.04-.833-.48-1.4-1.667-1.4-1.126 0-1.8.507-1.8 1.233 0 .634.487 1.04 2 1.434zm.8 6.733h-2 2zm-2-12h2-2z"/></g></svg></i>
		)
	}
}

