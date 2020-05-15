import { mount } from '@vue/test-utils';
import { render, fireEvent } from '@testing-library/vue';

import PhoneNumberField from './PhoneNumberField.vue';
import BankAccountNumberInputField from "../BankAccountNumberInputField/BankAccountNumberInputField";

// TODO: Uncomment the below test cases after refactoring to work with Vue
describe('UI/forms/PhoneNumberField', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  const defaultProps = {
    placeholder: 'placeholder',
    countryCode: 'MX',
  };

  it('Should not show error label if given value is empty', () => {
    const { getByTestId } = render(PhoneNumberField, { propsData: { ...defaultProps } });
    const noErrorLabel = !getByTestId('phone-field-label').className.includes('error');
    expect(noErrorLabel).toBeTruthy();
  });

  it('Should not show error label if given value is valid', () => {
    const { getByTestId } = render(PhoneNumberField, { propsData: { ...defaultProps, value: '5512341234' } });
    const noErrorLabel = !getByTestId('phone-field-label').className.includes('error');
    expect(noErrorLabel).toBeTruthy();
  });

  it('Should show error label if given value is NOT valid', () => {
    const { getByTestId } = render(PhoneNumberField, { propsData: { ...defaultProps, errorLabel: 'Error!', value: '551234123234324' } });
    const errorLabel = getByTestId('phone-field-label').className.includes('error');
    expect(errorLabel).toBeTruthy();
  });

  it('Should show given errorLabel text content if given value is NOT valid', () => {
    const { getByTestId } = render(PhoneNumberField, { propsData: { ...defaultProps, errorLabel: 'Error!', value: '551234123234324' } });
    const errorLabel = getByTestId('phone-field-label').textContent.includes('Error!');
    expect(errorLabel).toBeTruthy();
  });

  it('Should show country code if hideCountryCode is false', () => {
    const { getByTestId } = render(PhoneNumberField, { propsData: { ...defaultProps, hideCountryCode: false, value: '551234123234324' } });
    const prefixIsShown = getByTestId('phone-field-prefix').textContent.includes('+52');
    expect(prefixIsShown).toBeTruthy();
  });

  it('Should NOT show country code if given hideCountryCode is true', () => {
    const { queryAllByTestId } = render(PhoneNumberField, { propsData: { ...defaultProps, hideCountryCode: true, value: '551234123234324' } });
    const prefixIsNotShown = !queryAllByTestId('phone-field-prefix').length;
    expect(prefixIsNotShown).toBeTruthy();
  });

  it('Should emit input event when value changes', () => new Promise((resolve) => {
    const wrapper = mount(PhoneNumberField, { propsData: { ...defaultProps, value: '55 1234 1234' } });
    wrapper.vm.$nextTick();
    const phoneInput = wrapper.find('input[data-testid="phone-field-input"]');
    phoneInput.setValue('13821');
    wrapper.vm.$nextTick();
    setTimeout(() => {
      const inputEmmitedEvent = wrapper.emitted().input;
      expect(inputEmmitedEvent).toBeTruthy();
      resolve();
    });
  }));

  it('Should emit current value of the input in the input event when value changes', () => new Promise((resolve) => {
    const wrapper = mount(PhoneNumberField, { propsData: { ...defaultProps, value: '55 1234 1234' } });
    wrapper.vm.$nextTick();
    const phoneInput = wrapper.find('input[data-testid="phone-field-input"]');
    phoneInput.setValue('13821');
    wrapper.vm.$nextTick();
    setTimeout(() => {
      const emittedCurrentValue = wrapper.emitted().input[0][0] === '1382 1';
      expect(emittedCurrentValue).toBeTruthy();
      resolve();
    });
  }));

  it('Should emit a blur event when its blurred', () => new Promise((resolve) => {
    const wrapper = mount(PhoneNumberField, { propsData: { ...defaultProps, value: '55 1234 1234' } });
    wrapper.vm.$nextTick();
    const phoneInput = wrapper.find('input[data-testid="phone-field-input"]');
    phoneInput.trigger('blur');
    wrapper.vm.$nextTick();
    setTimeout(() => {
      const emittedBlur = wrapper.emitted().blur;
      expect(emittedBlur).toBeTruthy();
      resolve();
    });
  }));

  it('Should emit a focus event when its focused', () => new Promise((resolve) => {
    const wrapper = mount(PhoneNumberField, { propsData: { ...defaultProps, value: '55 1234 1234' } });
    wrapper.vm.$nextTick();
    const phoneInput = wrapper.find('input[data-testid="phone-field-input"]');
    phoneInput.trigger('focus');
    wrapper.vm.$nextTick();
    setTimeout(() => {
      const emittedFocus = wrapper.emitted().focus;
      expect(emittedFocus).toBeTruthy();
      resolve();
    });
  }));
});
