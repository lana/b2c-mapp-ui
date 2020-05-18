import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import TextField from './TextField.vue';

// TODO: Consolidate and refactor any tests from the old `TextFieldWithValidation` component into this file too

// TODO: Uncomment the below test cases after refactoring to work with Vue
describe('UI/forms/TextField', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });
  const defaultProps = {
    placeholder: 'Placeholder',
  };

  it('Should NOT be empty if given value is provided', async () => {
    const givenValue = 'given value';
    const wrapper = mount(TextField, { propsData: { ...defaultProps, value: givenValue } });
    await wrapper.vm.$nextTick();
    const takesGivenValue = wrapper.vm.$data.inputValue === givenValue;
    expect(takesGivenValue).toBeTruthy();
  });

  it('Should not take value with greater length than maxlengthgit ', async () => {
    const givenValue = 'given value';
    const wrapper = mount(TextField, { propsData: { ...defaultProps, value: givenValue } });
    await wrapper.vm.$nextTick();
    const takesGivenValue = wrapper.vm.$data.inputValue === givenValue;
    expect(takesGivenValue).toBeTruthy();
  });

  //
  // it('Should NOT be empty if given value is provided', async () => {
  //   const wrapper = mount(TextField, { propsData: { ...defaultProps, value: 'Text value' } });
  //   await wrapper.vm.$nextTick();
  //   const isNotEmpty = wrapper.find('input').element.textContent === 'Text value';
  //   expect(isNotEmpty).toBeTruthy();
  // });
  //
  // it('Should show error label if errorlabel is given', async () => {
  //   const wrapper = mount(TextField, { propsData: { ...defaultProps, value: 'Text value', errorLabel: 'error label' } });
  //   await wrapper.vm.$nextTick();
  //   const hasError = wrapper.find('label').element.className.includes('error');
  //   expect(hasError).toBeTruthy();
  // });

  it('Should call given onBlur when text field is blurred', () => {
  });

  it('Should call given onBlur, providing event as param, when text field is changed', () => {
  });
});
