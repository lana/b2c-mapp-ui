import { render, fireEvent } from '@testing-library/vue';
import { mount } from '@vue/test-utils';
import { SuccessMicroillustration as Success, ChevronRightIcon } from '@lana/b2c-mapp-ui-assets';

import ContentItem from './ContentItem.vue';
import { silenceInnerComponentWarnings } from '../../lib/testUtils';

describe('ContentItem unit test', () => {
  beforeAll(() => {
    silenceInnerComponentWarnings(jest);
  });

  const defaultProps = {
    dataTestId: 'content-item',
    title: 'TITLE',
    metaText: 'META',
    disabled: false,
  };

  it('Should NOT show content-item-media-icon if media content its not given', () => {
    const { queryAllByTestId } = render(ContentItem, { props: { ...defaultProps } });
    const mediaIconNotVisible = queryAllByTestId('content-item-media-icon').length === 0;
    expect(mediaIconNotVisible).toBeTruthy();
  });

  it('Should show given media content', () => {
    const { getByTestId } = render(ContentItem, { slots: { default: "<img src='any' alt=''/>" }, props: { ...defaultProps } });
    const mediaIconVisible = getByTestId('content-item-media-icon');
    expect(mediaIconVisible).toBeTruthy();
  });

  it('Should show given meta info', () => {
    const { getByTestId } = render(ContentItem, { props: { ...defaultProps } });
    const metaInfoExist = getByTestId('content-item-meta-text').textContent?.includes('META');
    expect(metaInfoExist).toBeTruthy();
  });

  it('Should NOT show meta information if is not given', () => {
    const { queryAllByTestId } = render(ContentItem, { props: { ...defaultProps, metaText: null } });
    const metaInfoNotExist = queryAllByTestId('content-item-meta-text').length === 0;
    expect(metaInfoNotExist).toBeTruthy();
  });

  it('Should emit click event when content-item is clicked', () => {
    const { getByTestId, emitted } = render(ContentItem, { props: { ...defaultProps } });
    const li = getByTestId('content-item');
    fireEvent.click(li);
    const clicked = emitted().click;
    expect(clicked).toBeTruthy();
  });

  it('Should NOT emit click event when content-item is clicked and its disabled', () => {
    const { getByTestId, emitted } = render(ContentItem, { props: { ...defaultProps, disabled: true } });
    const li = getByTestId('content-item');
    fireEvent.click(li);
    const clicked = emitted().click;
    expect(clicked).not.toBeTruthy();
  });

  it('Should display ForwardIcon if hasForwardButton is given to true', () => {
    const { queryAllByTestId } = render(ContentItem, { props: { ...defaultProps, hasForwardButton: true } });
    const forwardIconExist = queryAllByTestId('content-item-forward-icon');
    expect(forwardIconExist).toBeTruthy();
  });

  it('Should display ForwardIcon if hasForwardButton is NOT given', () => {
    const wrapper = mount(ContentItem, { props: { ...defaultProps } });
    const forwardIcon = wrapper.findComponent(ChevronRightIcon);
    expect(forwardIcon.exists()).toBeTruthy();
  });

  it('Should NOT display ForwardIcon if hasForwardButton is given to false', () => {
    const { queryAllByTestId } = render(ContentItem, { props: { ...defaultProps, hasForwardButton: false } });
    const forwardIconExist = !queryAllByTestId('content-item-forward-icon').length;
    expect(forwardIconExist).toBeTruthy();
  });

  it('Should show success state if success prop is provided', () => {
    const wrapper = mount(ContentItem, { props: { ...defaultProps, success: true } });
    const successIconExists = wrapper.findComponent(Success).exists();
    const successStateIsApplied = wrapper.find('[data-testid="content-item"]').classes().includes('success');
    const isShowingSuccessState = successIconExists && successStateIsApplied;
    expect(isShowingSuccessState).toBeTruthy();
  });

  it('Should NOT emit click event when content-item is clicked and it has success state', () => {
    const { getByTestId, emitted } = render(ContentItem, { props: { ...defaultProps, success: true } });
    const li = getByTestId('content-item');
    fireEvent.click(li);
    const clicked = emitted().click;
    expect(clicked).not.toBeTruthy();
  });

  it('Should show custom forward icon', () => {
    const { getByTestId } = render(
      ContentItem,
      {
        slots: { forwardIcon: '<ClockColorIcon data-testid="custom-forward-icon" />' },
        props: { ...defaultProps },
        global: { stubs: ['ClockColorIcon'] },
      },
    );
    const customForwardIconVisible = getByTestId('custom-forward-icon');
    expect(customForwardIconVisible).toBeTruthy();
  });

  it('Should show custom title', () => {
    const { getByTestId } = render(
      ContentItem,
      {
        slots: { customTitle: '<b data-testid="custom-title">Bold text</b>' },
        props: { ...defaultProps },
      },
    );
    const customTitleVisible = getByTestId('custom-title');
    expect(customTitleVisible).toBeTruthy();
  });

  it('Should show custom metaText', () => {
    const { getByTestId } = render(
      ContentItem,
      {
        slots: { customMetaText: '<span data-testid="custom-meta-text">Text <br />newline</span>' },
        props: { ...defaultProps },
      },
    );
    const customMetaTextVisible = getByTestId('custom-meta-text');
    expect(customMetaTextVisible).toBeTruthy();
  });
});
