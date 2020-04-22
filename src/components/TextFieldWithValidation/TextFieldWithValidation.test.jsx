import { render, fireEvent, waitForDomChange } from '@testing-library/preact';

import TextFieldWithValidation from './TextFieldWithValidation';

describe('UI/forms/TextFieldWithValidation', () => {
    const defaultProps = {
        placeholder: 'Placeholder',
        rule: 16
    };

    it('Should NOT be empty if given value is provided', () => {
        const { getByTestId } = render(<TextFieldWithValidation {...defaultProps}/>);
        waitForDomChange(() => {
            const isEmpty = getByTestId('text-field-rule-input').textContent === '';
            expect(isEmpty).toBeTruthy();
        })
    });

    it('Should NOT be empty if given value is provided', () => {
        const { getByTestId } = render(<TextFieldWithValidation {...defaultProps} value={'Text value'}/>);
        waitForDomChange(() => {
            const isNotEmpty = getByTestId('text-field-rule-input').textContent === 'Text value';
            expect(isNotEmpty).toBeTruthy();
        })
    });

    it('Should show error label if errorlabel is given', () => {
        const { getByTestId } = render(<TextFieldWithValidation {...defaultProps} value={'Text value'} errorLabel={'error label'}/>);
        const hasError = getByTestId('text-field-rule-label').className.includes('error');
        expect(hasError).toBeTruthy();
    });

    it('Should show given rule', () => {
        const { getByTestId } = render(<TextFieldWithValidation {...defaultProps}/>);
        const isShowingRule = getByTestId('text-field-rule-rule').textContent === '16';
        expect(isShowingRule).toBeTruthy();
    });


    it('Should call given onBlur when text field is blurred', () => {
        const mockBlur = jest.fn();
        const { getByTestId } = render(<TextFieldWithValidation {...defaultProps} value={'Text value'} onBlur={mockBlur}/>);
        const input = getByTestId('text-field-rule-input');
        fireEvent.focus(input);
        fireEvent.blur(input);
        expect(mockBlur).toHaveBeenCalled();
    });

    it('Should call given onBlur, providing event as param, when text field is changed', () => {
        const mockBlur = jest.fn();
        const { getByTestId } = render(<TextFieldWithValidation {...defaultProps} value={'Text value'} onBlur={mockBlur}/>);
        const input = getByTestId('text-field-rule-input');
        fireEvent.blur(input);
        const outputEvent = new FocusEvent('blur');
        expect(mockBlur).toHaveBeenCalledWith(outputEvent);
    });

    it('Should call given onChange when text field is changed', () => {
        const mockChange = jest.fn();
        const { getByTestId } = render(<TextFieldWithValidation {...defaultProps} value={'Text value'} onChange={mockChange}/>);
        const input = getByTestId('text-field-rule-input');
        fireEvent.focus(input);
        fireEvent.change(input, {target: {value: 'new Value'}});
        fireEvent.blur(input);
        expect(mockChange).toHaveBeenCalled();
    });

    it('Should call given onChange, providing new value as param, when text field is changed', () => {
        const mockChange = jest.fn();
        const { getByTestId } = render(<TextFieldWithValidation {...defaultProps} value={'Text value'} onChange={mockChange}/>);
        const input = getByTestId('text-field-rule-input');
        fireEvent.focus(input);
        fireEvent.change(input, {target: {value: 'new Value'}});
        fireEvent.blur(input);
        expect(mockChange).toHaveBeenCalledWith('new Value');
    });
});
