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
    const wrapper = mount(AmountInput, { propsData: { ...defaultProps, value: newValue, decimal: 0 } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.currencyValue.call(wrapper.vm, newValue);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.inputValue).toBe(newValue);
  });

  it('Should emit input event when value changed', async () => {
    const wrapper = mount(AmountInput, { propsData: { ...defaultProps, value: '' } });
    await wrapper.vm.$nextTick();
    wrapper.find('input').setValue('1234');
    await wrapper.vm.$nextTick();
    const inputEventIsEmitted = wrapper.emitted().input;
    expect(inputEventIsEmitted).toBeTruthy();
  });

  it('Should show given symbol', async () => {
    const wrapper = mount(AmountInput, { propsData: { ...defaultProps, symbol: '€' } });
    await wrapper.vm.$nextTick();
    const symbolText = wrapper.find('div[data-testid="amount-input-container"] .symbol').text();
    expect(symbolText).toBe('€');
  });

  it('Should provide current input value in the input event when value changed', async () => {
    const givenValue = '123';
    const wrapper = mount(AmountInput, { propsData: { ...defaultProps, value: '', decimal: 0 } });
    await wrapper.vm.$nextTick();
    wrapper.find('input').setValue(givenValue);
    await wrapper.vm.$nextTick();
    const inputEventValue = wrapper.emitted().input[0][0];
    const inputEmittedValueIsCurrent = (inputEventValue.includes(givenValue));
    expect(inputEmittedValueIsCurrent).toBeTruthy();
  });

  it('Should emit blur event when is blurred', async () => {
    const wrapper = mount(AmountInput, { propsData: { ...defaultProps, value: '' } });
    await wrapper.vm.$nextTick();
    wrapper.find('div[data-testid="amount-input-input"]').trigger('blur');
    const blurEvent = wrapper.emitted().blur;
    expect(blurEvent).toBeTruthy();
  });

  it('Should emit focus event when is focused', async () => {
    const wrapper = mount(AmountInput, { propsData: { ...defaultProps, value: '' } });
    await wrapper.vm.$nextTick();
    wrapper.find('div[data-testid="amount-input-input"]').trigger('focus');
    const focusEvent = wrapper.emitted().focus;
    expect(focusEvent).toBeTruthy();
  });
});
