import { render, fireEvent } from '@testing-library/vue';

import WrappedButton from './WrappedButton.vue';

describe('WrappedButton', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  const defaultProps = {
    onClick: () => {},
  };

  it('Should wrap a Button with a section', () => {
    const { getByTestId } = render(WrappedButton, { propsData: { ...defaultProps } });
    const sectionWrapperExist = getByTestId('button-wrapped-wrapper');
    expect(sectionWrapperExist).toBeTruthy();
  });

  it('Should apply given type to button', () => {
    const { getByTestId } = render(WrappedButton, { propsData: { ...defaultProps, type: 'primary' } });
    const applyGivenType = getByTestId('button-wrapped-button').className.includes('primary');
    expect(applyGivenType).toBeTruthy();
  });

  it('Should add extra class if given', () => {
    const { getByTestId } = render(WrappedButton, { propsData: { ...defaultProps, class: 'myClassName' } });
    const extraClassApplied = getByTestId('button-wrapped-wrapper').className.includes('myClassName');
    expect(extraClassApplied).toBeTruthy();
  });

  it('Should emit click event when its clicked', () => {
    const { getByTestId, emitted } = render(WrappedButton, { propsData: { ...defaultProps } });
    const button = getByTestId('button-wrapped-button');
    fireEvent.click(button);
    const clickEventEmitted = emitted().click;
    expect(clickEventEmitted).toBeTruthy();
  });
});
