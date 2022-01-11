import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import ToggleSwitch from './ToggleSwitch.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('UI/forms/ToggleSwitch', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  it('Should be checked if given checked prop is set to true', () => {
    const { getByTestId } = render(ToggleSwitch, { props: { modelValue: true } });
    const inputIsChecked = getByTestId('toggle-wrapper').className.includes('checked');
    expect(inputIsChecked).toBeTruthy();
  });

  it('Should be unchecked if given checked prop is set to false', () => {
    const { getByTestId } = render(ToggleSwitch, { props: { modelValue: false } });
    const inputIsNotChecked = !getByTestId('toggle-wrapper').className.includes('checked');
    expect(inputIsNotChecked).toBeTruthy();
  });

  it('Should be unchecked by default if no checked prop is given', () => {
    const { getByTestId } = render(ToggleSwitch);
    const inputIsNotChecked = !getByTestId('toggle-wrapper').className.includes('checked');
    expect(inputIsNotChecked).toBeTruthy();
  });

  it('Should emit a input event when is checked/unchecked', async () => {
    const wrapper = mount(ToggleSwitch, { props: { modelValue: true } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.isChecked.call(wrapper.vm);
    await wrapper.vm.$nextTick();
    const emittedInput = wrapper.emitted('update:modelValue');
    expect(emittedInput).toBeTruthy();
  });

  it('Should emit current value when is checked/unchecked', async () => {
    const wrapper = mount(ToggleSwitch, { props: { modelValue: true } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.isChecked.call(wrapper.vm);
    await wrapper.vm.$nextTick();
    const [currentValueEmitted] = wrapper.emitted('update:modelValue')?.[0] as boolean[];
    expect(currentValueEmitted).toBeTruthy();
  });

  it('Should takes given value', async () => {
    const wrapper = mount(ToggleSwitch, { props: { modelValue: true } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.modelValue.call(wrapper.vm);
    await wrapper.vm.$nextTick();
    const takesGivenValue = wrapper.vm.isChecked;
    expect(takesGivenValue).toBeTruthy();
  });
});
