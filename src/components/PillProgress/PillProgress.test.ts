import { mount } from '@vue/test-utils';

import PillProgress from './PillProgress.vue';

describe('PillProgress unit test', () => {
  const defaultProps = {
    progress: 50,
    total: 100,
  };

  it('Should have correct progress percentage', async () => {
    const wrapper = mount(PillProgress, { props: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const description = wrapper.find('div[data-testid="pill-progress-progress-bar"]');
    expect(description.attributes('style')).toContain('width: 50%');
  });

  it('Percentage should override given progress/total percentage', async () => {
    const wrapper = mount(PillProgress, { props: { ...defaultProps, percentage: 25 } });
    await wrapper.vm.$nextTick();
    const description = wrapper.find('div[data-testid="pill-progress-progress-bar"]');
    expect(description.attributes('style')).toContain('width: 25%');
  });

  it('Should send error for test animation', async () => {
    const wrapper = mount(PillProgress, { props: { ...defaultProps, progress: 100, animate: true, animationDuration: 1 } });
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('error')).toBeTruthy();
  });
});
