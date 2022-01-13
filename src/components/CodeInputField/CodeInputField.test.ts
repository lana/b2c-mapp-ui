import type { VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';

import CodeInputField from './CodeInputField.vue';
import { availableTypesLookup } from './CodeInputField';
import { silenceInnerComponentWarnings } from '../../lib/testUtils';

describe('CodeInputField unit test', () => {
  const waitForDomUpdate = async (wrapper: VueWrapper) => {
    await wrapper.vm.$nextTick();
    await wrapper.vm.$forceUpdate();
  };

  beforeAll(() => {
    silenceInnerComponentWarnings(jest);
  });

  const defaultProps = {
    type: availableTypesLookup.smsCode,
  };

  it('Should have as many filled input fields as typed digits', async () => {
    const wrapper = mount(CodeInputField, { props: { ...defaultProps, modelValue: '12345' } });
    await waitForDomUpdate(wrapper);
    const digitFields = await wrapper.findAll('[data-testid="code-input-field"]');
    const isFirstDigitFilled = digitFields[0]?.element.textContent?.includes('1');
    const isSecondDigitFilled = digitFields[1]?.element.textContent?.includes('2');
    const isThirdDigitFilled = digitFields[2]?.element.textContent?.includes('3');
    const isFourthDigitFilled = digitFields[3]?.element.textContent?.includes('4');
    const isFifthDigitFilled = digitFields[4]?.element.textContent?.includes('5');
    const areAllDigitFieldsFilled = isFirstDigitFilled
      && isSecondDigitFilled
      && isThirdDigitFilled
      && isFourthDigitFilled
      && isFifthDigitFilled;
    expect(areAllDigitFieldsFilled).toBeTruthy();
  });

  it('Should show error message and description when provided by props', async () => {
    const wrapper = mount(CodeInputField, { props: { ...defaultProps, errorMessage: 'Example Error', errorDescription: 'Example Error Description' } });
    await waitForDomUpdate(wrapper);
    const errorMessageClass = wrapper.find('[data-testid="code-input-error-message"]').element.className;
    const errorDescriptionClass = wrapper.find('[data-testid="code-input-error-description"]').element.className;
    const hasErrorMessage = errorMessageClass.includes('error');
    const hasErrorDescription = errorDescriptionClass.includes('error');
    const hasErrors = (hasErrorMessage && hasErrorDescription);
    expect(hasErrors).toBeTruthy();
  });

  it('Should NOT show error message or description if not provided by props', async () => {
    const wrapper = mount(CodeInputField, { props: { ...defaultProps } });
    await waitForDomUpdate(wrapper);
    const doesNotHaveErrorMessage = !wrapper.find('[data-testid="code-input-error-message"]').exists();
    const doesNotHaveErrorDescription = !wrapper.find('[data-testid="code-input-error-description"]').exists();
    const doesNotHaveErrors = (doesNotHaveErrorMessage && doesNotHaveErrorDescription);
    expect(doesNotHaveErrors).toBeTruthy();
  });

  it('Should emit readyToCheckChanged if all digits are filled', async () => {
    const wrapper = mount(CodeInputField, { props: { ...defaultProps } });
    await waitForDomUpdate(wrapper);
    const inputField = wrapper.find('[data-testid="code-input"]');
    await inputField.setValue('1');
    await waitForDomUpdate(wrapper);
    await inputField.setValue('12');
    await waitForDomUpdate(wrapper);
    await inputField.setValue('123');
    await waitForDomUpdate(wrapper);
    await inputField.setValue('1234');
    await waitForDomUpdate(wrapper);
    await inputField.setValue('12345');
    await waitForDomUpdate(wrapper);
    await inputField.setValue('123456');
    await waitForDomUpdate(wrapper);
    await waitForDomUpdate(wrapper);
    const wasReadyToCheckChangedEventEmitted = wrapper.emitted('readyToCheckChanged');
    expect(wasReadyToCheckChangedEventEmitted).toBeTruthy();
  });
});
