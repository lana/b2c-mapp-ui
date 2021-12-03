import { shallowMount } from '@vue/test-utils';

import ConfettiOverlay from './ConfettiOverlay.vue';

describe('ConfettiOverlay unit test', () => {
  const waitForDomUpdate = async (wrapper) => {
    await wrapper.vm.$nextTick();
    await wrapper.vm.$forceUpdate();
  };

  it('Should pass health-check test', async () => {
    const wrapper = shallowMount(ConfettiOverlay, {});
    await waitForDomUpdate(wrapper);
    expect(wrapper.findAll('.wrapper > *').length).toBe(80);
  });
});
