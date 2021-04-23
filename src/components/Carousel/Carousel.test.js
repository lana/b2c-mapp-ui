/* eslint-disable import/first */
import { mount } from '@vue/test-utils';

jest.mock('lodash.debounce', () => jest.fn((fn) => fn));

import CarouselTestWrapper from './UnitTestWrappers/CarouselTestWrapper.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

const waitForDomUpdate = async (wrapper) => {
  await wrapper.vm.$nextTick();
  await wrapper.vm.$forceUpdate();
};

describe('Carousel unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  const defaultProps = {
    childAmount: 4,
    hideArrows: false,
    arrowIcons: true,
    hideNavigation: false,
  };

  it('Should find given child', async () => {
    const wrapper = mount(CarouselTestWrapper, { propsData: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const child = wrapper.findAll('li[data-testid="carousel-item"]');
    expect(child.length).toEqual(4);
  });

  it('Should show arrows when hideArrows is false', async () => {
    const wrapper = mount(CarouselTestWrapper, { propsData: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const leftArrow = wrapper.find('button[data-testid="carousel-left-arrow"]').find('.icon').exists();
    const rightArrow = wrapper.find('button[data-testid="carousel-right-arrow"]').find('.icon').exists();
    expect(leftArrow && rightArrow).toBeTruthy();
  });

  it('Should not show arrows when hideArrows is true', async () => {
    const wrapper = mount(CarouselTestWrapper, { propsData: { ...defaultProps, hideArrows: true } });
    await wrapper.vm.$nextTick();
    const leftArrow = wrapper.find('button[data-testid="carousel-left-arrow"]').exists();
    const rightArrow = wrapper.find('button[data-testid="carousel-right-arrow"]').exists();
    expect(leftArrow && rightArrow).toBeFalsy();
  });

  it('Should not show arrows when hideArrows is false and arrowIcons is false', async () => {
    const wrapper = mount(CarouselTestWrapper, { propsData: { ...defaultProps, arrowIcons: false } });
    await wrapper.vm.$nextTick();
    const leftArrow = wrapper.find('button[data-testid="carousel-left-arrow"]').find('.icon').exists();
    const rightArrow = wrapper.find('button[data-testid="carousel-right-arrow"]').find('.icon').exists();
    expect(leftArrow && rightArrow).toBeFalsy();
  });

  it('Should have left arrow disabled on value 0', async () => {
    const wrapper = mount(CarouselTestWrapper, { propsData: { ...defaultProps, value: 0 } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const leftArrowDisabled = wrapper.find('button[data-testid="carousel-left-arrow"]').attributes('disabled');
    expect(leftArrowDisabled).toBeTruthy();
  });
  it('Should have right arrow enabled on value 0', async () => {
    const wrapper = mount(CarouselTestWrapper, { propsData: { ...defaultProps, value: 0 } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const rightArrowDisabled = wrapper.find('button[data-testid="carousel-right-arrow"]').attributes('disabled');
    expect(rightArrowDisabled).toBeFalsy();
  });
  it('Should have right arrow disabled on value 3', async () => {
    const wrapper = mount(CarouselTestWrapper, { propsData: { ...defaultProps, value: 3 } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const rightArrowDisabled = wrapper.find('button[data-testid="carousel-right-arrow"]').attributes('disabled');
    expect(rightArrowDisabled).toBeTruthy();
  });
  it('Should have left arrow enabled on value 3', async () => {
    const wrapper = mount(CarouselTestWrapper, { propsData: { ...defaultProps, value: 3 } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const leftArrowDisabled = wrapper.find('button[data-testid="carousel-left-arrow"]').attributes('disabled');
    expect(leftArrowDisabled).toBeFalsy();
  });

  it('Should show navigation when hideNavigation is false', async () => {
    const wrapper = mount(CarouselTestWrapper, { propsData: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    const navigation = wrapper.find('div[data-testid="carousel-navigation"]').exists();
    expect(navigation).toBeTruthy();
  });
  it('Should not show navigation when hideNavigation is true', async () => {
    const wrapper = mount(CarouselTestWrapper, { propsData: { ...defaultProps, hideNavigation: true } });
    await wrapper.vm.$nextTick();
    const navigation = wrapper.find('div[data-testid="carousel-navigation"]').exists();
    expect(navigation).toBeFalsy();
  });

  it('Should have second navigation item with class active for value 1', async () => {
    const wrapper = mount(CarouselTestWrapper, { propsData: { ...defaultProps, value: 1 } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const navigationItemClasses = wrapper.findAll('button[data-testid="carousel-navigation-item"]').at(1).find('span').classes();
    expect(navigationItemClasses).toContain('active');
  });

  it('Should emit value = 1 when right arrow is clicked', async () => {
    const wrapper = mount(CarouselTestWrapper, { propsData: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const rightArrow = wrapper.find('button[data-testid="carousel-right-arrow"]');
    rightArrow.trigger('click');
    await waitForDomUpdate(wrapper);
    const emittedValue = wrapper.emitted().input[0][0] === 1;
    expect(emittedValue).toBeTruthy();
  });
  it('Should emit value = 0 when left arrow is clicked and initial value is 1', async () => {
    const wrapper = mount(CarouselTestWrapper, { propsData: { ...defaultProps, value: 1 } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const leftArrow = wrapper.find('button[data-testid="carousel-left-arrow"]');
    leftArrow.trigger('click');
    await waitForDomUpdate(wrapper);
    const emittedValue = wrapper.emitted().input[0][0] === 0;
    expect(emittedValue).toBeTruthy();
  });
  it('Should emit value = 2 when third navigation button is clicked', async () => {
    const wrapper = mount(CarouselTestWrapper, { propsData: { ...defaultProps } });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const navigationItem = wrapper.findAll('button[data-testid="carousel-navigation-item"]').at(2);
    navigationItem.trigger('click');
    await waitForDomUpdate(wrapper);
    const emittedValue = wrapper.emitted().input[0][0] === 2;
    expect(emittedValue).toBeTruthy();
  });
});
