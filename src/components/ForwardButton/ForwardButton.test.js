import { render, fireEvent } from '@testing-library/vue';

import ForwardButton from './ForwardButton.vue';

describe('ForwardButton unit test', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  it('Should wrap a Button with a section', () => {
    const { getByTestId } = render(ForwardButton);
    const sectionWrapperExist = getByTestId('forward-section');
    expect(sectionWrapperExist).toBeTruthy();
  });

  it('Should add extra class if given', () => {
    const { getByTestId } = render(ForwardButton, { propsData: { class: 'myClassName' } });
    const extraClassApplied = getByTestId('forward-section').className.includes('myClassName');
    expect(extraClassApplied).toBeTruthy();
  });

  it('Should add given type to style classes', () => {
    const { getByTestId } = render(ForwardButton, { propsData: { type: 'primary' } });
    const extraClassApplied = getByTestId('forward-button').className.includes('primary');
    expect(extraClassApplied).toBeTruthy();
  });

  it('Should emit click event when its clicked', () => {
    const { getByTestId, emitted } = render(ForwardButton);
    const button = getByTestId('forward-button');
    fireEvent.click(button);
    const clickEmitted = emitted().click;
    expect(clickEmitted).toBeTruthy();
  });
});
