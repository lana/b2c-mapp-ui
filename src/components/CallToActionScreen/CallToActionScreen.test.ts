import { mount } from '@vue/test-utils';

import CallToActionScreen from './CallToActionScreen.vue';

describe('CallToActionScreen unit test ', () => {
  const defaultProps = {
    title: 'Title',
    description: 'Description',
  };

  it('Should emit click event when call-to-action-button is clicked', async () => {
    const wrapper = mount(CallToActionScreen, { props: { ...defaultProps } });
    const button = wrapper.find('button[data-testid="button-wrapped-button"]');
    await button.trigger('click');
    const clickEventEmitted = wrapper.emitted().click;
    expect(clickEventEmitted).toBeTruthy();
  });

  it('Should not emit click event when button inside slot is clicked', async () => {
    const wrapper = mount(
      CallToActionScreen,
      {
        props: { ...defaultProps },
        slots: {
          secondaryAction: {
            methods: { onClick() { return jest.fn(); } },
            template: '<button data-testid="inner-button" @click="onClick">button</button>',
          },
        },
      },
    );
    const button = wrapper.find('button[data-testid="inner-button"]');
    await button.trigger('click');
    const clickEventEmitted = wrapper.emitted().click;
    expect(clickEventEmitted).toBeFalsy();
  });
});
