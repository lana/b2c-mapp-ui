import { shallowMount } from '@vue/test-utils';

import Confetti from './Confetti.vue';

describe('Confetti unit test', () => {
  const waitForDomUpdate = async (wrapper) => {
    await wrapper.vm.$nextTick();
    await wrapper.vm.$forceUpdate();
  };

  it('Should pass health-check test', async () => {
    const wrapper = shallowMount(Confetti);
    await waitForDomUpdate(wrapper);
    expect(wrapper).toMatchSnapshot();
  });
});
