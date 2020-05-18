import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import ToggleSwitch from './ToggleSwitch.vue';

// TODO: Uncomment the below test cases after refactoring to work with Vue
describe('UI/forms/ToggleSwitch', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  it('Should be checked if given checked prop is set to true', () => {
    const { getByTestId } = render(ToggleSwitch, { propsData: { value: true } });
    const inputIsChecked = getByTestId('toggle-wrapper').className.includes('checked');
    expect(inputIsChecked).toBeTruthy();
  });

  it('Should be unchecked if given checked prop is set to true', () => {
    const { getByTestId } = render(ToggleSwitch, { propsData: { value: false } });
    const inputIsNotChecked = !getByTestId('toggle-wrapper').className.includes('checked');
    expect(inputIsNotChecked).toBeTruthy();
  });

  it('Should be unchecked by default if no checked prop is given', () => {
    const { getByTestId } = render(ToggleSwitch);
    const inputIsNotChecked = !getByTestId('toggle-wrapper').className.includes('checked');
    expect(inputIsNotChecked).toBeTruthy();
  });

  it('Should emit a input event when is checked/unchecked', async () => {
    const wrapper = mount(ToggleSwitch, { propsData: { value: true } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.isChecked.call(wrapper.vm);
    await wrapper.vm.$nextTick();
    const emittedInput = wrapper.emitted().input;
    expect(emittedInput).toBeTruthy();
  });

  it('Should emit current value when is checked/unchecked', async () => {
    const wrapper = mount(ToggleSwitch, { propsData: { value: true } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.isChecked.call(wrapper.vm);
    await wrapper.vm.$nextTick();
    const currentValueEmitted = wrapper.emitted().input[0][0];
    expect(currentValueEmitted).toBeTruthy();
  });

  it('Should takes given value', async () => {
    const wrapper = mount(ToggleSwitch, { propsData: { value: true } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.value.call(wrapper.vm);
    await wrapper.vm.$nextTick();
    const takesGivenValue = wrapper.vm.$data.isChecked;
    expect(takesGivenValue).toBeTruthy();
  });
});
