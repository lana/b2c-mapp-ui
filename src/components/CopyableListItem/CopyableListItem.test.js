import { render } from '@testing-library/vue';

import CopyableListItem from './CopyableListItem.vue';

describe('CopyableListItem unit test', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  const defaultProps = {
    title: 'title',
    text: 'text',
  };

  const defaultSlot = '<img data-testid="icon" src="https://source.unsplash.com/random/24x24" />';

  it('Should show given title', () => {
    const { getByTestId } = render(CopyableListItem, { stubs: { default: defaultSlot }, propsData: { ...defaultProps, hideButton: false } });
    const titleIsShown = getByTestId('copyable-list-item-title').textContent.includes('title');
    expect(titleIsShown).toBeTruthy();
  });

  it('Should show given text to be copied', () => {
    const { getByTestId } = render(CopyableListItem, { stubs: { default: defaultSlot }, propsData: { ...defaultProps, hideButton: false } });
    const textToBeCopiedIsShown = getByTestId('copyable-list-item-text').textContent.includes('text');
    expect(textToBeCopiedIsShown).toBeTruthy();
  });

  it('Should display copy to clipboard button if hide property is false for given option', () => {
    const { queryAllByTestId } = render(CopyableListItem, { stubs: { default: defaultSlot }, propsData: { ...defaultProps, hideButton: false } });
    const buttonExists = queryAllByTestId('copyable-list-item-copy-to-clipboard-button-button').length;
    expect(buttonExists).toBeTruthy();
  });

  it('Should NOT display copy to clipboard button if hide property is true for given option', () => {
    const { queryAllByTestId } = render(CopyableListItem, { stubs: { default: defaultSlot }, propsData: { ...defaultProps, hideButton: true } });
    const buttonNotExists = !queryAllByTestId('copyable-list-item-copy-to-clipboard-button-button').length;
    expect(buttonNotExists).toBeTruthy();
  });

  it('Should display copy to clipboard button if hide property is NOT given in option', () => {
    const { queryAllByTestId } = render(CopyableListItem, { stubs: { default: defaultSlot }, propsData: { ...defaultProps } });
    const buttonExists = queryAllByTestId('copyable-list-item-copy-to-clipboard-button-button').length;
    expect(buttonExists).toBeTruthy();
  });
});
