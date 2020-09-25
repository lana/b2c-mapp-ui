import { mount } from '@vue/test-utils';

import CodeInputField from './CodeInputField.vue';
import { availableTypesLookup } from './CodeInputField';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('CodeInputField unit test', () => {
  const waitForDomUpdate = async (wrapper) => {
    await wrapper.vm.$nextTick();
    await wrapper.vm.$forceUpdate();
  };

  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  const defaultProps = {
    type: availableTypesLookup.smsCode,
  };

  it('Should have as many filled input fields as typed digits', async () => {
    const wrapper = mount(CodeInputField, { propsData: { ...defaultProps, value: '12345' } });
    await waitForDomUpdate(wrapper);
    const digitFields = await wrapper.findAll('[data-testid="code-input-field"]');
    const isFirstDigitFilled = digitFields.at(0).element.textContent.includes('1');
    const isSecondDigitFilled = digitFields.at(1).element.textContent.includes('2');
    const isThirdDigitFilled = digitFields.at(2).element.textContent.includes('3');
    const isFourthDigitFilled = digitFields.at(3).element.textContent.includes('4');
    const isFifthDigitFilled = digitFields.at(4).element.textContent.includes('5');
    const areAllDigitFieldsFilled = isFirstDigitFilled
      && isSecondDigitFilled
      && isThirdDigitFilled
      && isFourthDigitFilled
      && isFifthDigitFilled;
    expect(areAllDigitFieldsFilled).toBeTruthy();
  });

  it('Should show error message and description when provided by props', async () => {
    const wrapper = mount(CodeInputField, { propsData: { ...defaultProps, errorMessage: 'Example Error', errorDescription: 'Example Error Description' } });
    await waitForDomUpdate(wrapper);
    const errorMessageClass = wrapper.find('[data-testid="code-input-error-message"]').element.className;
    const errorDescriptionClass = wrapper.find('[data-testid="code-input-error-description"]').element.className;
    const hasErrorMessage = errorMessageClass.includes('error');
    const hasErrorDescription = errorDescriptionClass.includes('error');
    const hasErrors = (hasErrorMessage && hasErrorDescription);
    expect(hasErrors).toBeTruthy();
  });

  it('Should NOT show error message or description if not provided by props', async () => {
    const wrapper = mount(CodeInputField, { propsData: { ...defaultProps } });
    await waitForDomUpdate(wrapper);
    const doesNotHaveErrorMessage = !wrapper.find('[data-testid="code-input-error-message"]').exists();
    const doesNotHaveErrorDescription = !wrapper.find('[data-testid="code-input-error-description"]').exists();
    const doesNotHaveErrors = (doesNotHaveErrorMessage && doesNotHaveErrorDescription);
    expect(doesNotHaveErrors).toBeTruthy();
  });

  it('Should emit readyToCheckChanged if all digits are filled', async () => {
    const wrapper = mount(CodeInputField, { propsData: { ...defaultProps } });
    await waitForDomUpdate(wrapper);
    const inputField = wrapper.find('[data-testid="code-input"]');
    inputField.element.setAttribute('value', '1');
    inputField.trigger('input');
    await waitForDomUpdate(wrapper);
    inputField.element.setAttribute('value', '12');
    inputField.trigger('input');
    await waitForDomUpdate(wrapper);
    inputField.element.setAttribute('value', '123');
    inputField.trigger('input');
    await waitForDomUpdate(wrapper);
    inputField.element.setAttribute('value', '1234');
    inputField.trigger('input');
    await waitForDomUpdate(wrapper);
    inputField.element.setAttribute('value', '12345');
    inputField.trigger('input');
    await waitForDomUpdate(wrapper);
    inputField.element.setAttribute('value', '123456');
    inputField.trigger('input');
    await waitForDomUpdate(wrapper);
    await waitForDomUpdate(wrapper);
    const wasReadyToCheckChangedEventEmitted = wrapper.emitted().readyToCheckChanged;
    expect(wasReadyToCheckChangedEventEmitted).toBeTruthy();
  });
});
