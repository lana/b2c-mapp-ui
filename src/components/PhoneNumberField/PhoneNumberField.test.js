import { mount } from '@vue/test-utils';
import { render } from '@testing-library/vue';

import PhoneNumberField from './PhoneNumberField.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('UI/forms/PhoneNumberField', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  const defaultProps = {
    placeholder: 'placeholder',
    countryCode: 'MX',
  };

  it('Should apply given value', async () => {
    const givenValue = '5600000000';
    const wrapper = mount(PhoneNumberField, { props: { ...defaultProps, modelValue: givenValue } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.modelValue.call(wrapper.vm, givenValue);
    await wrapper.vm.$nextTick();
    const takesGivenValue = wrapper.vm.$data.inputValue === givenValue;
    expect(takesGivenValue).toBeTruthy();
  });

  it('Should apply formatted phone number', async () => {
    const givenValue = '5600000000';
    const formattedValue = '56 0000 0000';
    const wrapper = mount(PhoneNumberField, { props: { ...defaultProps, modelValue: givenValue } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.inputValue.call(wrapper.vm, givenValue);
    await wrapper.vm.$nextTick();
    const takesGivenValue = wrapper.vm.formattedPhoneNumber === formattedValue;
    expect(takesGivenValue).toBeTruthy();
  });

  it('Should not show error label if given value is empty', () => {
    const { getByTestId } = render(PhoneNumberField, { props: { ...defaultProps } });
    const noErrorLabel = !getByTestId('phone-field-label').className.includes('error');
    expect(noErrorLabel).toBeTruthy();
  });

  it('Should not show error label if given value is valid', () => {
    const { getByTestId } = render(PhoneNumberField, { props: { ...defaultProps, modelValue: '5512341234' } });
    const noErrorLabel = !getByTestId('phone-field-label').className.includes('error');
    expect(noErrorLabel).toBeTruthy();
  });

  it('Should not show error label if given value is valid and has parenthesis', () => {
    const { getByTestId } = render(PhoneNumberField, { props: { ...defaultProps, countryCode: 'CL', modelValue: '223344556' } });
    const noErrorLabel = !getByTestId('phone-field-label').className.includes('error');
    expect(noErrorLabel).toBeTruthy();
  });

  it('Should show error label if given value is NOT valid', () => {
    const { getByTestId } = render(PhoneNumberField, { props: { ...defaultProps, errorLabel: 'Error!', modelValue: '551234123234324' } });
    const errorLabel = getByTestId('phone-field-container').className.includes('error');
    expect(errorLabel).toBeTruthy();
  });

  it('Should show given errorLabel text content if given value is NOT valid', () => {
    const { getByTestId } = render(PhoneNumberField, { props: { ...defaultProps, errorLabel: 'Error!', modelValue: '551234123234324' } });
    const errorLabel = getByTestId('phone-field-helptext').textContent.includes('Error!');
    expect(errorLabel).toBeTruthy();
  });

  it('Should show country code if hideCountryCodeUntilFocus is false', () => {
    const { getByTestId } = render(PhoneNumberField, { props: { ...defaultProps, hideCountryCodeUntilFocus: false, modelValue: '551234123234324' } });
    const prefixIsShown = getByTestId('phone-field-prefix').textContent.includes('+52');
    expect(prefixIsShown).toBeTruthy();
  });

  it('Should NOT show country code if given hideCountryCodeUntilFocus is true and there is no value', () => {
    const { queryAllByTestId } = render(PhoneNumberField, { props: { ...defaultProps, hideCountryCodeUntilFocus: true } });
    const prefixIsNotShown = !queryAllByTestId('phone-field-prefix').length;
    expect(prefixIsNotShown).toBeTruthy();
  });

  it('Should show country code if given hideCountryCodeUntilFocus is true and there is a value', () => {
    const { getByTestId } = render(PhoneNumberField, { props: { ...defaultProps, hideCountryCodeUntilFocus: true, modelValue: '551234123234324' } });
    const prefixIsShown = getByTestId('phone-field-prefix').textContent.includes('+52');
    expect(prefixIsShown).toBeTruthy();
  });

  it('Should NOT show country code if is not given', () => {
    const { getByTestId } = render(PhoneNumberField, { props: { ...defaultProps, countryCode: null, modelValue: '551234123234324' } });
    const prefix = getByTestId('phone-field-prefix').textContent.replace(/\s+$/, '');
    const prefixIsNotShown = !prefix;
    expect(prefixIsNotShown).toBeTruthy();
  });

  it('Should emit input event when value changes', () => new Promise((resolve) => {
    const wrapper = mount(PhoneNumberField, { props: { ...defaultProps, modelValue: '55 1234 1234' } });
    wrapper.vm.$nextTick();
    const phoneInput = wrapper.find('input[data-testid="phone-field-input"]');
    phoneInput.setValue('13821');
    wrapper.vm.$nextTick();
    setTimeout(() => {
      const inputEmmitedEvent = wrapper.emitted('update:modelValue');
      expect(inputEmmitedEvent).toBeTruthy();
      resolve();
    });
  }));

  it('Should emit current value of the input in the input event when value changes', () => new Promise((resolve) => {
    const wrapper = mount(PhoneNumberField, { props: { ...defaultProps, modelValue: '55 1234 1234' } });
    wrapper.vm.$nextTick();
    const phoneInput = wrapper.find('input[data-testid="phone-field-input"]');
    phoneInput.setValue('13821');
    wrapper.vm.$nextTick();
    setTimeout(() => {
      const emittedCurrentValue = wrapper.emitted('update:modelValue')[0][0] === '13821';
      expect(emittedCurrentValue).toBeTruthy();
      resolve();
    });
  }));
  it('Should emit formatted value of the input in the input event when value changes', () => new Promise((resolve) => {
    const wrapper = mount(PhoneNumberField, { props: { ...defaultProps, modelValue: '55 1234 1234' } });
    wrapper.vm.$nextTick();
    const phoneInput = wrapper.find('input[data-testid="phone-field-input"]');
    phoneInput.setValue('13821');
    wrapper.vm.$nextTick();
    setTimeout(() => {
      const emittedCurrentValue = wrapper.emitted('update:formattedValue')[0][0] === '1382 1';
      expect(emittedCurrentValue).toBeTruthy();
      resolve();
    });
  }));

  it('Should emit a blur event when its blurred', () => new Promise((resolve) => {
    const wrapper = mount(PhoneNumberField, { props: { ...defaultProps, modelValue: '55 1234 1234' } });
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
    const wrapper = mount(PhoneNumberField, { props: { ...defaultProps, modelValue: '55 1234 1234' } });
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
