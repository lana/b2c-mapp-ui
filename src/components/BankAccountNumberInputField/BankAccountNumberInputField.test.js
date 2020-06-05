import { render, fireEvent } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import BankAccountNumberInputField from './BankAccountNumberInputField.vue';

describe('BankAccountNumberInputField unit test:', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  const defaultProps = {
    label: 'Introduce un CLABE',
    name: 'example',
  };

  it('Should not show errors if given value is empty', () => {
    const { getByTestId } = render(BankAccountNumberInputField, { propsData: { ...defaultProps, value: '' } });
    const labelClass = getByTestId('bank-account-field-label').className;
    const doNotHasError = !labelClass.includes('error');
    expect(doNotHasError).toBeTruthy();
  });

  it('Should not show errors if given value is valid', () => {
    const { getByTestId } = render(BankAccountNumberInputField, { propsData: { ...defaultProps, value: '138211000000000127' } });
    const labelClass = getByTestId('bank-account-field-label').className;
    const doNotHasError = !labelClass.includes('error');
    expect(doNotHasError).toBeTruthy();
  });

  it('Should show errors if given value is NOT valid', () => {
    const { getByTestId } = render(BankAccountNumberInputField, { propsData: { ...defaultProps, value: '138211000000000' } });
    const labelClass = getByTestId('bank-account-field-label').className;
    const hasError = labelClass.includes('error');
    expect(hasError).toBeTruthy();
  });

  it('Should emit an event when is focused', () => {
    const { getByTestId, emitted } = render(BankAccountNumberInputField, { propsData: { ...defaultProps, value: '' } });
    const field = getByTestId('bank-account-field-input');
    fireEvent.focus(field);
    const isFocusEmitted = emitted().focus;
    expect(isFocusEmitted).toBeTruthy();
  });

  it('Should emit an event when is blurred', () => {
    const { getByTestId, emitted } = render(BankAccountNumberInputField, { propsData: { ...defaultProps, value: '' } });
    const field = getByTestId('bank-account-field-input');
    fireEvent.blur(field);
    const isBlurEmitted = emitted().blur;
    expect(isBlurEmitted).toBeTruthy();
  });

  it('Should apply the correct format when autoformat is enabled, for the given value: ', () => new Promise((resolve) => {
    const wrapper = mount(BankAccountNumberInputField, { propsData: { ...defaultProps, autoformat: true, value: '138211000000000127' } });
    setTimeout(() => {
      const input = wrapper.find('input');
      expect(input.element.value).toEqual('138 211 00000000012 7');
      resolve();
    });
  }));

  it('Should apply the correct format when autoformat is disabled, for the given value: ', () => new Promise((resolve) => {
    const inputValue = '138211000000000127';
    const wrapper = mount(BankAccountNumberInputField, { propsData: { ...defaultProps, value: inputValue } });
    setTimeout(() => {
      const input = wrapper.find('input');
      expect(input.element.value).toEqual(inputValue);
      resolve();
    });
  }));

  it('Should take given input value: ', () => new Promise((resolve) => {
    const newValue = '13821';
    const wrapper = mount(BankAccountNumberInputField, { propsData: { ...defaultProps, value: '138211000000000127' } });
    const input = wrapper.find('input');
    input.setValue('13821');
    input.trigger('input');
    wrapper.vm.$options.watch.value.call(wrapper.vm, newValue);
    setTimeout(() => {
      expect(wrapper.vm.$data.inputValue).toEqual(newValue);
      resolve();
    });
  }));

  it('Should not allow value with a length greater than its max-length: ', async () => {
    const newValue = '138 211 00000000012 79';
    const initialValue = '138211000000000127';
    const wrapper = mount(BankAccountNumberInputField, { propsData: { ...defaultProps, value: '138211000000000127' } });
    wrapper.vm.$options.watch.inputValue.call(wrapper.vm, newValue);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.inputValue).toEqual(initialValue);
  });

  it('Should apply right format even if max-length of the field is not reached', () => new Promise((resolve) => {
    const wrapper = mount(BankAccountNumberInputField, { propsData: { ...defaultProps, autoformat: true, value: '138211000000000127' } });
    const input = wrapper.find('input');
    input.setValue('13821');
    input.trigger('change');
    setTimeout(() => {
      expect(input.element.value).toEqual('138 21');
      resolve();
    });
  }));
});
