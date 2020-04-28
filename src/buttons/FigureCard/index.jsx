import CSS from './styles.css'
import PropTypes from 'prop-types'
import Text from '../../typography/Text'

export default function FigureCard ({ dataTestId, size, className, meta, imageSrc, title }) {
	const backgroundStyle = {
		backgroundImage: `url('${imageSrc}')`,
	}

	return (
			<figure className={`${CSS.FigureCard} ${className} ${(size && CSS[size]) || ''}`}>
				<div data-testid={`${dataTestId}-image`} style={backgroundStyle} />
				<figcaption>
					<Text dataTestId={`${dataTestId}-title`} type="txt-small">{title}</Text>
					{meta && <Text dataTestId={`${dataTestId}-meta`} type="txt-xsmall">{meta}</Text>}
				</figcaption>
			</figure>
	)
}

FigureCard.defaultProps = {
	dataTestId: 'figure-card',
	size: '',
	className: '',
	meta: '',
	title: '',
	imageSrc: ''
}

FigureCard.propTypes = {
	dataTestId: PropTypes.string,
	size: PropTypes.string,
	className: PropTypes.string,
	meta: PropTypes.string,
	title: PropTypes.string,
	imageSrc: PropTypes.string,
}