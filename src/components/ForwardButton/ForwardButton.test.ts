import { mount } from '@vue/test-utils';

import ForwardButton from './ForwardButton.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('ForwardButton unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  it('Should wrap a Button with a section', () => {
    const wrapper = mount(ForwardButton);
    const sectionWrapperExist = wrapper.find('[data-testid="forward-section"]');
    expect(sectionWrapperExist).toBeTruthy();
  });

  it('Should add extra class if given', () => {
    const wrapper = mount(ForwardButton, { props: { class: 'myClassName' } });
    const extraClassApplied = wrapper.find('[data-testid="forward-section"]').classes().includes('myClassName');
    expect(extraClassApplied).toBeTruthy();
  });

  it('Should emit click event when its clicked', async () => {
    const wrapper = mount(ForwardButton);
    const button = wrapper.find('[data-testid="forward-button"]');
    await button.trigger('click');
    const clickEmitted = wrapper.emitted('click');
    expect(clickEmitted).toBeTruthy();
  });
});
