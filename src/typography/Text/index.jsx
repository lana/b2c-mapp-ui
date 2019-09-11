import '../../Theme'
import CSS from './styles.css'

export default class Text {
	render({ type, color, weight, className }) {
		const typeClass = CSS[type] || ''
		const colorClass = CSS[color] || ''
		const weightClass = CSS[weight] || ''
		return (
			<p className={`${CSS.txt} ${typeClass} ${colorClass} ${weightClass} ${className || ''}`}>
				{this.props.children}
			</p>
		)
	}
}
