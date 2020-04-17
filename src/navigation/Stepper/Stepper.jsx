import { useMemo } from 'preact/hooks';
import PropTypes from 'prop-types';
import CSS from './styles.css';
import Heading from '../../typography/Heading/Heading';

const Stepper = ({ steps, activeStep, hideActive, title, className, dataTestId }) => useMemo(() => (
	<navigation data-testid={`${dataTestId}-navigation`} className={`${CSS.stepper} ${className}`}>
		{title && <Heading type={`callout`}>{title}</Heading>}
		<ol data-testid={`${dataTestId}-list`} className={CSS.steps}>
			{[...Array(steps).keys()].map((step, idx) => {
				const activeClass = (idx === activeStep && !hideActive) ? CSS.active : '';
				const inactiveClass = (idx > activeStep) ? CSS.inactive : '';
				return (
					<li data-testid={`${dataTestId}-element`} className={`${CSS.step} ${activeClass} ${inactiveClass}`}>
						Paso {idx + 1}
					</li>
				);
			})}
		</ol>
	</navigation>
), [steps, activeStep, hideActive]);

Stepper.defaultProps = {
	className: '',
	dataTestId: 'navigation-stepper',
	title: '',
	hideActive: false,
	activeStep: 0,
};

Stepper.propTypes = {
	steps: PropTypes.number.isRequired,
	activeStep: PropTypes.number,
	hideActive: PropTypes.bool,
	title: PropTypes.string,
	className: PropTypes.string,
	dataTestId: PropTypes.string,
};

export default Stepper;