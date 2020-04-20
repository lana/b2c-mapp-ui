import { Component } from 'preact';

import '../../Theme/Theme';
import CSS from './styles.css';

// TODO: Refactor this component from class to functional.
// Warning: Refactoring this component to a functional one, breaks some stuffs like timeouts in CopyToClipBoardButton
// The updates of the states are not being triggered somehow due to move this component to a functional one. (Needs investigation) 
export default class Screen extends Component {
	lastClick = { x: 0, y: 0 };

	viewport = {
		width: window.innerWidth,
		height: window.innerHeight,
	};

	recordClick({clientX, clientY}) {
		this.lastClick.x = clientX;
		this.lastClick.y = clientY;
	}

	onKeyboardFocus(screenHeight, viewport) {
		if (this.props.onKeyboardFocus) this.props.onKeyboardFocus(screenHeight, viewport, this.lastClick);
	}

	onKeyboardBlur(screenHeight, viewport) {
		if (this.props.onKeyboardFocus) this.props.onKeyboardBlur(screenHeight, viewport, this.lastClick);
	}

	onWindowResize = ({target: { innerHeight }}) => {
		this.viewport.height > innerHeight ? this.onKeyboardFocus(innerHeight, this.viewport) : this.onKeyboardBlur(innerHeight, this.viewport);
	};

	componentDidMount() {
		window.addEventListener('resize', this.onWindowResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onWindowResize);
	}

	render() {
		const result = (<section className={`${CSS.screen} ${this.props.className || ''}`} onClick={this.recordClick}>
			{this.props.children}
		</section>);

		return result;
	}
}
