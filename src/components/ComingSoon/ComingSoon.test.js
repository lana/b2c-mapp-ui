import { mount } from '@vue/test-utils';

import ComingSoon from './ComingSoon.vue';

describe('ComingSoon unit test ', () => {
  const defaultProps = {
    title: 'Title',
    description: 'Description',
  };

  it('Should emit close event when coming-soon-button is clicked', () => {
    const wrapper = mount(ComingSoon, { propsData: { ...defaultProps } });
    const button = wrapper.find('button[data-testid="coming-soon"]');
    button.trigger('click');
    const closeEventEmitted = wrapper.emitted().close;
    expect(closeEventEmitted).toBeTruthy();
  });
});
