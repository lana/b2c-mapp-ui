import { shallowMount } from '@vue/test-utils';

import TextField from './TextField.vue';

// TODO: Consolidate and refactor any tests from the old `TextFieldWithValidation` component into this file too

// TODO: Uncomment the below test cases after refactoring to work with Vue
// describe('UI/forms/TextField', () => {
//   const defaultProps = {
//     placeholder: 'Placeholder'
//   };
//
//   it('Should NOT be empty if given value is provided', () => {
//     const { getByTestId } = render(<TextField {...defaultProps}/>);
//     waitForDomChange(() => {
//       const isEmpty = getByTestId('text-field-input').textContent === '';
//       expect(isEmpty).toBeTruthy();
//     })
//   });
//
//   it('Should NOT be empty if given value is provided', () => {
//     const { getByTestId } = render(<TextField {...defaultProps} value={'Text value'}/>);
//     waitForDomChange(() => {
//       const isNotEmpty = getByTestId('text-field-input').textContent === 'Text value';
//       expect(isNotEmpty).toBeTruthy();
//     })
//   });
//
//   it('Should show error label if errorlabel is given', () => {
//     const { getByTestId } = render(<TextField {...defaultProps} value={'Text value'} errorLabel={'error label'}/>);
//     const hasError = getByTestId('text-field-label').className.includes('error');
//     expect(hasError).toBeTruthy();
//   });
//
//   it('Should call given onBlur when text field is blurred', () => {
//     const mockBlur = jest.fn();
//     const { getByTestId } = render(<TextField {...defaultProps} value={'Text value'} onBlur={mockBlur}/>);
//     const input = getByTestId('text-field-input');
//     fireEvent.focus(input);
//     fireEvent.blur(input);
//     expect(mockBlur).toHaveBeenCalled();
//   });
//
//   it('Should call given onBlur, providing event as param, when text field is changed', () => {
//     const mockBlur = jest.fn();
//     const { getByTestId } = render(<TextField {...defaultProps} value={'Text value'} onBlur={mockBlur}/>);
//     const input = getByTestId('text-field-input');
//     fireEvent.blur(input);
//     const outputEvent = new FocusEvent('blur');
//     expect(mockBlur).toHaveBeenCalledWith(outputEvent);
//   });
//
//   it('Should call given onChange when text field is changed', () => {
//     const mockChange = jest.fn();
//     const { getByTestId } = render(<TextField {...defaultProps} value={'Text value'} onChange={mockChange}/>);
//     const input = getByTestId('text-field-input');
//     fireEvent.focus(input);
//     fireEvent.change(input, {target: {value: 'new Value'}});
//     fireEvent.blur(input);
//     expect(mockChange).toHaveBeenCalled();
//   });
//
//   it('Should call given onChange, providing new value as param, when text field is changed', () => {
//     const mockChange = jest.fn();
//     const { getByTestId } = render(<TextField {...defaultProps} value={'Text value'} onChange={mockChange}/>);
//     const input = getByTestId('text-field-input');
//     fireEvent.focus(input);
//     fireEvent.change(input, {target: {value: 'new Value'}});
//     fireEvent.blur(input);
//     expect(mockChange).toHaveBeenCalledWith('new Value');
//   });
// });
