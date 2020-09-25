import { render, fireEvent } from '@testing-library/vue';

import ForwardButton from './ForwardButton.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('ForwardButton unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
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

  it('Should emit click event when its clicked', () => {
    const { getByTestId, emitted } = render(ForwardButton);
    const button = getByTestId('forward-button');
    fireEvent.click(button);
    const clickEmitted = emitted().click;
    expect(clickEmitted).toBeTruthy();
  });
});
