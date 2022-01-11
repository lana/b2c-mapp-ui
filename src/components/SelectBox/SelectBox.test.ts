import { render, fireEvent } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import SelectBox from './SelectBox.vue';
import { silenceInnerComponentWarnings } from '../../lib/testUtils';

describe('SelectBox unit test', () => {
  beforeAll(() => {
    silenceInnerComponentWarnings(jest);
  });

  const defaultProps = {
    options: [
      { selected: true, label: 'Option 1', value: 'option_1' },
      { selected: false, label: 'Option 2', value: 'option_2' },
    ],
    label: 'Label',
  };

  it('Should not show options if not given', () => {
    const { queryAllByTestId } = render(SelectBox, { props: { ...defaultProps, options: null } });
    const noOptions = !queryAllByTestId('selector-option').length;
    expect(noOptions).toBeTruthy();
  });

  it('Should not be focused initially', () => {
    const { getByTestId } = render(SelectBox, { props: { ...defaultProps } });
    const isNotFocused = !getByTestId('selector-label').className.includes('focus');
    expect(isNotFocused).toBeTruthy();
  });

  it('Should apply focus class if is focused', async () => {
    const wrapper = mount(SelectBox, { props: { ...defaultProps, isFocused: true } });
    await wrapper.find('select').trigger('focus');
    const focusClass = wrapper.find('div.select-box-container').classes().includes('focus');
    expect(focusClass).toBeTruthy();
  });

  it('Should remove focus class when is blurred', () => {
    const { getByTestId } = render(SelectBox, { props: { ...defaultProps } });
    const select = getByTestId('selector-select');
    fireEvent.focus(select);
    fireEvent.blur(select);
    const isNotFocused = !getByTestId('selector-label').className.includes('focus');
    expect(isNotFocused).toBeTruthy();
  });

  it('Should select given selected option in options if theres no given value', () => {
    const { queryAllByTestId } = render(SelectBox, { props: { ...defaultProps } });
    const options = queryAllByTestId('selector-option');
    const firstOptionIsSelected = options[0]?.getAttribute('data-selected') === 'true' || false;
    const secondOptionIsNotSelected = options[1]?.getAttribute('data-selected') === 'false' || false;
    const rightOptionSelected = firstOptionIsSelected && secondOptionIsNotSelected;
    expect(rightOptionSelected).toBeTruthy();
  });

  it('Should select option based on given value', () => {
    const { queryAllByTestId, getByTestId } = render(SelectBox, { props: { ...defaultProps, modelValue: 'option_2' } });
    const options = queryAllByTestId('selector-option');
    const selector = getByTestId('selector-select');
    fireEvent.focus(selector);
    const firstOptionIsNotSelected = options[0]?.getAttribute('data-selected') === 'false' || false;
    const secondOptionIsSelected = options[1]?.getAttribute('data-selected') === 'true' || false;
    const rightOptionSelected = firstOptionIsNotSelected && secondOptionIsSelected;
    expect(rightOptionSelected).toBeTruthy();
  });

  it('Should NOT select option based on wrong given value', () => {
    const { queryAllByTestId, getByTestId } = render(SelectBox, { props: { ...defaultProps, modelValue: 'wrong' } });
    const options = queryAllByTestId('selector-option');
    const selector = getByTestId('selector-select');
    fireEvent.focus(selector);
    const firstOptionIsNotSelected = options[0]?.getAttribute('data-selected') === 'false' || false;
    const secondOptionIsNotSelected = options[1]?.getAttribute('data-selected') === 'false' || false;
    const rightOptionSelected = firstOptionIsNotSelected && secondOptionIsNotSelected;
    expect(rightOptionSelected).toBeTruthy();
  });

  it('Should emit input event when value is selected', async () => {
    const wrapper = mount(SelectBox, { props: { ...defaultProps, modelValue: 'option_2' } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.selectedValue.call(wrapper.vm, 'option_2');
    await wrapper.vm.$nextTick();
    const inputEventEmitted = wrapper.emitted('update:modelValue');
    expect(inputEventEmitted).toBeTruthy();
  });

  it('Should apply given value as selectedValue', async () => {
    const givenValue = 'option_2';
    const wrapper = mount(SelectBox, { props: { ...defaultProps, modelValue: 'option_2' } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.modelValue.call(wrapper.vm, 'option_2');
    await wrapper.vm.$nextTick();
    const takesGivenValue = wrapper.vm.selectedValue === givenValue;
    expect(takesGivenValue).toBeTruthy();
  });
});
