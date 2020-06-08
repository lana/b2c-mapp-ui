import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import Checkbox from './Checkbox.vue';

describe('UI/forms/Checkbox', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  it('Should be checked if given checked prop is set to true', () => {
    const { getByTestId } = render(Checkbox, { propsData: { value: true } });
    const inputIsChecked = getByTestId('checkbox-wrapper').className.includes('checked');
    expect(inputIsChecked).toBeTruthy();
  });

  it('Should be unchecked if given checked prop is set to true', () => {
    const { getByTestId } = render(Checkbox, { propsData: { value: false } });
    const inputIsNotChecked = !getByTestId('checkbox-wrapper').className.includes('checked');
    expect(inputIsNotChecked).toBeTruthy();
  });

  it('Should be unchecked by default if no checked prop is given', () => {
    const { getByTestId } = render(Checkbox);
    const inputIsNotChecked = !getByTestId('checkbox-wrapper').className.includes('checked');
    expect(inputIsNotChecked).toBeTruthy();
  });

  it('Should emit a input event when is checked/unchecked', async () => {
    const wrapper = mount(Checkbox, { propsData: { value: true } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.isChecked.call(wrapper.vm);
    await wrapper.vm.$nextTick();
    const emittedInput = wrapper.emitted().input;
    expect(emittedInput).toBeTruthy();
  });

  it('Should emit current value when is checked/unchecked', async () => {
    const wrapper = mount(Checkbox, { propsData: { value: true } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.isChecked.call(wrapper.vm);
    await wrapper.vm.$nextTick();
    const currentValueEmitted = wrapper.emitted().input[0][0];
    expect(currentValueEmitted).toBeTruthy();
  });

  it('Should take the given value', async () => {
    const wrapper = mount(Checkbox, { propsData: { value: true } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.value.call(wrapper.vm);
    await wrapper.vm.$nextTick();
    const takesGivenValue = wrapper.vm.$data.isChecked;
    expect(takesGivenValue).toBeTruthy();
  });
});
