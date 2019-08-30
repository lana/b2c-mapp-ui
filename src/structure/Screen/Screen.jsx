import { Component } from "preact"
import '../../Theme'
import TopBar from '../../navigation/TopBar'

import CSS from './Screen.css'

export default class Screen extends Component {

	state = {
		isStacked: false,
	}

	lastClick = { x: 0, y: 0 }

	viewport = {
		width: window.innerWidth,
		height: window.innerHeight
	}


	recordClick(e) {
		this.lastClick.x = e.clientX
		this.lastClick.y = e.clientY
	}

	onKeyboardFocus(screenHeight, viewport) {
		if (this.props.onKeyboardFocus) this.props.onKeyboardFocus(screenHeight, viewport, this.lastClick)
	}

	onKeyboardBlur(screenHeight, viewport) {
		if (this.props.onKeyboardFocus) this.props.onKeyboardBlur(screenHeight, viewport, this.lastClick)
	}

	onWindowResize = (e) => {
		let screenSize = e.target.innerHeight;
		(this.viewport.height > screenSize) ? this.onKeyboardFocus(screenSize, this.viewport) : this.onKeyboardBlur(screenSize, this.viewport)
	}

	componentDidMount() {
		window.addEventListener('resize', this.onWindowResize)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onWindowResize)
	}

	render() {
		let stackedClass = (this.state.isStacked) ? CSS.stacked : '';

		return (
			<section 
				className={`${CSS.screen} ${stackedClass} ${this.props.className || ''}`}
				onClick={e => this.recordClick(e)} >
				{(this.props.displayMode != 'overlay') ? <TopBar title={this.props.title} /> : ''}
				{this.props.children}
			</section>
		)
	}

}
