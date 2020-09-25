import { mount } from '@vue/test-utils';

import FormField from './FormField.vue';
import WithErrorFormFieldWrapper from './UnitTestWrappers/WithErrorFormFieldWrapper.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('FormField unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });
  const defaultProps = {
    name: 'my-input',
    label: 'Placeholder',
    type: 'text',
  };

  it('Should apply given value', async () => {
    const newValue = '123';
    const wrapper = mount(FormField, { propsData: { ...defaultProps, value: newValue } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.value.call(wrapper.vm, newValue);
    await wrapper.vm.$nextTick();
    const appliedValue = wrapper.vm.$data.inputValue === newValue;
    expect(appliedValue).toBeTruthy();
  });

  it('Should have focus class if focus is triggered', async () => {
    const wrapper = mount(FormField, { propsData: { ...defaultProps } });
    const inputField = wrapper.find('input');
    const fieldContainer = wrapper.find('.field-container');
    inputField.trigger('focus');
    await wrapper.vm.$forceUpdate();
    const hasFocusClass = fieldContainer.element.className.includes('focus');
    expect(hasFocusClass).toBeTruthy();
  });

  it('Should NOT have focus class if not focused', () => {
    const wrapper = mount(FormField, { propsData: { ...defaultProps } });
    const noFocusClass = !wrapper.find('label[data-testid="field-label"]').element.className.includes('focus');
    expect(noFocusClass).toBeTruthy();
  });

  it('Should emit focus event if startFocused is true', async () => {
    const wrapper = mount(FormField, { propsData: { ...defaultProps, startFocused: true } });
    await wrapper.vm.$nextTick();
    const focusEventEmitted = wrapper.emitted().focus;
    expect(focusEventEmitted).toBeTruthy();
  });

  it('Should have labeled class if is readonly', async () => {
    const wrapper = mount(FormField, { propsData: { ...defaultProps, readonly: true, value: '3' } });
    await wrapper.vm.$nextTick();
    const labeledClass = wrapper.find('label[data-testid="field-label"]').element.className.includes('labeled');
    expect(labeledClass).toBeTruthy();
  });

  it('Should have labeled class if showPrefix is given', async () => {
    const wrapper = mount(FormField, { propsData: { ...defaultProps, showPrefix: true } });
    await wrapper.vm.$nextTick();
    const labeledClass = wrapper.find('label[data-testid="field-label"]').element.className.includes('labeled');
    expect(labeledClass).toBeTruthy();
  });

  it('Should have labeled class if value is given', async () => {
    const wrapper = mount(FormField, { propsData: { ...defaultProps, value: '3423' } });
    await wrapper.vm.$nextTick();
    const labeledClass = wrapper.find('label[data-testid="field-label"]').element.className.includes('labeled');
    expect(labeledClass).toBeTruthy();
  });

  it('Should NOT have labeled class if readOnly && showPrefix && value are not given', async () => {
    const wrapper = mount(FormField, { propsData: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const noLabeledClass = !wrapper.find('label[data-testid="field-label"]').element.className.includes('labeled');
    expect(noLabeledClass).toBeTruthy();
  });

  it('Should show given children inside field-label', async () => {
    const wrapper = mount(FormField, { slots: { default: '<span data-testid="form-field-child">Child</span>' }, propsData: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const showingChildren = wrapper.find('span[data-testid="form-field-child"]').exists();
    expect(showingChildren).toBeTruthy();
  });

  it('Should show given errorLabel as label content', async () => {
    const wrapper = mount(WithErrorFormFieldWrapper);
    await wrapper.vm.$nextTick();
    const hasError = wrapper.find('div[data-testid="field-extra-text"]').element.className.includes('error');
    expect(hasError).toBeTruthy();
  });

  it('Should show given errorLabel as label content', async () => {
    const wrapper = mount(WithErrorFormFieldWrapper);
    await wrapper.vm.$nextTick();
    const doNotHavePlaceholder = !wrapper.find('label[data-testid="field-label"]').text().includes('My Placeholder');
    expect(doNotHavePlaceholder).toBeTruthy();
  });

  it('Should emit input event when value changed', async () => {
    const wrapper = mount(FormField, { propsData: { ...defaultProps, value: '' } });
    await wrapper.vm.$nextTick();
    wrapper.find('input').element.value = '1234';
    wrapper.find('input').trigger('input');
    await wrapper.vm.$nextTick();
    const inputEventIsEmitted = wrapper.emitted().input;
    expect(inputEventIsEmitted).toBeTruthy();
  });
  it('Should provide current input value in the input event when value changed', async () => {
    const givenValue = '1234';
    const wrapper = mount(FormField, { propsData: { ...defaultProps, value: '' } });
    await wrapper.vm.$nextTick();
    wrapper.find('input').element.value = givenValue;
    wrapper.find('input').trigger('input');
    await wrapper.vm.$nextTick();
    const inputEventValue = wrapper.emitted().input[0][0];
    const inputEmittedValueIsCurrent = inputEventValue === givenValue;
    expect(inputEmittedValueIsCurrent).toBeTruthy();
  });

  it('Should emit blur event when is blurred', async () => {
    const wrapper = mount(FormField, { propsData: { ...defaultProps, value: '' } });
    await wrapper.vm.$nextTick();
    wrapper.find('input').trigger('blur');
    const blurEvent = wrapper.emitted().blur;
    expect(blurEvent).toBeTruthy();
  });

  it('Should emit focus event when is focused', async () => {
    const wrapper = mount(FormField, { propsData: { ...defaultProps, value: '' } });
    await wrapper.vm.$nextTick();
    wrapper.find('input').trigger('focus');
    const focusEvent = wrapper.emitted().focus;
    expect(focusEvent).toBeTruthy();
  });
});
