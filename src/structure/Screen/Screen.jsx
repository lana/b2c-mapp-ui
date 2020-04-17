import { Component } from 'preact';

import '../../Theme/Theme';
import CSS from './styles.css';

export default class Screen extends Component {
	lastClick = { x: 0, y: 0 };

	viewport = {
		width: window.innerWidth,
		height: window.innerHeight,
	};

	recordClick(event) {
		this.lastClick.x = event.clientX;
		this.lastClick.y = event.clientY;
	}

	onKeyboardFocus(screenHeight, viewport) {
		if (this.props.onKeyboardFocus) this.props.onKeyboardFocus(screenHeight, viewport, this.lastClick);
	}

	onKeyboardBlur(screenHeight, viewport) {
		if (this.props.onKeyboardFocus) this.props.onKeyboardBlur(screenHeight, viewport, this.lastClick);
	}

	onWindowResize = event => {
		let screenSize = event.target.innerHeight;
		this.viewport.height > screenSize ? this.onKeyboardFocus(screenSize, this.viewport) : this.onKeyboardBlur(screenSize, this.viewport);
	};

	componentDidMount() {
		window.addEventListener('resize', this.onWindowResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onWindowResize);
	}

	render() {
		return (
			<section className={`${CSS.screen} ${this.props.className || ''}`} onClick={this.recordClick}>
				{this.props.children}
			</section>
		);
	}
}
