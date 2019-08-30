import CSS from './Heading.css'
import Text from '../Text'

export default class Heading extends Text {
	render() {
		let type = CSS[this.props.type] || ''
		return (
			<h1 className={`${CSS.headline} ${type} ${this.props.className || ''}`}>
				{this.props.children}
			</h1>
		)
	}
}
