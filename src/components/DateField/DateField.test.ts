import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import DateField from './DateField.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('DateField unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  const defaultProps = {
    label: 'Enter your DOB',
    autoformat: true,
    disabled: false,
    readonly: false,
  };

  it('Should NOT display error label if field is empty', () => {
    const { getByTestId } = render(DateField, { props: { ...defaultProps } });
    const labelHasNotError = !getByTestId('date-field-label').className.includes('error');
    expect(labelHasNotError).toBeTruthy();
  });

  it('Should apply given name and prefix to date-field-input ', async () => {
    const givenName = 'test';
    const prefixedName = 'date-field-test';
    const wrapper = mount(DateField, { props: { ...defaultProps, datePicker: true, name: givenName } });
    const dateField = wrapper.find('input[data-testid="date-field-input"]');
    await wrapper.vm.$nextTick();
    const dateFieldName = dateField.element.getAttribute('name');
    const takesGivenName = dateFieldName === prefixedName;
    expect(takesGivenName).toBeTruthy();
  });

  it('Should apply given prefix to date-field-input if name is not given', async () => {
    const prefixedName = 'date-field';
    const wrapper = mount(DateField, { props: { ...defaultProps, datePicker: true } });
    const dateField = wrapper.find('input[data-testid="date-field-input"]');
    await wrapper.vm.$nextTick();
    const dateFieldName = dateField.element.getAttribute('name');
    const takesPrefix = dateFieldName === prefixedName;
    expect(takesPrefix).toBeTruthy();
  });

  it('Should show error label if wrong value is applied', async () => {
    const wrongDate = '34-23-3333';
    const wrapper = mount(DateField, { props: { ...defaultProps } });
    const dateInput = wrapper.find('input[data-testid="date-field-input"');
    await dateInput.setValue(wrongDate);
    const labelHasError = wrapper.find('div[data-testid="date-field-container"]').classes().includes('error');
    expect(labelHasError).toBeTruthy();
  });

  it('Should show error label if value seems to be valid but is not', async () => {
    const wrongDate = '29-02-2019';
    const wrapper = mount(DateField, { props: { ...defaultProps } });
    const dateInput = wrapper.find('input[data-testid="date-field-input"');
    await dateInput.setValue(wrongDate);
    const labelHasError = wrapper.find('div[data-testid="date-field-container"]').classes().includes('error');
    expect(labelHasError).toBeTruthy();
  });

  it('Should not display error label if field value is valid', async () => {
    const goodDate = '20/10/2018';
    const wrapper = mount(DateField, { props: { ...defaultProps } });
    const dateInput = wrapper.find('input[data-testid="date-field-input"');
    await dateInput.setValue(goodDate);
    const labelHasNotError = !wrapper.find('label[data-testid="date-field-label"]').classes().includes('error');
    expect(labelHasNotError).toBeTruthy();
  });

  it('Should apply autoformat if is given by props', async () => {
    const unformattedDate = '20/10';
    const formattedDate = '20/10/';
    const wrapper = mount(DateField, { props: { ...defaultProps } });
    const dateInput = wrapper.find('input[data-testid="date-field-input"');
    await dateInput.setValue(unformattedDate);
    expect((dateInput.element as HTMLInputElement).value).toBe(formattedDate);
  });

  it('Should show date picked using datapicker', async () => {
    const goodDate = '20/10/2018';
    const wrapper = mount(DateField, { props: { ...defaultProps, datePicker: true } });
    const datePicker = wrapper.find('input[data-testid="date-field-datepicker-input"]');
    await datePicker.setValue(goodDate);
    const dateInput = wrapper.find('input[data-testid="date-field-input"]');
    const hasGivenValueFromDatePicker = dateInput.attributes('value') === datePicker.attributes('value');
    expect(hasGivenValueFromDatePicker).toBeTruthy();
  });

  it('Should emit a validation event when its value changed', async () => {
    const goodDate = '20/10/2018';
    const wrapper = mount(DateField, { props: { ...defaultProps } });
    const dateInput = wrapper.find('input[data-testid="date-field-input"');
    await dateInput.setValue(goodDate);
    await wrapper.vm.$nextTick();
    const validationEmittedEvent = wrapper.emitted().validate;
    expect(validationEmittedEvent).toBeTruthy();
  });

  it('Should provide current value and id in validation emitted event when its value changed', async () => {
    const goodDate = '20/10/2018';
    const givenId = 'dateInputId';
    const wrapper = mount(DateField, { props: { ...defaultProps, id: givenId } });
    const dateInput = wrapper.find('input[data-testid="date-field-input"');
    await dateInput.setValue(goodDate);
    await wrapper.vm.$nextTick();
    const [validationEvent] = wrapper.emitted('validate')?.[0] as { value: string, id: string }[];
    const validationEventValueIsCurrentDate = validationEvent?.value === goodDate;
    const validationEventIdIsGivenId = validationEvent?.id === givenId;
    const rightValidationEmittedEventValues = validationEventValueIsCurrentDate && validationEventIdIsGivenId;
    expect(rightValidationEmittedEventValues).toBeTruthy();
  });

  it('Should emit focus event when is focused', async () => {
    const wrapper = mount(DateField, { props: { ...defaultProps } });
    const dateInput = wrapper.find('input[data-testid="date-field-input"');
    dateInput.trigger('focus');
    await wrapper.vm.$nextTick();
    const focusEmittedEvent = wrapper.emitted().focus;
    expect(focusEmittedEvent).toBeTruthy();
  });

  it('Should emit blur event when is blurred', async () => {
    const wrapper = mount(DateField, { props: { ...defaultProps } });
    const dateInput = wrapper.find('input[data-testid="date-field-input"');
    dateInput.trigger('focus');
    dateInput.trigger('blur');
    await wrapper.vm.$nextTick();
    const blurEmittedEvent = wrapper.emitted().blur;
    expect(blurEmittedEvent).toBeTruthy();
  });

  it('Should apply given input value', async () => {
    const newValue = '2';
    const wrapper = mount(DateField, { props: { ...defaultProps, modelValue: newValue } });
    wrapper.vm.$options.watch.modelValue.call(wrapper.vm, newValue);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.inputValue).toEqual(newValue);
  });

  it('Should apply given input value if autoformat is not given: ', async () => {
    const newValue = '2303';
    const wrapper = mount(DateField, { props: { ...defaultProps, autoformat: false, modelValue: newValue } });
    wrapper.vm.$options.watch.modelValue.call(wrapper.vm, newValue);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.inputValue).toEqual(newValue);
  });

  describe('Datepicker behavior:', () => {
    it('Should emit a validation event when its value changed : ', async () => {
      const goodDate = '2020-04-02';
      const wrapper = mount(DateField, { props: { ...defaultProps, datePicker: true } });
      const datePicker = wrapper.find('input[data-testid="date-field-datepicker-input"]');
      await datePicker.setValue(goodDate);
      const validationEvent = wrapper.emitted().validate;
      expect(validationEvent).toBeTruthy();
    });

    it('Should provide current formatted value and id in validation emitted event when its value changed: ', async () => {
      const goodDate = '2020-04-02';
      const formattedDate = '02/04/2020';
      const givenId = 'dateInputId';
      const wrapper = mount(DateField, { props: { ...defaultProps, datePicker: true, id: givenId } });
      const datePicker = wrapper.find('input[data-testid="date-field-datepicker-input"]');
      await datePicker.setValue(goodDate);
      const [validationEvent] = wrapper.emitted('validate')?.[0] as { value: string, id: string }[];
      const validationEventValueIsCurrentDate = validationEvent?.value === formattedDate;
      const validationEventIdIsGivenId = validationEvent?.id === givenId;
      const rightValidationEmittedEventValues = validationEventValueIsCurrentDate && validationEventIdIsGivenId;
      expect(rightValidationEmittedEventValues).toBeTruthy();
    });

    it('Should get value from main date input', async () => {
      const goodDate = '20/10/2018';
      const wrapper = mount(DateField, { props: { ...defaultProps, datePicker: true } });
      const dateInput = wrapper.find('input[data-testid="date-field-input"]');
      await dateInput.setValue(goodDate);
      const datePicker = wrapper.find('input[data-testid="date-field-datepicker-input"]');
      expect((datePicker.element as HTMLInputElement).value).toBe('2018-10-20');
    });

    it('Should apply given name and prefix to datepicker input field', async () => {
      const givenName = 'test';
      const prefixedName = 'input-date-test';
      const givenId = 'idPicker';
      const wrapper = mount(DateField, { props: { ...defaultProps, datePicker: true, id: givenId, name: givenName } });
      const datePicker = wrapper.find('input[data-testid="date-field-datepicker-input"]');
      await wrapper.vm.$nextTick();
      const datePickerName = datePicker.element.getAttribute('name');
      const takesGivenName = datePickerName === prefixedName;
      expect(takesGivenName).toBeTruthy();
    });

    it('Should apply given prefix to datepicker input field if name is not given', async () => {
      const prefixedName = 'input-date';
      const wrapper = mount(DateField, { props: { ...defaultProps, datePicker: true } });
      const datePicker = wrapper.find('input[data-testid="date-field-datepicker-input"]');
      await wrapper.vm.$nextTick();
      const datePickerName = datePicker.element.getAttribute('name');
      const takesPrefix = datePickerName === prefixedName;
      expect(takesPrefix).toBeTruthy();
    });
  });
});
