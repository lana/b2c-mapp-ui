import { render, fireEvent } from '@testing-library/vue';

import ActionItem from './ActionItem.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('ActionItem unit test', () => {
  const defaultClassname = 'CLASSNAME';
  const defaultProps = {
    dataTestId: 'action-item',
    class: defaultClassname,
    highlight: true,
    title: 'TITLE',
  };

  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  it('Should apply given className class', () => {
    const { getByTestId } = render(ActionItem, { propsData: { ...defaultProps } });
    const hasGivenClass = getByTestId('action-item').className.includes(defaultClassname);
    expect(hasGivenClass).toBeTruthy();
  });

  it('Should display action-item-mediacolor if default slot is provided', () => {
    const { queryAllByTestId } = render(ActionItem, { slots: { default: '<img src=""/>' }, propsData: { ...defaultProps } });
    const mediaColorDisplayed = queryAllByTestId('action-item-mediacolor').length;
    expect(mediaColorDisplayed).toBeTruthy();
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

  it('should emit an event when is clicked', () => {
    const { getByTestId, emitted } = render(ActionItem, { propsData: { ...defaultProps } });
    const element = getByTestId('action-item');
    fireEvent.click(element);
    const isEmitted = emitted();
    expect(isEmitted).toBeTruthy();
  });
});
