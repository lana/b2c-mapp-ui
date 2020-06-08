import { mount } from '@vue/test-utils';

import Stepper from './Stepper.vue';

describe('Stepper unit test', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  const defaultProps = {
    value: 0,
    countOfSteps: 3,
  };

  it('Should find given steps', async () => {
    const wrapper = mount(Stepper, { propsData: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const steps = wrapper.findAll('li');
    expect(steps.length).toEqual(3);
  });

  it('Should not show steps if not provided', async () => {
    const wrapper = mount(Stepper, { propsData: { ...defaultProps, countOfSteps: 0 } });
    await wrapper.vm.$nextTick();
    const steps = wrapper.findAll('li');
    expect(steps.length).toEqual(0);
  });

  it('Should show as active the given active item', async () => {
    const wrapper = mount(Stepper, { propsData: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const activeStep = wrapper.findAll('li').at(0);
    const hasActiveClass = activeStep.element.className.includes('active');
    expect(hasActiveClass).toBeTruthy();
  });

  it('Should show title if given', () => {
    const wrapper = mount(Stepper, { propsData: { ...defaultProps, title: 'MY TITLE' } });
    const heading = wrapper.find('h1');
    const headingContainsTitle = heading.text().includes('MY TITLE');
    expect(headingContainsTitle).toBeTruthy();
  });
});
