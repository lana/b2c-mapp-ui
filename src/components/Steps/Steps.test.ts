import { mount } from '@vue/test-utils';

import Steps from './Steps.vue';

describe('Steps', () => {
  it('Should show given children', () => {
    const wrapper = mount(Steps, { slots: { default: '<div /><div />' } });
    const stepsChildren = wrapper.findAll('[data-testid="steps"] *');
    expect(stepsChildren.length).toBe(2);
  });
});
