import CSS from './styles.css'
import Text from '../Text'

export default class Heading extends Text {
	render({type, weight, className}) {
		const typeClass = CSS[type] || ''
		const weightClass = CSS[weight] || ''
		return (
			<h1 className={`${CSS.title} ${typeClass} ${weightClass} ${className || ''}`}>
				{this.props.children}
			</h1>
		)
	}
}
