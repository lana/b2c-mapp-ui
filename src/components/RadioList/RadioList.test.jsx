import { render, fireEvent } from '@testing-library/preact';

import RadioList from './RadioList';

jest.useFakeTimers();

describe('UI/forms/RadioList', () => {
	const defaultProps = {
		options: [
			{ selected: true, label: 'Option 1', value: 'option_1' },
			{ value: 'option_2', children: <span data-testid="option-children">Ok</span> },
		],
		id: 'selId',
		title: 'Title',
	};

	it('Should apply selected given option initially as selected if theres no given value', () => {
		const { queryAllByTestId } = render(<RadioList {...defaultProps} />);
		const selectedOptions = queryAllByTestId('selection-list-option');
		const firstOptionIsSelectedByDefault = selectedOptions[0].getAttribute('data-checked');
		expect(firstOptionIsSelectedByDefault).toBeTruthy();
	});

	it('Should NOT apply selected given option initially as selected if theres a given value', () => {
		const { queryAllByTestId } = render(<RadioList {...defaultProps} value={'option_2'} />);
		const selectedOptions = queryAllByTestId('selection-list-option');
		const firstOptionIsNotSelectedByDefault = !selectedOptions[0].getAttribute('data-checked');
		expect(firstOptionIsNotSelectedByDefault).toBeTruthy();
	});

	it('Should apply selected option based on given value', () => {
		const { queryAllByTestId } = render(<RadioList {...defaultProps} value={'option_2'} />);
		const selectedOptions = queryAllByTestId('selection-list-option');
		const secondOptionIsSelected = selectedOptions[1].getAttribute('data-checked');
		expect(secondOptionIsSelected).toBeTruthy();
	});

	it('Should NOT apply selected option based on wrong given value', () => {
		const { queryAllByTestId } = render(<RadioList {...defaultProps} value={'option_x'} />);
		const selectedOptions = queryAllByTestId('selection-list-option');
		const firstOptionIsNotSelected = !selectedOptions[0].getAttribute('data-checked');
		const secondOptionIsNotSelected = !selectedOptions[1].getAttribute('data-checked');
		const optionsAreNotSelected = firstOptionIsNotSelected && secondOptionIsNotSelected;
		expect(optionsAreNotSelected).toBeTruthy();
	});

	it('Should apply selected value after click on different option', () => {
		const { queryAllByTestId } = render(<RadioList {...defaultProps} value={'option_2'} />);
		const selectedOptions = queryAllByTestId('selection-list-option');
		const firstOption = selectedOptions[0];
		fireEvent.click(firstOption);
		jest.runAllTimers();
		const firstOptionIsSelected = firstOption.getAttribute('data-checked');
		const secondOptionIsNotSelected = !selectedOptions[1].getAttribute('data-checked');
		const differentOptionWasSelected = firstOptionIsSelected && secondOptionIsNotSelected;
		expect(differentOptionWasSelected).toBeTruthy();
	});

	it('Should call onChange given method when different option is clicked', () => {
		const mockChange = jest.fn();
		const { queryAllByTestId } = render(<RadioList {...defaultProps} onChange={mockChange} />);
		const option = queryAllByTestId('selection-list-option')[1];
		fireEvent.click(option);
		jest.runAllTimers();
		expect(mockChange).toHaveBeenCalled();
	});

	it('Should NOT call onChange given method when current selected option is clicked', () => {
		const mockChange = jest.fn();
		const { queryAllByTestId } = render(<RadioList {...defaultProps} onChange={mockChange} />);
		const option = queryAllByTestId('selection-list-option')[0];
		fireEvent.click(option);
		jest.runAllTimers();
		expect(mockChange).not.toHaveBeenCalled();
	});

	it('Should call onclick given method when option is clicked', () => {
		const optionClickMock = jest.fn();
		const withOnClickOptionProps = {
			...defaultProps,
			options: [...defaultProps.options, { label: 'Option 3', value: 'option_3', onClick: optionClickMock }],
		};
		const { queryAllByTestId } = render(<RadioList {...withOnClickOptionProps} />);
		const option = queryAllByTestId('selection-list-option')[2];
		fireEvent.click(option);
		jest.runAllTimers();
		expect(optionClickMock).toHaveBeenCalled();
	});

	it('Should show label if is given', () => {
		const { queryAllByTestId } = render(<RadioList {...defaultProps} value={'option_2'} />);
		const labels = queryAllByTestId('selection-list-option-label');
		const isShowingGivenLabel = labels.length === 1;
		expect(isShowingGivenLabel).toBeTruthy();
	});

	it('Should not show children if no label is given', () => {
		const { queryAllByTestId } = render(<RadioList {...defaultProps} value={'option_2'} />);
		const children = queryAllByTestId('option-children');
		const isShowingGivenChildren = children.length === 1;
		expect(isShowingGivenChildren).toBeTruthy();
	});
});
