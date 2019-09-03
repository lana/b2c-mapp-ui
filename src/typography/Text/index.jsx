import '../../Theme'
import CSS from './styles.css'

export default class Text {
	render({ type, color, className }) {
		let typeClass = type ? CSS[type] : ''
		let colorClass = color ? CSS[color] : ''
		return (
			<p className={`${CSS.text} ${typeClass} ${colorClass} ${className || ''}`}>
				{this.props.children}
			</p>
		)
	}
}
