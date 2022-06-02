import { mount } from '@vue/test-utils';

import SliderInput from './SliderInput.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('UI/forms/SliderInput', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });
  const defaultProps = {
    min: 0,
    max: 100,
  };

  it('Should take given value', async () => {
    const givenValue = 10;
    const wrapper = mount(SliderInput, { props: { ...defaultProps, modelValue: givenValue } });
    wrapper.vm.$options.watch.modelValue.call(wrapper.vm, givenValue);
    await wrapper.vm.$nextTick();
    const takesGivenValue = wrapper.vm.inputValue === givenValue;
    expect(takesGivenValue).toBeTruthy();
  });

  it('Should emit input event when value is given', async () => {
    const givenValue = 10;
    const wrapper = mount(SliderInput, { props: { ...defaultProps, modelValue: givenValue } });
    wrapper.vm.$options.watch.inputValue.call(wrapper.vm, givenValue);
    await wrapper.vm.$nextTick();
    const inputEventEmitted = wrapper.emitted('update:modelValue');
    expect(inputEventEmitted).toBeTruthy();
  });

  it('Should provide current input value when input event is emitted', async () => {
    const givenValue = 10;
    const wrapper = mount(SliderInput, { props: { ...defaultProps, modelValue: givenValue } });
    wrapper.vm.$options.watch.inputValue.call(wrapper.vm, givenValue);
    await wrapper.vm.$nextTick();
    const [inputValueEmitted] = wrapper.emitted('update:modelValue')?.[0] as string[];
    expect(inputValueEmitted).toBe(givenValue);
  });
});
