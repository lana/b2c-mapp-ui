import { render, fireEvent } from '@testing-library/vue';

import CopyableListItem from './CopyableListItem.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('CopyableListItem unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  const defaultProps = {
    title: 'title',
    text: 'text',
  };

  const defaultSlot = '<img data-testid="icon" src="https://source.unsplash.com/random/24x24" />';

  it('Should show given title', () => {
    const { getByTestId } = render(CopyableListItem, { slots: { default: defaultSlot }, props: { ...defaultProps, hideButton: false } });
    const titleIsShown = getByTestId('copyable-list-item-title').textContent?.includes('title');
    expect(titleIsShown).toBeTruthy();
  });

  it('Should show given text to be copied', () => {
    const { getByTestId } = render(CopyableListItem, { slots: { default: defaultSlot }, props: { ...defaultProps, hideButton: false } });
    const textToBeCopiedIsShown = getByTestId('copyable-list-item-text').textContent?.includes('text');
    expect(textToBeCopiedIsShown).toBeTruthy();
  });

  it('Should display copy to clipboard button if hide property is false for given option', () => {
    const { queryAllByTestId } = render(CopyableListItem, { slots: { default: defaultSlot }, props: { ...defaultProps, hideButton: false } });
    const buttonExists = queryAllByTestId('copyable-list-item-copy-to-clipboard-button-button').length;
    expect(buttonExists).toBeTruthy();
  });

  it('Should NOT display copy to clipboard button if hide property is true for given option', () => {
    const { queryAllByTestId } = render(CopyableListItem, { slots: { default: defaultSlot }, props: { ...defaultProps, hideButton: true } });
    const buttonNotExists = !queryAllByTestId('copyable-list-item-copy-to-clipboard-button-button').length;
    expect(buttonNotExists).toBeTruthy();
  });

  it('Should display copy to clipboard button if hide property is NOT given in option', () => {
    const { queryAllByTestId } = render(CopyableListItem, { slots: { default: defaultSlot }, props: { ...defaultProps } });
    const buttonExists = queryAllByTestId('copyable-list-item-copy-to-clipboard-button-button').length;
    expect(buttonExists).toBeTruthy();
  });

  it('should emit an event when is clicked', () => {
    const { getByTestId, emitted } = render(CopyableListItem, { slots: { default: defaultSlot }, props: { ...defaultProps } });
    const element = getByTestId('copyable-list-item-copy-to-clipboard-button-button');
    fireEvent.click(element);
    const isEmitted = emitted();
    expect(isEmitted).toBeTruthy();
  });
});
