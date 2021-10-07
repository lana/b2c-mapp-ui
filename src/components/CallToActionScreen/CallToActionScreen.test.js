import { mount } from '@vue/test-utils';

import CallToActionScreen from './CallToActionScreen.vue';

describe('CallToActionScreen unit test ', () => {
  const defaultProps = {
    title: 'Title',
    description: 'Description',
  };

  it('Should emit click event when call-to-action-button is clicked', () => {
    const wrapper = mount(CallToActionScreen, { props: { ...defaultProps } });
    const button = wrapper.find('button[data-testid="button-wrapped-button"]');
    button.trigger('click');
    const clickEventEmitted = wrapper.emitted().click;
    expect(clickEventEmitted).toBeTruthy();
  });
});
