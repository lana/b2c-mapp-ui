import { Component } from 'preact';

import '../../Theme/Theme';
import CSS from './styles.css';

const Screen = (props) => {
	const [lastClick, setLastClick] = useState({x:0, y:0})
	const viewport = { width: 0, height: 0};

	useEffect(() => {
		viewport.width = window.innerWidth;
		viewport.height = window.innerHeight;
		window.addEventListener('resize', handleOnWindowResize);
		return () => {
			window.removeEventListener('resize', handleOnWindowResize);
		};
	}, []);

	const recordClick = (event) => {
		setLastClick({x: event.clientX, y: event.clientY});
	};

	const handleOnKeyboardFocus = (screenHeight, viewport) => {
		if (props.onKeyboardFocus) { props.onKeyboardFocus(screenHeight, viewport, lastClick) };
	};

	const handleOnKeyboardBlur = (screenHeight, viewport) => {
		if (props.onKeyboardFocus) { props.onKeyboardBlur(screenHeight, viewport, lastClick); }
	};

	const handleOnWindowResize = event => {
		const {target: { innerHeight: screenSize }} = event;
		viewport.height > (screenSize) ? handleOnKeyboardFocus(screenSize, viewport) : handleOnKeyboardBlur(screenSize, viewport);
	};

	return  (<section className={`${CSS.screen} ${props.className || ''}`} onClick={recordClick}>
				{props.children}
			</section>);
}

export default Screen;
