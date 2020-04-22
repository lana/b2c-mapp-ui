import {render, fireEvent, waitForDomChange} from '@testing-library/preact';

import PhoneNumberInputField from './PhoneNumberInputField';

describe('UI/forms/PhoneNumberInputField', () => {
    const defaultProps = {
        placeholder: 'placeholder',
        countryCode: 'MX'
    }

    it('Should not show error label if given value is empty', () => {
        const {getByTestId} = render(<PhoneNumberInputField  {...defaultProps} />);
        const noErrorLabel = !getByTestId('phone-field-label').className.includes('error');
        expect(noErrorLabel).toBeTruthy();
    })

    it('Should not show error label if given value is valid', () => {
        const {getByTestId} = render(<PhoneNumberInputField  {...defaultProps} value='5512341234'/>);
        const noErrorLabel = !getByTestId('phone-field-label').className.includes('error');
        expect(noErrorLabel).toBeTruthy();
    });

    it('Should show error label if given value is NOT valid', () => {
        const {getByTestId} = render(<PhoneNumberInputField  {...defaultProps} errorLabel={'Error!'} value='551234123234324'/>);
        const errorLabel = getByTestId('phone-field-label').className.includes('error');
        expect(errorLabel).toBeTruthy();
    });

    it('Should show given errorLabel text content if given value is NOT valid', () => {
        const {getByTestId} = render(<PhoneNumberInputField  {...defaultProps} errorLabel={'Error!'} value='551234123234324'/>);
        waitForDomChange(() => {
            const errorLabel = getByTestId('phone-field-label').textContent === 'Error!';
            expect(errorLabel).toBeTruthy();
        });
    });

    it('Should show country code if showCountryCode is given', () => {
        const {getByTestId} = render(<PhoneNumberInputField  {...defaultProps} showCountryCode value='551234123234324'/>);
        const prefixIsShown = getByTestId('phone-field-prefix').textContent === '+52';
        expect(prefixIsShown).toBeTruthy();
    });

    it('Should NOT show country code if given showCountryCode is false', () => {
        const {queryAllByTestId} = render(<PhoneNumberInputField  {...defaultProps} showCountryCode={false} value='551234123234324'/>);
        const prefixIsNotShown = !queryAllByTestId('phone-field-prefix').length;
        expect(prefixIsNotShown).toBeTruthy();
    });

    it('Should NOT call onChange when value changes and no onChange is given', () => {
        const mockChange = jest.fn();
        const {getByTestId} = render(<PhoneNumberInputField  {...defaultProps} errorLabel={'Error!'} value='55 1234 1234'/>);
        const phoneInput = getByTestId('phone-field-input');
        phoneInput.setAttribute('value', '55 1234 1233');
        fireEvent.focus(phoneInput);
        fireEvent.change(phoneInput, {target: {value: '55 1234 1233'}});
        fireEvent.blur(phoneInput);
        expect(mockChange).not.toHaveBeenCalled();
    });
    it('Should call given onChange when value changes', () => {
        const mockChange = jest.fn();
        const {getByTestId} = render(<PhoneNumberInputField  {...defaultProps} errorLabel={'Error!'} value='55 1234 1234' onChange={mockChange}/>);
        const phoneInput = getByTestId('phone-field-input');
        phoneInput.setAttribute('value', '55 1234 1233');
        fireEvent.focus(phoneInput);
        fireEvent.change(phoneInput, {target: {value: '55 1234 1233'}});
        fireEvent.blur(phoneInput);
        expect(mockChange).toHaveBeenCalled();
    });

    it('Should send phone value as params in given onChange event', () => {
        const mockChange = jest.fn();
        const {getByTestId} = render(<PhoneNumberInputField  {...defaultProps} errorLabel={'Error!'} value='55 1234 1234' onChange={mockChange}/>);
        const phoneInput = getByTestId('phone-field-input');
        phoneInput.setAttribute('value', '55 1234 1233');
        fireEvent.focus(phoneInput);
        fireEvent.change(phoneInput, {target: {value: '55 1234 1233'}});
        fireEvent.blur(phoneInput);
        expect(mockChange).toHaveBeenCalledWith('55 1234 1233');
    });

    it('Should NOT call onBlur when field is blurred and not onBlur is given', () => {
        const mockBlur = jest.fn();
        const {getByTestId} = render(<PhoneNumberInputField  {...defaultProps} errorLabel={'Error!'} value='55 1234 1234'/>);
        const phoneInput = getByTestId('phone-field-input');
        phoneInput.setAttribute('value', '55 1234 1233');
        fireEvent.focus(phoneInput);
        fireEvent.change(phoneInput, {target: {value: '55 1234 1233'}});
        fireEvent.blur(phoneInput);
        expect(mockBlur).not.toHaveBeenCalled();
    });

    it('Should call given onBlur when field is blurred', () => {
        const mockBlur = jest.fn();
        const {getByTestId} = render(<PhoneNumberInputField  {...defaultProps} errorLabel={'Error!'} value='55 1234 1234' onBlur={mockBlur}/>);
        const phoneInput = getByTestId('phone-field-input');
        phoneInput.setAttribute('value', '55 1234 1233');
        fireEvent.focus(phoneInput);
        fireEvent.change(phoneInput, {target: {value: '55 1234 1233'}});
        fireEvent.blur(phoneInput);
        expect(mockBlur).toHaveBeenCalled();
    });

    it('Should send phone value as params in given onBlur event', () => {
        const mockBlur = jest.fn();
        const {getByTestId} = render(<PhoneNumberInputField  {...defaultProps} errorLabel={'Error!'} value='55 1234 1234' onBlur={mockBlur}/>);
        const phoneInput = getByTestId('phone-field-input');
        phoneInput.setAttribute('value', '55 1234 1233');
        fireEvent.focus(phoneInput);
        fireEvent.change(phoneInput, {target: {value: '55 1234 1233'}});
        fireEvent.blur(phoneInput);
        expect(mockBlur).toHaveBeenCalledWith('55 1234 1233');
    });
})
