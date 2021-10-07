import { mount } from '@vue/test-utils';

import Stepper from './Stepper.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('Stepper unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  const defaultProps = {
    modelValue: 0,
    countOfSteps: 3,
  };

  it('Should find given steps', async () => {
    const wrapper = mount(Stepper, { props: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const steps = wrapper.findAll('li');
    expect(steps.length).toEqual(3);
  });

  it('Should not show steps if not provided', async () => {
    const wrapper = mount(Stepper, { props: { ...defaultProps, countOfSteps: 0 } });
    await wrapper.vm.$nextTick();
    const steps = wrapper.findAll('li');
    expect(steps.length).toEqual(0);
  });

  it('Should show as active the given active item', async () => {
    const wrapper = mount(Stepper, { props: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const activeStep = wrapper.findAll('li')[0];
    const hasActiveClass = activeStep.classes().includes('active');
    expect(hasActiveClass).toBeTruthy();
  });

  it('Should show title if given', () => {
    const wrapper = mount(Stepper, { props: { ...defaultProps, title: 'MY TITLE' } });
    const heading = wrapper.find('h1');
    const headingContainsTitle = heading.text().includes('MY TITLE');
    expect(headingContainsTitle).toBeTruthy();
  });
});
