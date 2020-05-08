import { render, fireEvent } from '@testing-library/vue';

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
});
