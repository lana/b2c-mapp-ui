import { render, fireEvent } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import SelectBox from './SelectBox.vue';

// TODO: Uncomment the below test cases after refactoring to work with Vue
describe('SelectBox unit test', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  const defaultProps = {
    options: [
      { selected: true, label: 'Option 1', value: 'option_1' },
      { selected: false, label: 'Option 2', value: 'option_2' },
    ],
    label: 'Label',
  };

  it('Should not show options if not given', () => {
    const { queryAllByTestId } = render(SelectBox, { propsData: { ...defaultProps, options: null } });
    const noOptions = !queryAllByTestId('selector-option').length;
    expect(noOptions).toBeTruthy();
  });

  it('Should not be focused initially', () => {
    const { getByTestId } = render(SelectBox, { propsData: { ...defaultProps } });
    const isNotFocused = !getByTestId('selector-label').className.includes('focus');
    expect(isNotFocused).toBeTruthy();
  });

  it('Should apply focus class if is focused', async () => {
    const wrapper = mount(SelectBox, { propsData: { ...defaultProps, isFocused: true } });
    wrapper.find('select').trigger('focus');
    await wrapper.vm.$nextTick();
    const focusClass = wrapper.find('label').classes().includes('focus');
    expect(focusClass).toBeTruthy();
  });

  it('Should remove focus class when is blurred', () => {
    const { getByTestId } = render(SelectBox, { propsData: { ...defaultProps } });
    const select = getByTestId('selector-select');
    fireEvent.focus(select);
    fireEvent.blur(select);
    const isNotFocused = !getByTestId('selector-label').className.includes('focus');
    expect(isNotFocused).toBeTruthy();
  });

  it('Should select given selected option in options if theres no given value', () => {
    const { queryAllByTestId } = render(SelectBox, { propsData: { ...defaultProps } });
    const options = queryAllByTestId('selector-option');
    const firstOptionIsSelected = options[0].getAttribute('data-selected');
    const secondOptionIsNotSelected = !options[1].getAttribute('data-selected');
    const rightOptionSelected = firstOptionIsSelected && secondOptionIsNotSelected;
    expect(rightOptionSelected).toBeTruthy();
  });

  it('Should select option based on given value', () => {
    const { queryAllByTestId, getByTestId } = render(SelectBox, { propsData: { ...defaultProps, value: 'option_2' } });
    const options = queryAllByTestId('selector-option');
    const selector = getByTestId('selector-select');
    fireEvent.focus(selector);
    const firstOptionIsNotSelected = !options[0].getAttribute('data-selected');
    const secondOptionIsSelected = options[1].getAttribute('data-selected');
    const rightOptionSelected = firstOptionIsNotSelected && secondOptionIsSelected;
    expect(rightOptionSelected).toBeTruthy();
  });

  it('Should NOT select option based on wrong given value', () => {
    const { queryAllByTestId, getByTestId } = render(SelectBox, { propsData: { ...defaultProps, value: 'wrong' } });
    const options = queryAllByTestId('selector-option');
    const selector = getByTestId('selector-select');
    fireEvent.focus(selector);
    const firstOptionIsNotSelected = !options[0].getAttribute('data-selected');
    const secondOptionIsNotSelected = !options[1].getAttribute('data-selected');
    const rightOptionSelected = firstOptionIsNotSelected && secondOptionIsNotSelected;
    expect(rightOptionSelected).toBeTruthy();
  });
});
