import { mount } from '@vue/test-utils';
import { render } from '@testing-library/vue';

import RadioList from './RadioList.vue';

// TODO: Uncomment the below test cases after refactoring to work with Vue
jest.useFakeTimers();
describe('UI/forms/RadioList', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
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
    const { queryAllByTestId } = render(RadioList, { propsData: { ...defaultProps, options: null } });
    const selectedOptions = queryAllByTestId('selection-list-option');
    const noOptionsShown = !selectedOptions.length;
    expect(noOptionsShown).toBeTruthy();
  });

  it('Should NOT apply selected given option initially as selected if theres a given value', () => {
    const { queryAllByTestId } = render(RadioList, { propsData: { ...defaultProps, value: 'option_2' } });
    const selectedOptions = queryAllByTestId('selection-list-option');
    const firstOptionIsNotSelectedByDefault = !selectedOptions[0].getAttribute('data-checked');
    expect(firstOptionIsNotSelectedByDefault).toBeTruthy();
  });

  it('Should apply selected option based on given value', () => {
    const { queryAllByTestId } = render(RadioList, { propsData: { ...defaultProps, value: 'option_2' } });
    const selectedOptions = queryAllByTestId('selection-list-option');
    const secondOptionIsSelected = selectedOptions[1].className.includes('checked');
    expect(secondOptionIsSelected).toBeTruthy();
  });

  it('Should NOT apply selected option based on wrong given value', () => {
    const { queryAllByTestId } = render(RadioList, { propsData: { ...defaultProps, value: 'option_x' } });
    const selectedOptions = queryAllByTestId('selection-list-option');
    const firstOptionIsNotSelected = !selectedOptions[0].getAttribute('data-checked');
    const secondOptionIsNotSelected = !selectedOptions[1].getAttribute('data-checked');
    const optionsAreNotSelected = firstOptionIsNotSelected && secondOptionIsNotSelected;
    expect(optionsAreNotSelected).toBeTruthy();
  });

  it('Should apply selected value after click on different option', async () => {
    const wrapper = mount(RadioList, { propsData: { ...defaultProps, value: 'option_2' } });
    await wrapper.vm.$nextTick();
    const inputs = wrapper.findAll('input');
    const firstOptionInput = inputs.at(0);
    const options = wrapper.findAll('li');
    const firstOption = options.at(0);
    const secondOption = options.at(1);
    firstOptionInput.trigger('click');
    await wrapper.vm.$nextTick();
    const firstOptionSelected = firstOption.element.className.includes('checked');
    const secondOptionNotSelected = !secondOption.element.className.includes('checked');
    const clickedOptionIsSelected = firstOptionSelected && secondOptionNotSelected;
    expect(clickedOptionIsSelected).toBeTruthy();
  });

  it('Should emit input event when option is clicked', async () => {
    const wrapper = mount(RadioList, { propsData: { ...defaultProps, value: 'option_2' } });
    await wrapper.vm.$nextTick();
    const firstOptionInput = wrapper.findAll('input').at(0);
    firstOptionInput.trigger('click');
    await wrapper.vm.$nextTick();
    const clickEmitted = wrapper.emitted().input;
    expect(clickEmitted).toBeTruthy();
  });

  it('Should provide current selected option value inside emitted input event when option is clicked', async () => {
    const wrapper = mount(RadioList, { propsData: { ...defaultProps, value: 'option_2' } });
    await wrapper.vm.$nextTick();
    const firstOptionInput = wrapper.findAll('input').at(0);
    firstOptionInput.trigger('click');
    await wrapper.vm.$nextTick();
    const emittedValue = wrapper.emitted().input[0][0] === 'option_1';
    expect(emittedValue).toBeTruthy();
  });

  it('Should show label if is given', () => {
    const { queryAllByTestId } = render(RadioList, { propsData: { ...defaultProps, value: 'option_2' } });
    const labels = queryAllByTestId('selection-list-option-label');
    const isShowingGivenLabel = labels.length === 1;
    expect(isShowingGivenLabel).toBeTruthy();
  });
});
