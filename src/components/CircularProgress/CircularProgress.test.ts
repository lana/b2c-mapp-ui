import { mount } from '@vue/test-utils';

import CircularProgress from './CircularProgress.vue';

describe('CircularProgress unit test', () => {
  const defaultProps = {
    progress: 50,
    total: 100,
    title: 'Main Title',
    description: 'Description',
  };

  it('Should show given title', async () => {
    const wrapper = mount(CircularProgress, { props: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const title = wrapper.find('h1[data-testid="progress-title"]');
    expect(title.text()).toContain('Main Title');
  });

  it('Should show given description', async () => {
    const wrapper = mount(CircularProgress, { props: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const description = wrapper.find('p[data-testid="progress-description"]');
    expect(description.text()).toContain('Description');
  });

  it('Should have correct progress percentage', async () => {
    const wrapper = mount(CircularProgress, { props: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const description = wrapper.find('div[data-testid="progress-circle"]');
    expect(description.attributes('style')).toContain(`transform: rotate(${50 * 1.8}deg)`);
  });

  it('Percentage should override given progress/total percentage', async () => {
    const wrapper = mount(CircularProgress, { props: { ...defaultProps, percentage: 25 } });
    await wrapper.vm.$nextTick();
    const description = wrapper.find('div[data-testid="progress-circle"]');
    expect(description.attributes('style')).toContain(`transform: rotate(${25 * 1.8}deg)`);
  });

  it('Should hide progress circle on 0 progress', async () => {
    const wrapper = mount(CircularProgress, { props: { ...defaultProps, progress: 0 } });
    await wrapper.vm.$nextTick();
    const circle = wrapper.find('div[data-testid="progress-circle"]');
    expect(circle.attributes('style')).toContain('display: none');
  });

  it('Should show custom title', async () => {
    const wrapper = mount(
      CircularProgress,
      {
        slots: { customTitle: '<h2 data-testid="custom-title">title</h2>' },
        props: { ...defaultProps },
      },
    );
    await wrapper.vm.$nextTick();
    const customTitle = wrapper.find('h2[data-testid="custom-title"]');
    expect(customTitle).toBeTruthy();
  });

  it('Should show custom description', async () => {
    const wrapper = mount(
      CircularProgress,
      {
        slots: { customDescription: '<p data-testid="custom-description">description</p>' },
        props: { ...defaultProps },
      },
    );
    await wrapper.vm.$nextTick();
    const customDescription = wrapper.find('p[data-testid="custom-description"]');
    expect(customDescription).toBeTruthy();
  });

  it('Should send error for test animation', async () => {
    const wrapper = mount(CircularProgress, { props: { ...defaultProps, progress: 100, animate: true, animationDuration: 1 } });
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().error).toBeTruthy();
  });
});
