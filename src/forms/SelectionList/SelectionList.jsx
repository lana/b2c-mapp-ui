import { useState, useEffect, useMemo } from 'preact/hooks';
import PropTypes from 'prop-types';

import Heading from '../../typography/Heading/Heading';
import CSS from './styles.css';

const SelectionList = ({ className, dataTestId, value, title, options, id, onChange }) => {
	const [currentValue, setCurrentValue] = useState(null);
	const callbackDelayInMilliseconds = 250;

	useEffect(() => {
		if (value) {
			setCurrentValue(value);
			return;
		}
		const defaultCheckedOptionIndex = options.findIndex(({ selected }) => selected);
		setCurrentValue(defaultCheckedOptionIndex !== -1 ? options[defaultCheckedOptionIndex].value : null);
	}, [value, options]);

	const handleOnClick = ({ selected, label, value: optionValue, children, onClick }, index) => {
		if (onClick) {
			setTimeout(() => { onClick(optionValue, index); } , callbackDelayInMilliseconds);
		}
		if (currentValue !== optionValue && onChange) {
			setTimeout(() => { onChange(optionValue, index); }, callbackDelayInMilliseconds);
		}
		setCurrentValue(optionValue);
	};

	const result = useMemo(() => {
		return (
			<section className={`${CSS.wrapper} ${className}`}>
				{title && (
					<Heading className={CSS.title} type="callout">
						{title}
					</Heading>
				)}

				<ul data-testid={`${dataTestId}-select`}>
					{options.map(({ selected, label, value: optionValue, children, onClick}, index) => {
						const elementId = `${id}-${index}`;
						const checked = currentValue === optionValue ? true : false;
						return (
							<li 
								data-testid={`${dataTestId}-option`} 
								key={index} 
								data-checked={checked} 
								className={`${CSS.item} ${checked ? CSS.checked : ''}`} 
								onClick={event => { handleOnClick({ selected, label, value: optionValue, children, onClick }, index); }}
							>
								<input 
									type="radio" 
									className={CSS.radio} 
									id={elementId} 
									checked={checked} 
									name={elementId} 
									value={optionValue} 
								/>

								<div className={CSS.content}>
									{(label) ? (
										<label 
											data-testid={`${dataTestId}-option-label`} 
											className={CSS.label} 
											htmlFor={elementId}
										>
											{label}
										</label>
									) : children ? (
										children
									) : null}
								</div>
							</li>
						);
					})}
				</ul>
			</section>
		);
	}, [options, value, currentValue]);

	return result;
};

SelectionList.propTypes = {
	className: PropTypes.string,
	dataTestId: PropTypes.string,
	value: PropTypes.string,
	title: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			selected: PropTypes.bool,
			label: PropTypes.string,
			value: PropTypes.string,
			children: PropTypes.node,
			onClick: PropTypes.func,
		}).isRequired,
	).isRequired,
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func,
};

SelectionList.defaultProps = {
	className: '',
	dataTestId: 'selection-list',
	value: '',
	onChange: null,
};

export default SelectionList;
