import type { VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';

import ConfettiOverlay from './ConfettiOverlay.vue';

describe('ConfettiOverlay unit test', () => {
  const waitForDomUpdate = async (wrapper: VueWrapper) => {
    await wrapper.vm.$nextTick();
    await wrapper.vm.$forceUpdate();
  };

  it('Should pass health-check test', async () => {
    const wrapper = mount(ConfettiOverlay, { global: { stubs: { Confetti: { template: '<div />' } } } });
    await waitForDomUpdate(wrapper);
    expect(wrapper.findAll('.wrapper > *').length).toBe(80);
  });
});
