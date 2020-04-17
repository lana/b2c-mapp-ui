import { render, fireEvent } from '@testing-library/preact';

import Toggle from './Toggle';

describe('UI/forms/Toggle', () => {

    const defaultProps = {
        onChange: () => {}
    };

    it('Should be checked if given checked prop is set to true', () => {
        const {getByTestId} = render(<Toggle {...defaultProps} checked />);
        const inputIsChecked = getByTestId('toggle-wrapper').className.includes('checked');
        expect(inputIsChecked).toBeTruthy();
    });

    it('Should be unchecked if given checked prop is set to true', () => {
        const {getByTestId} = render(<Toggle {...defaultProps} checked={false} />);
        const inputIsNotChecked = !getByTestId('toggle-wrapper').className.includes('checked');
        expect(inputIsNotChecked).toBeTruthy();
    });

    it('Should be unchecked by default if no checked prop is given', () => {
        const {getByTestId} = render(<Toggle {...defaultProps} />);
        const inputIsNotChecked = !getByTestId('toggle-wrapper').className.includes('checked');
        expect(inputIsNotChecked).toBeTruthy();
    });

    it('Should call given onChange when is clicked', () => {
        const mockChange = jest.fn();
        const { getByTestId } = render(<Toggle {...defaultProps} onChange={mockChange}/>);
        const input = getByTestId('toggle-input');
        fireEvent.click(input);
        expect(mockChange).toHaveBeenCalled();
    });

    it('Should call given onChange when is changed', () => {
        const mockChange = jest.fn();
        const { getByTestId } = render(<Toggle {...defaultProps} onChange={mockChange} />);
        const input = getByTestId('toggle-input');
        fireEvent.change(input);
        expect(mockChange).toHaveBeenCalled();
    });

    it('Should call given onChange with event as param', () => {
        const mockChange = jest.fn();
        const { getByTestId } = render(<Toggle {...defaultProps} onChange={mockChange} />);
        const input = getByTestId('toggle-input');
        fireEvent.change(input);
        const event = new Event('change');
        expect(mockChange).toHaveBeenCalledWith(event);
    });
})