import { mount } from '@vue/test-utils';

import LinearProgress from './LinearProgress.vue';

describe('LinearProgress unit test', () => {
  const defaultProps = {
    progress: 50,
    total: 100,
  };

  it('Should have correct progress percentage', async () => {
    const wrapper = mount(LinearProgress, { props: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const description = wrapper.find('div[data-testid="linear-progress-progress-bar"]');
    expect(description.element.style.width).toContain('50%');
  });

  it('Percentage should override given progress/total percentage', async () => {
    const wrapper = mount(LinearProgress, { props: { ...defaultProps, percentage: 25 } });
    await wrapper.vm.$nextTick();
    const description = wrapper.find('div[data-testid="linear-progress-progress-bar"]');
    expect(description.element.style.width).toContain('25%');
  });

  it('Should hide progress circle on 0 progress', async () => {
    const wrapper = mount(LinearProgress, { props: { ...defaultProps, progress: 0 } });
    await wrapper.vm.$nextTick();
    const circle = wrapper.find('div[data-testid="linear-progress-circle-bar"]');
    expect(circle.element.style.display).toContain('none');
  });

  it('Should send error for test animation', async () => {
    const wrapper = mount(LinearProgress, { props: { ...defaultProps, progress: 100, animate: true, animationDuration: 1 } });
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().error).toBeTruthy();
  });
});
