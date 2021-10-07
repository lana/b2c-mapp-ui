/* eslint-disable import/first */
import { mount } from '@vue/test-utils';

jest.mock('lodash-es', () => ({
  debounce: jest.fn((fn) => fn),
}));

import CarouselTestWrapper from './UnitTestWrappers/CarouselTestWrapper.vue';
import { silenceInnerComponentWarnings } from '../../lib/testUtils';

const waitForDomUpdate = async (wrapper) => {
  await wrapper.vm.$nextTick();
  await wrapper.vm.$forceUpdate();
};

window.ResizeObserver = window.ResizeObserver || jest.fn().mockImplementation(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
  unobserve: jest.fn(),
}));

describe('Carousel unit test', () => {
  beforeAll(() => {
    silenceInnerComponentWarnings(jest);
  });

  const defaultProps = {
    childAmount: 4,
    hideArrows: false,
    arrowIcons: true,
    hideNavigation: false,
  };

  it('Should find given child', async () => {
    const wrapper = mount(CarouselTestWrapper, { props: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const child = wrapper.findAll('[data-testid="carousel-wrapper"] > *');
    expect(child.length).toEqual(4);
  });

  it('Should show arrows when hideArrows is false', async () => {
    const wrapper = mount(CarouselTestWrapper, { props: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const leftArrow = wrapper.find('button[data-testid="carousel-left-arrow"]').find('.icon').exists();
    const rightArrow = wrapper.find('button[data-testid="carousel-right-arrow"]').find('.icon').exists();
    expect(leftArrow && rightArrow).toBeTruthy();
  });

  it('Should not show arrows when hideArrows is true', async () => {
    const wrapper = mount(CarouselTestWrapper, { props: { ...defaultProps, hideArrows: true } });
    await wrapper.vm.$nextTick();
    const leftArrow = wrapper.find('button[data-testid="carousel-left-arrow"]').exists();
    const rightArrow = wrapper.find('button[data-testid="carousel-right-arrow"]').exists();
    expect(leftArrow && rightArrow).toBeFalsy();
  });

  it('Should not show arrows when hideArrows is false and arrowIcons is false', async () => {
    const wrapper = mount(CarouselTestWrapper, { props: { ...defaultProps, arrowIcons: false } });
    await wrapper.vm.$nextTick();
    const leftArrow = wrapper.find('button[data-testid="carousel-left-arrow"]').find('.icon').exists();
    const rightArrow = wrapper.find('button[data-testid="carousel-right-arrow"]').find('.icon').exists();
    expect(leftArrow && rightArrow).toBeFalsy();
  });

  it('Should have left arrow disabled on value 0', async () => {
    const wrapper = mount(CarouselTestWrapper, { props: { ...defaultProps, modelValue: 0 } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const leftArrowDisabled = wrapper.find('button[data-testid="carousel-left-arrow"]').attributes('disabled');
    expect(leftArrowDisabled).toBeDefined();
  });
  it('Should have right arrow enabled on value 0', async () => {
    const wrapper = mount(CarouselTestWrapper, { props: { ...defaultProps, modelValue: 0 } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const rightArrowDisabled = wrapper.find('button[data-testid="carousel-right-arrow"]').attributes('disabled');
    expect(rightArrowDisabled).toBeFalsy();
  });
  it('Should have right arrow disabled on value 3', async () => {
    const wrapper = mount(CarouselTestWrapper, { props: { ...defaultProps, modelValue: 3 } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const rightArrowDisabled = wrapper.find('button[data-testid="carousel-right-arrow"]').attributes('disabled');
    expect(rightArrowDisabled).toBeDefined();
  });
  it('Should have left arrow enabled on value 3', async () => {
    const wrapper = mount(CarouselTestWrapper, { props: { ...defaultProps, modelValue: 3 } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const leftArrowDisabled = wrapper.find('button[data-testid="carousel-left-arrow"]').attributes('disabled');
    expect(leftArrowDisabled).toBeFalsy();
  });

  it('Should show navigation when hideNavigation is false', async () => {
    const wrapper = mount(CarouselTestWrapper, { props: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const navigation = wrapper.find('div[data-testid="carousel-navigation"]').exists();
    expect(navigation).toBeTruthy();
  });
  it('Should not show navigation when hideNavigation is true', async () => {
    const wrapper = mount(CarouselTestWrapper, { props: { ...defaultProps, hideNavigation: true } });
    await wrapper.vm.$nextTick();
    const navigation = wrapper.find('div[data-testid="carousel-navigation"]').exists();
    expect(navigation).toBeFalsy();
  });

  it('Should have second navigation item with class active for value 1', async () => {
    const wrapper = mount(CarouselTestWrapper, { props: { ...defaultProps, modelValue: 1 } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const navigationItemClasses = wrapper.findAll('button[data-testid="carousel-navigation-item"]')[1].find('span').classes();
    expect(navigationItemClasses).toContain('active');
  });

  it('Should emit value = 1 when right arrow is clicked', async () => {
    const wrapper = mount(CarouselTestWrapper, { props: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const rightArrow = wrapper.find('button[data-testid="carousel-right-arrow"]');
    rightArrow.trigger('click');
    await waitForDomUpdate(wrapper);
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(1);
  });
  it('Should emit value = 0 when left arrow is clicked and initial value is 1', async () => {
    const wrapper = mount(CarouselTestWrapper, { props: { ...defaultProps, modelValue: 1 } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const leftArrow = wrapper.find('button[data-testid="carousel-left-arrow"]');
    leftArrow.trigger('click');
    await waitForDomUpdate(wrapper);
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(0);
  });
  it('Should emit value = 2 when third navigation button is clicked', async () => {
    const wrapper = mount(CarouselTestWrapper, { props: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const navigationItem = wrapper.findAll('button[data-testid="carousel-navigation-item"]')[2];
    navigationItem.trigger('click');
    await waitForDomUpdate(wrapper);
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(2);
  });
});
