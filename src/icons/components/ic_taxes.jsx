
import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = (this.props.color) ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="m13.463 1.998c-0.25375-0.00125-0.50812 0.096016-0.70312 0.29102l-6.3691 6.3711c-0.39 0.39-0.39 1.0202 0 1.4102l4.9492 4.9492c0.39 0.39 1.0202 0.39 1.4102 0l6.3594-6.3594c0.39-0.39 0.39-1.0202 0-1.4102l-4.9492-4.9492c-0.19-0.2-0.44352-0.30148-0.69726-0.30273zm-0.001953 2.4121l3.5391 3.5391-4.9492 4.9512-3.541-3.541 4.9512-4.9492zm-7.4609 8.5898l-3 3v4c0 1.1 0.89023 2 1.9902 2h14.01c1.1 0 2-0.89 2-2v-4l-3-3h-0.67969l-2 2h1.9102l1.7695 2h-14l1.7793-2h2.0508l-2-2h-0.83008zm-1 6h14v1h-14v-1z" fill="#303334"/>
				</svg>
			</i>
		)
	}
}

