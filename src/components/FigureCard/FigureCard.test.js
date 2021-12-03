import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import FigureCard from './FigureCard.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('FigureCard unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });
  const waitForDomUpdate = async (wrapper) => {
    await wrapper.vm.$nextTick();
    await wrapper.vm.$forceUpdate();
  };
  const defaultProps = {
    imageSource: 'myImage.png',
  };

  it('Should set imageSource as background for figure-card-test-image:', () => {
    const { getByTestId } = render(FigureCard, { props: { ...defaultProps } });
    const backgroundApplied = getByTestId('figure-card-image').style.backgroundImage === 'url(myImage.png)';
    expect(backgroundApplied).toBeTruthy();
  });

  it('Should display figcaption if the title is provided:', async () => {
    const wrapper = mount(FigureCard, { props: { ...defaultProps, title: 'Some title' } });
    await waitForDomUpdate(wrapper);
    const figureCaption = wrapper.find('figcaption[data-test-id="figure-card-title"]');
    const figureCaptionIsShown = figureCaption.exists();
    expect(figureCaptionIsShown).toBeTruthy();
  });

  it('Should NOT display figcaption if the title is not provided:', async () => {
    const wrapper = mount(FigureCard, { props: { ...defaultProps } });
    await waitForDomUpdate(wrapper);
    const figureCaption = wrapper.find('figcaption[data-test-id="figure-card-title"]');
    const figureCaptionIsNotShown = !figureCaption.exists();
    expect(figureCaptionIsNotShown).toBeTruthy();
  });
});
