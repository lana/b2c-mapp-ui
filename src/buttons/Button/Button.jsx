import PropTypes from 'prop-types';
import { useState } from 'preact/hooks';

import { MopIcon } from '@lana/b2c-mapp-ui-assets';
import CSS from './styles.css';

const validTypes = ['secondary', 'disabled', 'dismiss'];

const Button = ({ children, className, dataTestId, href, id, loading, type, onClick }) => {
	const [isPressed, setIsPressed] = useState(false);

	const onHandleClick = event => {
		if (onClick) {
			onClick(event);
		}
		if (isPressed) {
			setIsPressed(!isPressed);
		}
		event.preventDefault();
	};

	const changePressedStatus = () => setIsPressed(!isPressed);
	const typeClass = validTypes.includes(type) ? CSS[type] : '';
	const loadingClass = loading ? CSS.loading : '';
	const pressedClass = isPressed ? CSS.pressed : '';
	const isButton = !href;
	const defaultTestId = isButton ? 'button' : 'button-link';
	const testId = dataTestId || defaultTestId;

	if (isButton) {
		return (
			<button 
				data-testid={`${testId}-button`} 
				type="button" id={id} 
				onTouchStart={changePressedStatus} 
				onTouchEnd={changePressedStatus} 
				onClick={onHandleClick} 
				className={`${CSS.button} ${typeClass} ${loadingClass} ${pressedClass} ${className || ''}`}
			>
				{loading ? (
					<em data-testid={`${testId}-loading`} className={CSS.loadingWrapper}>
						<MopIcon className={CSS.loadingIcon} />
						...
					</em>
				) : (
					<span data-testid={`${testId}-children`} className={CSS.defaultWrapper}>
						{children}
					</span>
				)}
			</button>
		);
	}
	return (
		<a data-testid={testId} 
			href={href} 
			id={id} 
			onClick={onHandleClick} 
			onTouchStart={changePressedStatus} 
			onTouchEnd={changePressedStatus} 
			className={`${CSS.button} ${typeClass} ${loadingClass} ${className || ''}`}
		>
			{children}
		</a>
	);
};

Button.defaultProps = {
	dataTestId: null,
	href: null,
	id: null,
	loading: false,
	className: null,
	type: null,
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	dataTestId: PropTypes.string,
	href: PropTypes.string,
	id: PropTypes.string,
	loading: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	type: PropTypes.string,
};

export default Button;
