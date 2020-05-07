import { shallowMount } from '@vue/test-utils';

import DateField from './DateField.vue';

// TODO: Uncomment the below test cases after refactoring to work with Vue
// describe('UI/forms/DateField', () => {
//   const defaultProps = {
//     label: 'Enter your DOB'
//   }
//
//   describe('Date input behavior', () => {
//     it('Should NOT display error label if field is empty', () => {
//       const {getByTestId} = render(<DateField {...defaultProps} />);
//       const labelHasNotError = !getByTestId('date-field-label').className.includes('error');
//       expect(labelHasNotError).toBeTruthy();
//     });
//
//     it('Should display an error if wrong date is set', () => {
//       const wrongDate = '34-23-3333';
//       const { getByTestId } = render(<DateField {...defaultProps}/>);
//       const wrapper = getByTestId('date-field-wrapper');
//       const dateInput = wrapper.getElementsByTagName('input')[0];
//       dateInput.setAttribute('value', wrongDate);
//       fireEvent.focus(dateInput);
//       fireEvent.change(dateInput, {target: {value: wrongDate}});
//       fireEvent.blur(dateInput);
//       const labelHasError = wrapper.getElementsByTagName('label')[0].className.includes('error');
//       expect(labelHasError).toBeTruthy();
//     });
//
//     it('Should not display error label if field value is valid', () => {
//       const goodDate = '20/10/2018';
//       const { getByTestId } = render(<DateField {...defaultProps}/>);
//       const wrapper = getByTestId('date-field-wrapper');
//       const dateInput = getByTestId('date-field-input');
//       dateInput.setAttribute('value', goodDate);
//       fireEvent.focus(dateInput);
//       fireEvent.change(dateInput, {target: {value: goodDate}});
//       fireEvent.blur(dateInput);
//       const labelHasNotError = !wrapper.getElementsByTagName('label')[0].className.includes('error');
//       expect(labelHasNotError).toBeTruthy();
//     });
//
//     it('Should apply autoformat if is given by props', () => {
//       const unformattedDate = '20/10';
//       const formattedDate = '20/10/';
//       const { getByTestId } = render(<DateField {...defaultProps} autoformat/>);
//       const dateInput = getByTestId('date-field-input');
//       dateInput.setAttribute('value', unformattedDate);
//       fireEvent.focus(dateInput);
//       fireEvent.change(dateInput, {target: {value: unformattedDate}});
//       fireEvent.blur(dateInput);
//       const autoFormatIsApplied = dateInput.value === formattedDate;
//       expect(autoFormatIsApplied).toBeTruthy();
//     })
//
//     it('Should show date picked using datapicker', () => {
//       const goodDate = '20/10/2018';
//       const { getByTestId } = render(<DateField {...defaultProps} datepicker/>);
//       const datePicker = getByTestId('date-field-datepicker-input');
//       datePicker.setAttribute('value', goodDate),
//         fireEvent.focus(datePicker);
//       fireEvent.click(datePicker);
//       fireEvent.change(datePicker, {target: {value: goodDate}});
//       fireEvent.blur(datePicker);
//       const dateInput = getByTestId('date-field-input');
//       const hasGivenValueFromDatePicker = dateInput.value === datePicker.value;
//       expect(hasGivenValueFromDatePicker).toBeTruthy();
//     });
//
//     it('Should call given onValidation when main date input changes: ', () => {
//       const goodDate = '20/10/2018';
//       const validationMock = jest.fn();
//       const { getByTestId } = render(<DateField {...defaultProps} onValidation={validationMock} id={'picker'}/>);
//       const dateInput = getByTestId('date-field-input');
//       dateInput.setAttribute('value', goodDate);
//       fireEvent.focus(dateInput);
//       fireEvent.change(dateInput, {target: {value: goodDate}});
//       fireEvent.blur(dateInput);
//       expect(validationMock).toHaveBeenCalled();
//     });
//   });
//
//   describe('DatePicker behavior', () => {
//
//     it('Should call given onChange when datepicker input changes: ', () => {
//       const goodDate = '2020-04-02';
//       const mockClick = jest.fn();
//       const { getByTestId } = render(<DateField {...defaultProps} datepicker onChange={mockClick}/>);
//       const datePicker = getByTestId('date-field-datepicker-input');
//       fireEvent.change(datePicker, {target: {value: goodDate}});
//       expect(mockClick).toHaveBeenCalled();
//     });
//
//     it('Should get value from main date input', () => {
//       const goodDate = '20/10/2018';
//       const { getByTestId } = render(<DateField {...defaultProps} datepicker/>);
//       const dateInput = getByTestId('date-field-input');
//       const datePicker = getByTestId('date-field-datepicker-input');
//       dateInput.setAttribute('value', goodDate);
//       fireEvent.change(dateInput, {target: {value: goodDate}});
//       fireEvent.blur(dateInput);
//       const calendarDateIsChanged = datePicker.value === '2018-10-20';
//       expect(calendarDateIsChanged).toBeTruthy();
//     });
//
//   });
// });
