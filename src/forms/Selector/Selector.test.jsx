import { render, fireEvent } from '@testing-library/preact';

import Selector from './Selector';

describe('UI/forms/Selector', () => {
	const defaultProps = {
		options: [
			{ selected: true, label: 'Option 1', value: 'option_1' },
			{ selected: false, label: 'Option 2', value: 'option_2' },
		],
		label: 'Label',
	};

	it('Should not be focused initially', () => {
		const { getByTestId } = render(<Selector {...defaultProps} />);
		const isNotFocused = !getByTestId('selector-label').className.includes('focus');
		expect(isNotFocused).toBeTruthy();
	});

	it('Should apply focus class if is focused', () => {
		const { getByTestId } = render(<Selector {...defaultProps} />);
		const select = getByTestId('selector-select');
		fireEvent.focus(select);
		const isFocused = getByTestId('selector-label').className.includes('focus');
		expect(isFocused).toBeTruthy();
	});

	it('Should remove focus class when is blurred', () => {
		const { getByTestId } = render(<Selector {...defaultProps} />);
		const select = getByTestId('selector-select');
		fireEvent.focus(select);
		fireEvent.blur(select);
		const isNotFocused = !getByTestId('selector-label').className.includes('focus');
		expect(isNotFocused).toBeTruthy();
	});

	it('Should select given selected option in options if theres no given value', () => {
		const { queryAllByTestId } = render(<Selector {...defaultProps} />);
		const options = queryAllByTestId('selector-option');
		const firstOptionIsSelected = options[0].getAttribute('data-selected');
		const secondOptionIsNotSelected = !options[1].getAttribute('data-selected');
		const rightOptionSelected = firstOptionIsSelected && secondOptionIsNotSelected;
		expect(rightOptionSelected).toBeTruthy();
	});

	it('Should select option based on given value', () => {
		const { queryAllByTestId, getByTestId } = render(<Selector {...defaultProps} value="option_2" />);
		const options = queryAllByTestId('selector-option');
		const selector = getByTestId('selector-select');
		fireEvent.focus(selector);
		const firstOptionIsNotSelected = !options[0].getAttribute('data-selected');
		const secondOptionIsSelected = options[1].getAttribute('data-selected');
		const rightOptionSelected = firstOptionIsNotSelected && secondOptionIsSelected;
		expect(rightOptionSelected).toBeTruthy();
	});

	it('Should NOT select option based on wrong given value', () => {
		const { queryAllByTestId, getByTestId } = render(<Selector {...defaultProps} value="wrong" />);
		const options = queryAllByTestId('selector-option');
		const selector = getByTestId('selector-select');
		fireEvent.focus(selector);
		const firstOptionIsNotSelected = !options[0].getAttribute('data-selected');
		const secondOptionIsNotSelected = !options[1].getAttribute('data-selected');
		const rightOptionSelected = firstOptionIsNotSelected && secondOptionIsNotSelected;
		expect(rightOptionSelected).toBeTruthy();
	});

	it('Should not call given onChange if same option is clicked', () => {
		const mockChange = jest.fn();
		const { queryAllByTestId } = render(<Selector {...defaultProps} onChange={mockChange} />);
		const option = queryAllByTestId('selector-option')[0];
		fireEvent.click(option);
		expect(mockChange).not.toHaveBeenCalled();
	});

	it('Should call given onChange if option is clicked', () => {
		const mockChange = jest.fn();
		const { queryAllByTestId } = render(<Selector {...defaultProps} onChange={mockChange} />);
		const option = queryAllByTestId('selector-option')[1];
		fireEvent.click(option);
		expect(mockChange).toHaveBeenCalled();
	});

	it('Should call given onChange if option is clicked with new value as param', () => {
		const mockChange = jest.fn();
		const { queryAllByTestId } = render(<Selector {...defaultProps} onChange={mockChange} />);
		const option = queryAllByTestId('selector-option')[1];
		fireEvent.click(option);
		expect(mockChange).toHaveBeenCalledWith('option_2');
	});
});
