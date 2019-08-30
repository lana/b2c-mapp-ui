import CSS from './Stepper.css'
import Heading from '../../typography/Heading'

export default ({ steps, activeStep, hideActive, title, className }) => (
	<navigation className={`${CSS.stepper} ${className}`}>
		{title && <Heading type={`callout`}>{title}</Heading>}
		<ol className={CSS.steps}>
			{
				[...Array(steps).keys()].map((step, idx) => {
					let activeClass = (idx === activeStep && !hideActive) ? CSS.active : '';
					let inactiveClass = (idx > activeStep) ? CSS.inactive : '';
					let index = idx + 1
					return <li className={`${CSS.step} ${activeClass} ${inactiveClass}`}>Paso {index}</li>
				})
			}
		</ol>
	</navigation>
)
