import '../../Theme/Theme'
import CSS from './styles.css'

export default class Text {
	render({ type, color, weight, className, dataTestId }) {
		const typeClass = CSS[type] || ''
		const colorClass = CSS[color] || ''
		const weightClass = CSS[weight] || ''
		const testId = dataTestId || 'text'

		return (
			<p
				data-testid={testId}
				className={`${CSS.txt} ${typeClass} ${colorClass} ${weightClass} ${className || ''}`}
			>
				{this.props.children}
			</p>
		)
	}
}
