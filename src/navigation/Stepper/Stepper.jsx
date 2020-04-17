import CSS from './styles.css';
import Heading from '../../typography/Heading/Heading';

export default ({ steps, activeStep, hideActive, title, className, dataTestId }) => {
	const testId = dataTestId || 'navigation-stepper';

	return (
		<navigation data-testid={`${testId}-navigation`} className={`${CSS.stepper} ${className}`}>
			{title && <Heading type={`callout`}>{title}</Heading>}
			<ol data-testid={`${testId}-list`} className={CSS.steps}>
				{[...Array(steps).keys()].map((step, idx) => {
					let activeClass = idx === activeStep && !hideActive ? CSS.active : '';
					let inactiveClass = idx > activeStep ? CSS.inactive : '';
					let index = idx + 1;
					return (
						<li data-testid={`${testId}-element`} className={`${CSS.step} ${activeClass} ${inactiveClass}`}>
							Paso {index}
						</li>
					);
				})}
			</ol>
		</navigation>
	);
};
