import { mount } from '@vue/test-utils';

import TextField from './TextField.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('UI/forms/TextField', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });
  const defaultProps = {
    placeholder: 'Placeholder',
  };

  it('Should NOT be empty if given value is provided', async () => {
    const givenValue = 'given value';
    const wrapper = mount(TextField, { props: { ...defaultProps, modelValue: givenValue } });
    await wrapper.vm.$nextTick();
    const takesGivenValue = wrapper.vm.$data.inputValue === givenValue;
    expect(takesGivenValue).toBeTruthy();
  });

  it('Should take given value', async () => {
    const givenValue = 'given value';
    const wrapper = mount(TextField, { props: { ...defaultProps, modelValue: givenValue } });
    wrapper.vm.$options.watch.modelValue.call(wrapper.vm, givenValue);
    await wrapper.vm.$nextTick();
    const takesGivenValue = wrapper.vm.$data.inputValue === givenValue;
    expect(takesGivenValue).toBeTruthy();
  });

  it('Should emit input event when value is given', async () => {
    const givenValue = 'given value';
    const wrapper = mount(TextField, { props: { ...defaultProps, modelValue: givenValue } });
    wrapper.vm.$options.watch.inputValue.call(wrapper.vm, givenValue);
    await wrapper.vm.$nextTick();
    const inputEventEmitted = wrapper.emitted('update:modelValue');
    expect(inputEventEmitted).toBeTruthy();
  });

  it('Should provide current input value when input event is emitted', async () => {
    const givenValue = 'given value';
    const wrapper = mount(TextField, { props: { ...defaultProps, modelValue: givenValue } });
    wrapper.vm.$options.watch.inputValue.call(wrapper.vm, givenValue);
    await wrapper.vm.$nextTick();
    const inputValueEmitted = wrapper.emitted('update:modelValue')[0][0] === givenValue;
    expect(inputValueEmitted).toBeTruthy();
  });

  it('Should emit blur event when its blurred', async () => {
    const givenValue = 'given value';
    const wrapper = mount(TextField, { props: { ...defaultProps, modelValue: givenValue } });
    wrapper.find('input').trigger('blur');
    await wrapper.vm.$nextTick();
    const blurEventEmitted = wrapper.emitted().blur;
    expect(blurEventEmitted).toBeTruthy();
  });

  it('Should emit focus event when is focused', async () => {
    const givenValue = 'given value';
    const wrapper = mount(TextField, { props: { ...defaultProps, modelValue: givenValue } });
    wrapper.find('input').trigger('focus');
    await wrapper.vm.$nextTick();
    const focusEventEmitted = wrapper.emitted().focus;
    expect(focusEventEmitted).toBeTruthy();
  });

  it('Should NOT be empty if given value is provided', async () => {
    const wrapper = mount(TextField, { props: { ...defaultProps, modelValue: 'Text value' } });
    await wrapper.vm.$nextTick();
    const isNotEmpty = wrapper.find('input').element.value === 'Text value';
    expect(isNotEmpty).toBeTruthy();
  });

  it('Should show error label if errorlabel is given', async () => {
    const wrapper = mount(TextField, { props: { ...defaultProps, modelValue: 'Text value', errorLabel: 'error label' } });
    await wrapper.vm.$nextTick();
    const hasError = wrapper.find('.field-container').element.className.includes('error');
    expect(hasError).toBeTruthy();
  });

  it('Should call given onBlur when text field is blurred', async () => {
    const wrapper = mount(TextField, { props: { ...defaultProps, modelValue: 'Text value' } });
    wrapper.find('input').trigger('blur');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted()).toHaveProperty('blur');
  });

  it('Should call given onBlur, providing event as param, when text field is changed', () => {
  });
});
