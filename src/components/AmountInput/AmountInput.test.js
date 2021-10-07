import { mount } from '@vue/test-utils';

import AmountInput from './AmountInput.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('AmountInput unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });
  const defaultProps = {
    name: 'my-input',
  };

  it('Should apply given value', async () => {
    const newValue = '123';
    const wrapper = mount(AmountInput, { props: { ...defaultProps, modelValue: newValue } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.currencyValue.call(wrapper.vm, newValue);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.inputValue).toBe(newValue);
  });

  it('Should emit input event when value changed', async () => {
    const wrapper = mount(AmountInput, { props: { ...defaultProps, modelValue: '' } });
    await wrapper.vm.$nextTick();
    wrapper.find('input').setValue('1234');
    await wrapper.vm.$nextTick();
    const inputEventIsEmitted = wrapper.emitted('update:modelValue');
    expect(inputEventIsEmitted).toBeTruthy();
  });

  it('Should show € symbol for EUR currency', async () => {
    const wrapper = mount(AmountInput, { props: { ...defaultProps, currency: 'EUR', locale: 'es-ES' } });
    await wrapper.vm.$nextTick();
    const symbolText = wrapper.find('div[data-testid="amount-input-container"] .symbol').text();
    expect(symbolText).toBe('€');
  });

  it('Should provide current input value in the input event when value changed', async () => {
    const givenValue = 123;
    const wrapper = mount(AmountInput, { props: { ...defaultProps, modelValue: '' } });
    await wrapper.vm.$nextTick();
    wrapper.find('input').setValue(givenValue);
    await wrapper.vm.$nextTick();
    const inputEventValue = wrapper.emitted('update:modelValue')[0][0];
    expect(inputEventValue).toBe(givenValue);
  });

  it('Should provide correct value in the input event with thousands value with CLP currency', async () => {
    const givenValue = 10000;
    const wrapper = mount(AmountInput, { props: { ...defaultProps, modelValue: '', currency: 'CLP', locale: 'es-CL' } });
    await wrapper.vm.$nextTick();
    wrapper.find('input').setValue(givenValue);
    await wrapper.vm.$nextTick();
    const inputEventValue = wrapper.emitted('update:modelValue')[0][0];
    expect(inputEventValue).toBe(givenValue);
  });

  it('Should provide correct formatted value in the input event with thousands value with CLP currency', async () => {
    const givenValue = 10000;
    const wrapper = mount(AmountInput, { props: { ...defaultProps, modelValue: '', currency: 'CLP', locale: 'es-CL' } });
    await wrapper.vm.$nextTick();
    wrapper.find('input').setValue(givenValue);
    await wrapper.vm.$nextTick();
    const formattedValueEventValue = wrapper.emitted('update:formattedValue')[0][0];
    expect(formattedValueEventValue).toBe('10,000');
  });

  it('Should emit blur event when is blurred', async () => {
    const wrapper = mount(AmountInput, { props: { ...defaultProps, modelValue: '' } });
    await wrapper.vm.$nextTick();
    wrapper.find('div[data-testid="amount-input-input"]').trigger('blur');
    const blurEvent = wrapper.emitted().blur;
    expect(blurEvent).toBeTruthy();
  });

  it('Should emit focus event when is focused', async () => {
    const wrapper = mount(AmountInput, { props: { ...defaultProps, modelValue: '' } });
    await wrapper.vm.$nextTick();
    wrapper.find('div[data-testid="amount-input-input"]').trigger('focus');
    const focusEvent = wrapper.emitted().focus;
    expect(focusEvent).toBeTruthy();
  });
});
