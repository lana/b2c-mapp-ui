import { shallowMount, config } from '@vue/test-utils';
import { render, fireEvent } from '@testing-library/vue';

import ActionItem from './ActionItem.vue';

// TODO: Remove this config for new versions of test-utils

describe('UI/lists/ActionItem', () => {
  const defaultClassname = 'CLASSNAME';
  const defaultProps = {
    dataTestId: 'action-item',
    class: defaultClassname,
    color: 'blue',
    highlight: true,
    title: 'TITLE',
  };

  beforeAll(() => {
    config.showDeprecationWarnings = false;
    config.silent = true;
    console.error = jest.fn();
  });

  it('Should apply given className class', () => {
    const wrapper = shallowMount(ActionItem, { slots: { default: '<img src=""/>' }, propsData: { ...defaultProps } });
    expect(wrapper.classes()).toContain(defaultClassname);
  });

  it('Should display action-item-mediacolor if default slot is provided', () => {
    const { queryAllByTestId } = render(ActionItem, { slots: { default: '<img src=""/>' }, propsData: { ...defaultProps } });
    const mediaColorDisplayed = queryAllByTestId('action-item-mediacolor').length;
    expect(mediaColorDisplayed).toBeTruthy();
  });

  it('Should apply color given by prop to class if default slot is given to action-item-mediacolor', () => {
    const { getByTestId } = render(ActionItem, { slots: { default: '<img src=""/>' }, propsData: { ...defaultProps } });
    const hasGivenColorClass = getByTestId('action-item-mediacolor').className.includes('blue');
    expect(hasGivenColorClass).toBeTruthy();
  });

  it('Should not display action-item-mediacolor if default slot is not provided', () => {
    const { queryAllByTestId } = render(ActionItem, { propsData: { ...defaultProps } });
    const mediaColorNotDisplayed = !queryAllByTestId('action-item-mediacolor').length;
    expect(mediaColorNotDisplayed).toBeTruthy();
  });

  it('Should apply given highlight class to inner text', () => {
    const { getByTestId } = render(ActionItem, { propsData: { ...defaultProps } });
    const highlightApplied = getByTestId('action-item-highlight').className.includes('highlight');
    expect(highlightApplied).toBe(true);
  });

  it('Should NOT apply given highlight class to action-item-highlight if highlight is NOT given', () => {
    const { getByTestId } = render(ActionItem, { propsData: { ...defaultProps, highlight: false } });
    const highlightNotApplied = !getByTestId('action-item-highlight').className.includes('highlight');
    expect(highlightNotApplied).toBeTruthy();
  });

  it('should trigger components onClick', () => {
    const { getByTestId, emitted } = render(ActionItem, { propsData: { ...defaultProps } });
    const element = getByTestId('action-item');
    fireEvent.click(element);
    const isEmitted = emitted();
    expect(isEmitted).toBeTruthy();
  });
});
