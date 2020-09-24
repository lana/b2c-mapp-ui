import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import CodeInputField from './CodeInputField.vue';
import { availableTypesLookup } from './CodeInputField';
import { sleep } from '@/lib/sleepHelper';

xdescribe('CodeInputField unit test', () => { // TODO JASON: remove the `x` from this line once the tests are working
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  const defaultProps = {
    type: availableTypesLookup.smsCode,
  };

  it('Should have as many filled input fields as typed digits', async () => {
    const { findAllByTestId } = render(CodeInputField, { propsData: { ...defaultProps, value: '12345' } });
    const digitFields = await findAllByTestId('code-input-field');
    const isFirstDigitFilled = digitFields[0].text().includes('1');
    const isSecondDigitFilled = digitFields[1].text().includes('2');
    const isThirdDigitFilled = digitFields[2].text().includes('3');
    const isFourthDigitFilled = digitFields[3].text().includes('4');
    const isFifthDigitFilled = digitFields[4].text().includes('5');
    const areAllDigitFieldsFilled = isFirstDigitFilled
      && isSecondDigitFilled
      && isThirdDigitFilled
      && isFourthDigitFilled
      && isFifthDigitFilled;
    expect(areAllDigitFieldsFilled).toBeTruthy();
  });

  it('Should show error message and description when provided by props', () => {
    const { getByTestId } = render(CodeInputField, { propsData: { ...defaultProps, errorMessage: 'Example Error', errorDescription: 'Example Error Description' } });
    const errorMessageClass = getByTestId('code-input-error-message').className;
    const errorDescriptionClass = getByTestId('code-input-error-description').className;
    const hasErrorMessage = errorMessageClass.includes('error');
    const hasErrorDescription = errorDescriptionClass.includes('error');
    const hasErrors = (hasErrorMessage && hasErrorDescription);
    expect(hasErrors).toBeTruthy();
  });

  it('Should NOT show error message or description if not provided by props', () => {
    const { getByTestId } = render(CodeInputField, { propsData: { ...defaultProps } });
    const errorMessageClass = getByTestId('code-input-error-message').className;
    const errorDescriptionClass = getByTestId('code-input-error-description').className;
    const doesNotHaveErrorMessage = !errorMessageClass.includes('error');
    const doesNotHaveErrorDescription = !errorDescriptionClass.includes('error');
    const doesNotHaveErrors = (doesNotHaveErrorMessage && doesNotHaveErrorDescription);
    expect(doesNotHaveErrors).toBeTruthy();
  });

  it('Should emit readyToCheckChanged if all digits are filled', async () => {
    const component = mount(CodeInputField, { propsData: { ...defaultProps } });
    await sleep(100);
    component.vm.$data.codeInput = '1234546';
    await sleep(100);
    const wasReadyToCheckChangedEventEmitted = component.emitted().readyToCheckChanged;
    expect(wasReadyToCheckChangedEventEmitted).toBeTruthy();
  });
});
