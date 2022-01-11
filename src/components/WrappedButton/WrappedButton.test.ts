import { render, fireEvent } from '@testing-library/vue';

import WrappedButton from './WrappedButton.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('WrappedButton', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  const defaultProps = {
    onClick: () => {},
  };

  it('Should wrap a Button with a section', () => {
    const { getByTestId } = render(WrappedButton, { props: { ...defaultProps } });
    const sectionWrapperExist = getByTestId('button-wrapped-wrapper');
    expect(sectionWrapperExist).toBeTruthy();
  });

  it('Should apply given type to button', () => {
    const { getByTestId } = render(WrappedButton, { props: { ...defaultProps, type: 'primary' } });
    const applyGivenType = getByTestId('button-wrapped-button').className.includes('primary');
    expect(applyGivenType).toBeTruthy();
  });

  it('Should add extra class if given', () => {
    const { getByTestId } = render(WrappedButton, { props: { ...defaultProps, class: 'myClassName' } });
    const extraClassApplied = getByTestId('button-wrapped-wrapper').className.includes('myClassName');
    expect(extraClassApplied).toBeTruthy();
  });

  it('Should emit click event when its clicked', () => {
    const { getByTestId, emitted } = render(WrappedButton, { props: { ...defaultProps } });
    const button = getByTestId('button-wrapped-button');
    fireEvent.click(button);
    const clickEventEmitted = emitted().click;
    expect(clickEventEmitted).toBeTruthy();
  });
});
