import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path
						fill="#303334"
						fill-rule="nonzero"
						d="M8.464 2.129c3.409-1.216 7.305-.63 10.218 1.775l1.06-1.061c-4.716-3.995-11.78-3.776-16.227.672l-.446.488h5.388l.007-1.874zM3.501 6.004A1.49 1.49 0 0 0 2 7.503v8.994a1.49 1.49 0 0 0 1.5 1.5h16.998a1.49 1.49 0 0 0 1.5-1.5V7.503a1.49 1.49 0 0 0-1.5-1.5H3.501zm16.998 10.493H3.501V7.503h16.998v8.994zm-4.963 5.374a10.487 10.487 0 0 1-10.218-1.775l-1.06 1.061c4.716 3.995 11.78 3.776 16.227-.672l.446-.488h-5.388l-.007 1.874z"
					/>
				</svg>
			</i>
		)
	}
}
