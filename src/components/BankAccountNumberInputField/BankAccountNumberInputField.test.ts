import { render, fireEvent } from '@testing-library/vue';
import { flushPromises, mount } from '@vue/test-utils';

import BankAccountNumberInputField from './BankAccountNumberInputField.vue';
import { silenceInnerComponentWarnings } from '../../lib/testUtils';

describe('BankAccountNumberInputField unit test:', () => {
  beforeAll(() => {
    silenceInnerComponentWarnings(jest);
  });

  const defaultProps = {
    label: 'Introduce un CLABE',
    name: 'example',
  };

  it('Should not show errors if given value is empty', () => {
    const { getByTestId } = render(BankAccountNumberInputField, { props: { ...defaultProps, modelValue: '' } });
    const labelClass = getByTestId('bank-account-field-label').className;
    const doNotHasError = !labelClass.includes('error');
    expect(doNotHasError).toBeTruthy();
  });

  it('Should not show errors if given value is valid', () => {
    const { getByTestId } = render(BankAccountNumberInputField, { props: { ...defaultProps, modelValue: '138211000000000127' } });
    const labelClass = getByTestId('bank-account-field-label').className;
    const doNotHasError = !labelClass.includes('error');
    expect(doNotHasError).toBeTruthy();
  });

  it('Should show errors if given value is NOT valid', () => {
    const { getByTestId } = render(BankAccountNumberInputField, { props: { ...defaultProps, modelValue: '138211000000000' } });
    const labelClass = getByTestId('bank-account-field-container').className;
    const hasError = labelClass.includes('error');
    expect(hasError).toBeTruthy();
  });

  it('Should emit an event when is focused', () => {
    const { getByTestId, emitted } = render(BankAccountNumberInputField, { props: { ...defaultProps, modelValue: '' } });
    const field = getByTestId('bank-account-field-input');
    fireEvent.focus(field);
    const isFocusEmitted = emitted().focus;
    expect(isFocusEmitted).toBeTruthy();
  });

  it('Should emit an event when is blurred', () => {
    const { getByTestId, emitted } = render(BankAccountNumberInputField, { props: { ...defaultProps, modelValue: '' } });
    const field = getByTestId('bank-account-field-input');
    fireEvent.blur(field);
    const isBlurEmitted = emitted().blur;
    expect(isBlurEmitted).toBeTruthy();
  });

  it('Should apply the correct format when autoformat is enabled, for the given modelValue: ', async () => {
    const wrapper = mount(BankAccountNumberInputField, { props: { ...defaultProps, autoformat: true, modelValue: '138211000000000127' } });
    await flushPromises();
    const input = wrapper.find('input');
    expect(input.element.value).toEqual('138 211 00000000012 7');
  });

  it('Should apply the correct format when autoformat is disabled, for the given modelValue: ', async () => {
    const inputValue = '138211000000000127';
    const wrapper = mount(BankAccountNumberInputField, { props: { ...defaultProps, modelValue: inputValue } });
    await flushPromises();
    const input = wrapper.find('input');
    expect(input.element.value).toEqual(inputValue);
  });

  it('Should take given input modelValue: ', async () => {
    const newValue = '13821';
    const givenValue = '138211000000000127';
    const wrapper = mount(BankAccountNumberInputField, { props: { ...defaultProps, modelValue: givenValue } });
    const input = wrapper.find('input');
    await input.setValue('13821');
    const emittedModelValue = wrapper.emitted('update:modelValue')?.[0] as string[];
    const [inputEventValue] = emittedModelValue as string[];
    expect(inputEventValue).toEqual(newValue);
  });

  it('Should not allow value with a length greater than its max-length: ', async () => {
    const newValue = '138 211 00000000012 79';
    const expectedValue = '138 211 00000000012 7';
    const wrapper = mount(BankAccountNumberInputField, { props: { ...defaultProps, modelValue: '138211000000000127' } });
    const input = wrapper.find('input');
    await input.setValue(newValue);
    expect(wrapper.vm.inputValue).toEqual(expectedValue);
  });

  it('Should allow showing the length hint value independently of the max-length: ', async () => {
    const newValue = '138211000000000127';
    const wrapper = mount(BankAccountNumberInputField, {
      props: {
        ...defaultProps,
        modelValue: newValue,
        lengthHint: 10,
        lengthHintLabel: 'foo',
        showLengthHint: true,
      },
    });
    const lengthHint = wrapper.find('.help-text');
    await wrapper.vm.$nextTick();
    const hasLengthHint = lengthHint.element.textContent?.includes('10 foo');
    expect(hasLengthHint).toBeTruthy();
    expect(wrapper.vm.inputValue).toEqual(newValue);
  });

  it('Should apply right format even if max-length of the field is not reached', async () => {
    const wrapper = mount(BankAccountNumberInputField, { props: { ...defaultProps, autoformat: true, modelValue: '138211000000000127' } });
    const input = wrapper.find('input');
    await input.setValue('13821');
    await input.trigger('change');
    expect(input.element.value).toEqual('138 21');
  });
});
