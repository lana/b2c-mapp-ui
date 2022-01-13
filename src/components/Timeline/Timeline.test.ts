import { mount } from '@vue/test-utils';

import Timeline from './Timeline.vue';

describe('Timeline', () => {
  it('Should show given children', () => {
    const wrapper = mount(Timeline, { slots: { default: '<div /><div />' } });
    const timelineChildren = wrapper.findAll('[data-testid="timeline"] *');
    expect(timelineChildren.length).toBe(2);
  });

  it('Should show custom startPoint', () => {
    const wrapper = mount(
      Timeline,
      {
        slots: { startPoint: '<span data-testid="custom-starting-point">check</span>' },
      },
    );
    const customStartingPoint = wrapper.find('[data-testid="custom-starting-point"]');
    expect(customStartingPoint).toBeTruthy();
  });
});
