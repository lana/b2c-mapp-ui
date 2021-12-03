import { mount } from '@vue/test-utils';
import { render } from '@testing-library/vue';

import RadioList from './RadioList.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

jest.useFakeTimers();
describe('UI/forms/RadioList', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  const defaultProps = {
    options: [
      { selected: true, label: 'Option 1', value: 'option_1' },
      { value: 'option_2', children: '<span data-testid="option-children">Ok</span>' },
    ],
    id: 'selId',
    title: 'Title',
  };

  it('Should any option is visible if they are not provided', () => {
    const { queryAllByTestId } = render(RadioList, { props: { ...defaultProps, options: null } });
    const selectedOptions = queryAllByTestId('selection-list-option');
    const noOptionsShown = !selectedOptions.length;
    expect(noOptionsShown).toBeTruthy();
  });

  it('Should NOT apply selected given option initially as selected if theres a given value', () => {
    const { queryAllByTestId } = render(RadioList, { props: { ...defaultProps, modelValue: 'option_2' } });
    const selectedOptions = queryAllByTestId('selection-list-option');
    const firstOptionIsNotSelectedByDefault = !selectedOptions[0].getAttribute('data-checked');
    expect(firstOptionIsNotSelectedByDefault).toBeTruthy();
  });

  it('Should apply selected given value', async () => {
    const givenValue = 'option_2';
    const wrapper = mount(RadioList, { props: { ...defaultProps, modelValue: givenValue } });
    await wrapper.vm.$nextTick();
    wrapper.vm.$options.watch.modelValue.call(wrapper.vm, givenValue);
    await wrapper.vm.$nextTick();
    const appliedGivenValue = wrapper.vm.$data.selectedValue === givenValue;
    expect(appliedGivenValue).toBeTruthy();
  });

  it('Should apply selected option based on given value', () => {
    const { queryAllByTestId } = render(RadioList, { props: { ...defaultProps, modelValue: 'option_2' } });
    const selectedOptions = queryAllByTestId('selection-list-option');
    const secondOptionIsSelected = selectedOptions[1].className.includes('checked');
    expect(secondOptionIsSelected).toBeTruthy();
  });

  it('Should NOT apply selected option based on wrong given value', () => {
    const { queryAllByTestId } = render(RadioList, { props: { ...defaultProps, modelValue: 'option_x' } });
    const selectedOptions = queryAllByTestId('selection-list-option');
    const firstOptionIsNotSelected = !selectedOptions[0].getAttribute('data-checked');
    const secondOptionIsNotSelected = !selectedOptions[1].getAttribute('data-checked');
    const optionsAreNotSelected = firstOptionIsNotSelected && secondOptionIsNotSelected;
    expect(optionsAreNotSelected).toBeTruthy();
  });

  it('Should apply selected value after click on different option', async () => {
    const wrapper = mount(RadioList, { props: { ...defaultProps, modelValue: 'option_2' } });
    await wrapper.vm.$nextTick();
    const inputs = wrapper.findAll('input');
    const firstOptionInput = inputs[0];
    const options = wrapper.findAll('li');
    const firstOption = options[0];
    const secondOption = options[1];
    firstOptionInput.setChecked();
    await wrapper.vm.$nextTick();
    const firstOptionSelected = firstOption.element.className.includes('checked');
    const secondOptionNotSelected = !secondOption.element.className.includes('checked');
    const clickedOptionIsSelected = firstOptionSelected && secondOptionNotSelected;
    expect(clickedOptionIsSelected).toBeTruthy();
  });

  it('Should emit input event when option is clicked', async () => {
    const wrapper = mount(RadioList, { props: { ...defaultProps, modelValue: 'option_2' } });
    await wrapper.vm.$nextTick();
    const firstOptionInput = wrapper.findAll('input')[0];
    firstOptionInput.setChecked();
    await wrapper.vm.$nextTick();
    const clickEmitted = wrapper.emitted('update:modelValue');
    expect(clickEmitted).toBeTruthy();
  });

  it('Should provide current selected option value inside emitted input event when option is clicked', async () => {
    const wrapper = mount(RadioList, { props: { ...defaultProps, modelValue: 'option_2' } });
    await wrapper.vm.$nextTick();
    const firstOptionInput = wrapper.findAll('input')[0];
    firstOptionInput.setChecked();
    await wrapper.vm.$nextTick();
    const emittedValue = wrapper.emitted('update:modelValue')[0][0] === 'option_1';
    expect(emittedValue).toBeTruthy();
  });

  it('Should show label if is given', () => {
    const { queryAllByTestId } = render(RadioList, { props: { ...defaultProps, modelValue: 'option_2' } });
    const labels = queryAllByTestId('selection-list-option-label');
    const isShowingGivenLabel = labels.length === 1;
    expect(isShowingGivenLabel).toBeTruthy();
  });
});
