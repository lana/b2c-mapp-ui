import { render, fireEvent } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import BoxContentItem from './BoxContentItem.vue';

describe('BoxContentItem unit test', () => {
  const defaultProps = {
    dataTestId: 'box-content-item',
    title: 'TITLE',
    metaText: 'META',
    disabled: false,
  };

  it('Should NOT show box-content-item-media-icon if media content its not given', () => {
    const { queryAllByTestId } = render(BoxContentItem, { props: { ...defaultProps } });
    const mediaIconNotVisible = queryAllByTestId('box-content-item-media-icon').length === 0;
    expect(mediaIconNotVisible).toBeTruthy();
  });

  it('Should show given media content', () => {
    const { getByTestId } = render(BoxContentItem, { slots: { default: "<img src='any' alt=''/>" }, props: { ...defaultProps } });
    const mediaIconVisible = getByTestId('box-content-item-media-icon');
    expect(mediaIconVisible).toBeTruthy();
  });

  it('Should show given meta info', () => {
    const { getByTestId } = render(BoxContentItem, { props: { ...defaultProps } });
    const metaInfoExist = getByTestId('box-content-item-meta-text').textContent?.includes('META');
    expect(metaInfoExist).toBeTruthy();
  });

  it('Should NOT show meta information if is not given', () => {
    const { queryAllByTestId } = render(BoxContentItem, { props: { ...defaultProps, metaText: null } });
    const metaInfoNotExist = queryAllByTestId('box-content-item-meta-text').length === 0;
    expect(metaInfoNotExist).toBeTruthy();
  });

  it('Should emit click event when box-content-item is clicked', () => {
    const { getByTestId, emitted } = render(BoxContentItem, { props: { ...defaultProps } });
    const li = getByTestId('box-content-item');
    fireEvent.click(li);
    const clicked = emitted().click;
    expect(clicked).toBeTruthy();
  });

  it('Should NOT emit click event when box-content-item is clicked and its disabled', () => {
    const { getByTestId, emitted } = render(BoxContentItem, { props: { ...defaultProps, disabled: true } });
    const li = getByTestId('box-content-item');
    fireEvent.click(li);
    const clicked = emitted().click;
    expect(clicked).not.toBeTruthy();
  });

  it('Should show success state if success prop is provided', () => {
    const wrapper = mount(BoxContentItem, { props: { ...defaultProps, success: true } });
    const successStateIsApplied = wrapper.find('[data-testid="box-content-item"]').classes().includes('success');
    expect(successStateIsApplied).toBeTruthy();
  });

  it('Should NOT emit click event when box-content-item is clicked and it has success state', () => {
    const { getByTestId, emitted } = render(BoxContentItem, { props: { ...defaultProps, success: true } });
    const li = getByTestId('box-content-item');
    fireEvent.click(li);
    const clicked = emitted().click;
    expect(clicked).not.toBeTruthy();
  });

  it('Should show custom title', () => {
    const { getByTestId } = render(
      BoxContentItem,
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
      BoxContentItem,
      {
        slots: { customMetaText: '<span data-testid="custom-meta-text">Text <br />newline</span>' },
        props: { ...defaultProps },
      },
    );
    const customMetaTextVisible = getByTestId('custom-meta-text');
    expect(customMetaTextVisible).toBeTruthy();
  });
});
