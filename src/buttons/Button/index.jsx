import PropTypes from 'prop-types'
import { useState } from 'preact/hooks'
import CSS from './styles.css'
import { MopIcon } from '@lana/b2c-mapp-ui-assets'

const Button = ({ children, className, dataTestId, href, id, loading, type, onClick }) => {
	const [isPressed, setIsPressed] = useState(false)

	const onHandleClick = e => {
		if (onClick) onClick(e)
		if (isPressed) setIsPressed(!isPressed)
		e.preventDefault()
	}

	const typeClass =
		type === 'secondary' || type === 'disabled' || type === 'dismiss' ? CSS[type] : ''
	const loadingClass = loading ? CSS.loading : ''
	const pressedClass = isPressed ? CSS.pressed : ''
	const isButton = !href
	const defaultTestId = isButton ? 'button' : 'button-link'
	const testId = dataTestId || defaultTestId

	if (isButton) {
		return (
			<button
				data-testid={`${testId}-button`}
				type="button"
				id={id}
				onTouchStart={() => setIsPressed(!isPressed)}
				onTouchEnd={() => setIsPressed(!isPressed)}
				onClick={e => onHandleClick(e)}
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
		)
	} else {
		return (
			<a
				data-testid={testId}
				href={href}
				id={id}
				onClick={e => onHandleClick(e)}
				onTouchStart={() => setIsPressed(!isPressed)}
				onTouchEnd={() => setIsPressed(!isPressed)}
				className={`${CSS.button} ${typeClass} ${loadingClass} ${className || ''}`}
			>
				{children}
			</a>
		)
	}
}

Button.defaultProps = {
	dataTestId: null,
	href: null,
	id: null,
	loading: false,
	className: null,
	type: null,
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	dataTestId: PropTypes.string,
	href: PropTypes.string,
	id: PropTypes.string,
	loading: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	type: PropTypes.string,
}

export default Button
