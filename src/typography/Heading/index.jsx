import CSS from './styles.css'
import Text from '../Text'

export default class Heading extends Text {
	render({type, weight, className, dataTestId}) {
		const typeClass = CSS[type] || ''
		const weightClass = CSS[weight] || ''
		const testId = dataTestId || 'heading'

		return (
			<h1 data-testid={testId} className={`${CSS.title} ${typeClass} ${weightClass} ${className || ''}`}>
				{this.props.children}
			</h1>
		)
	}
}
