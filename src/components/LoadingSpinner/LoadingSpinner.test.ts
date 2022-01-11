import { mount } from '@vue/test-utils';

import LoadingSpinner from './LoadingSpinner.vue';

describe('LoadingSpinner unit test', () => {
  it('Should show spinner icon', async () => {
    const wrapper = mount(LoadingSpinner);
    await wrapper.vm.$nextTick();
    const spinnerIsShown = wrapper.find('svg').exists();
    expect(spinnerIsShown).toBeTruthy();
  });
});
