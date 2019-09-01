
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#303334" d="m11.611 0.83594c-4.0896 0.0048837-7.7599 2.5361-9.2168 6.3574a1.0236 1.0236 0 0 0 0.95508 1.3887h16.531a1.0236 1.0236 0 0 0 0.95703 -1.3887c-1.4581-3.8243-5.1338-6.3561-9.2266-6.3574zm0 2.0469h2e-3c2.7047 0.00152 5.1051 1.4363 6.5234 3.6523h-13.043c1.417-2.2142 3.8152-3.6484 6.5176-3.6523zm-5.1113 7.1172v7h-2v-7zm6 0v7h-2v-7zm8.5 9v2h-19v-2zm-2.5-9v7h-2v-7z" />
                </svg>

            </i>
		)
	}
}

