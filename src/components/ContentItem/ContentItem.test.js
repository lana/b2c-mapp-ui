import { render, fireEvent } from '@testing-library/vue';

import ContentItem from './ContentItem.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('ContentItem unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  const defaultProps = {
    dataTestId: 'content-item',
    title: 'TITLE',
    metaText: 'META',
    disabled: false,
  };

  it('Should NOT show content-item-media-icon if media content its not given', () => {
    const { queryAllByTestId } = render(ContentItem, { propsData: { ...defaultProps } });
    const mediaIconNotVisible = queryAllByTestId('content-item-media-icon').length === 0;
    expect(mediaIconNotVisible).toBeTruthy();
  });

  it('Should show given media content', () => {
    const { getByTestId } = render(ContentItem, { slots: { default: "<img src='any' alt=''/>" }, propsData: { ...defaultProps } });
    const mediaIconVisible = getByTestId('content-item-media-icon');
    expect(mediaIconVisible).toBeTruthy();
  });

  it('Should show given meta info', () => {
    const { getByTestId } = render(ContentItem, { propsData: { ...defaultProps } });
    const metaInfoExist = getByTestId('content-item-meta-text').textContent.includes('META');
    expect(metaInfoExist).toBeTruthy();
  });

  it('Should NOT show meta information if is not given', () => {
    const { queryAllByTestId } = render(ContentItem, { propsData: { ...defaultProps, metaText: null } });
    const metaInfoNotExist = queryAllByTestId('content-item-meta-text').length === 0;
    expect(metaInfoNotExist).toBeTruthy();
  });

  it('Should emit click event when content-item is clicked', () => {
    const { getByTestId, emitted } = render(ContentItem, { propsData: { ...defaultProps } });
    const li = getByTestId('content-item');
    fireEvent.click(li);
    const clicked = emitted().click;
    expect(clicked).toBeTruthy();
  });

  it('Should NOT emit click event when content-item is clicked and its disabled', () => {
    const { getByTestId, emitted } = render(ContentItem, { propsData: { ...defaultProps, disabled: true } });
    const li = getByTestId('content-item');
    fireEvent.click(li);
    const clicked = emitted().click;
    expect(clicked).not.toBeTruthy();
  });

  it('Should display ForwardIcon if hasForwardButton is given to true', () => {
    const { queryAllByTestId } = render(ContentItem, { propsData: { ...defaultProps, hasForwardButton: true } });
    const forwardIconExist = queryAllByTestId('content-item-forward-icon');
    expect(forwardIconExist).toBeTruthy();
  });

  it('Should display ForwardIcon if hasForwardButton is NOT given', () => {
    const { queryAllByTestId } = render(ContentItem, { propsData: { ...defaultProps } });
    const forwardIconExist = queryAllByTestId('content-item-forward-icon').length;
    expect(forwardIconExist).toBeTruthy();
  });

  it('Should NOT display ForwardIcon if hasForwardButton is given to false', () => {
    const { queryAllByTestId } = render(ContentItem, { propsData: { ...defaultProps, hasForwardButton: false } });
    const forwardIconExist = !queryAllByTestId('content-item-forward-icon').length;
    expect(forwardIconExist).toBeTruthy();
  });

  it('Should show success state if success prop is provided', () => {
    const { queryAllByTestId } = render(ContentItem, { propsData: { ...defaultProps, success: true } });
    const successIconExists = queryAllByTestId('success-content-item-forward-icon').length;
    const successStateIsApplied = queryAllByTestId('content-item')[0].className.includes('success');
    const isShowingSuccessState = successIconExists && successStateIsApplied;
    expect(isShowingSuccessState).toBeTruthy();
  });

  it('Should NOT emit click event when content-item is clicked and it has success state', () => {
    const { getByTestId, emitted } = render(ContentItem, { propsData: { ...defaultProps, success: true } });
    const li = getByTestId('content-item');
    fireEvent.click(li);
    const clicked = emitted().click;
    expect(clicked).not.toBeTruthy();
  });
});
