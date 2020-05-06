import { shallowMount } from '@vue/test-utils';

import BankAccountNumberInputField from './BankAccountNumberInputField.vue';


// TODO: Uncomment the below test cases after refactoring to work with Vue
// describe('UI/forms/BankAccountNumberInputField', () =>{
//   const defaultProps = {
//     label: 'Introduce un CLABE',
//     name:'example',
//   };
//   it('Should not show errors if given value is empty', () => {
//     const { getByTestId } = render(<BankAccountNumberInputField {...defaultProps} value=''/>);
//     const labelClass = getByTestId('bank-account-field-label').className;
//     const doNotHasError = !labelClass.includes('error');
//     expect(doNotHasError).toBeTruthy();
//   })
//   it('Should not show errors if given value is valid', () => {
//     const { getByTestId } = render(<BankAccountNumberInputField {...defaultProps} value='138211000000000127'/>);
//     const labelClass = getByTestId('bank-account-field-label').className;
//     const doNotHasError = !labelClass.includes('error');
//     expect(doNotHasError).toBeTruthy();
//   });
//   it('Should show errors if given value is NOT valid', () => {
//     const { getByTestId } = render(<BankAccountNumberInputField {...defaultProps} value='1382110002127'/>);
//     const labelClass = getByTestId('bank-account-field-label').className;
//     const hasError = labelClass.includes('error');
//     expect(hasError).toBeTruthy();
//   });
//
//   it('Should trigger given onChange when value changes', () => {
//     const mockChange = jest.fn();
//     const { getByTestId } = render(<BankAccountNumberInputField {...defaultProps} value={'1382110002127'} onChange={mockChange}/>);
//     const field = getByTestId('bank-account-field-input');
//     field.setAttribute('value', '138 211 0002127');
//     fireEvent.focus(field);
//     fireEvent.change(field, {target: { value: '138 211 0002128' }});
//     fireEvent.blur(field);
//     expect(mockChange).toHaveBeenCalled();
//   });
//   it('Should trigger given onChange passing fieldValue and validation as params', () => {
//     const mockChange = jest.fn();
//     const { getByTestId } = render(<BankAccountNumberInputField {...defaultProps} value={'1382110002127'} onChange={mockChange}/>);
//     const field = getByTestId('bank-account-field-input');
//     field.setAttribute('value', '138 211 0002127');
//     fireEvent.focus(field);
//     fireEvent.change(field, {target: { value: '138 211 0002128' }});
//     fireEvent.blur(field);
//     expect(mockChange).toHaveBeenCalledWith("138 211 0002128", {"isMaxLength": false, "isValid": false});
//   });
//   it('Should trigger given onBlur when field is blurred', () => {
//     const mockBlur = jest.fn();
//     const { getByTestId } = render(<BankAccountNumberInputField {...defaultProps} value={'1382110002127'} onBlur={mockBlur}/>);
//     const field = getByTestId('bank-account-field-input');
//     fireEvent.focus(field);
//     fireEvent.blur(field);
//     expect(mockBlur).toHaveBeenCalled();
//   });
//   it('Should trigger given onFocus when field is focused', () => {
//     const mockFocus = jest.fn();
//     const { getByTestId } = render(<BankAccountNumberInputField {...defaultProps} value={'1382110002127'} onFocus={mockFocus}/>);
//     const field = getByTestId('bank-account-field-input');
//     fireEvent.focus(field);
//     expect(mockFocus).toHaveBeenCalled();
//   });
//   it('Should apply maxLength based on template length by given countryCode', () => {
//     const { getByTestId } = render(<BankAccountNumberInputField {...defaultProps} value={'1382110002127'}/>);
//     const fieldMaxLength = getByTestId('bank-account-field-input').getAttribute('maxlength');
//     const lengthBasedOnCountryCodeTemplate = fieldMaxLength === '21';
//     expect(lengthBasedOnCountryCodeTemplate).toBeTruthy();
//   });
// });
