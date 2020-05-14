import { render } from '@testing-library/vue';

import FigureCard from './FigureCard.vue';

describe('FigureCard unit test', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  const defaultProps = {
    imageSource: 'myImage.png',
    title: 'title',
  };

  it('Should set imageSource as background for figure-card-test-image:', () => {
    const { getByTestId } = render(FigureCard, { propsData: { ...defaultProps } });
    const backgroundApplied = getByTestId('figure-card-image').style.backgroundImage === 'url(myImage.png)';
    expect(backgroundApplied).toBeTruthy();
  });

  it('Should not show metaText if its not given', () => {
    const { queryAllByTestId } = render(FigureCard, { propsData: { ...defaultProps } });
    const noMetaTextShown = !queryAllByTestId('figure-card-meta').length
    expect(noMetaTextShown).toBeTruthy();
  });

  it('Should show metaText if its given', () => {
    const givenMetaText = 'metaText example';
    const { getByTestId } = render(FigureCard, { propsData: { ...defaultProps, metaText: givenMetaText } });
    const metaTextShown = getByTestId('figure-card-meta').textContent.includes(givenMetaText);
    expect(metaTextShown).toBeTruthy();
  });
});
