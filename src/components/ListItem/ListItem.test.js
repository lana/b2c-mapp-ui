import { render, fireEvent } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import ListItem from './ListItem.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('ListItem', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  const defaultProps = {
    title: 'Main Title',
  };

  describe('General behavior', () => {
    it('Should show given title', () => {
      const { getByTestId } = render(ListItem, { propsData: { ...defaultProps } });
      const titleExists = getByTestId('heading').textContent.includes('Main Title');
      expect(titleExists).toBeTruthy();
    });

    it('Should show given description if given', () => {
      const { getByTestId } = render(ListItem, { propsData: { ...defaultProps, description: 'desc' } });
      const descriptionExists = getByTestId('list-item-description').textContent.includes('desc');
      expect(descriptionExists).toBeTruthy();
    });

    it('Should not show empty description if not given', () => {
      const { queryAllByTestId } = render(ListItem, { propsData: { ...defaultProps } });
      const descriptionNotExists = queryAllByTestId('list-item-description').length === 0;
      expect(descriptionNotExists).toBeTruthy();
    });

    it('Should show given icon if given', () => {
      const { queryAllByTestId } = render(ListItem, { slots: { default: '<span data-testid="list-item-icon">Icon</span>' }, propsData: { ...defaultProps } });
      const iconExists = queryAllByTestId('list-item-icon').length;
      expect(iconExists).toBeTruthy();
    });

    it('Should not show icon if not given', () => {
      const { queryAllByTestId } = render(ListItem, { propsData: { ...defaultProps } });
      const iconNotExists = !queryAllByTestId('list-item-icon').length;
      expect(iconNotExists).toBeTruthy();
    });
  });

  describe('Link heading behavior', () => {
    const withLinkProps = {
      ...defaultProps,
      linkTitle: 'link text',
    };

    it('Should not show list-item-heading-link if linkTitle is not given', () => {
      const { queryAllByTestId } = render(ListItem, { propsData: { ...defaultProps } });
      const linkNotExists = !queryAllByTestId('list-item-heading-link').length;
      expect(linkNotExists).toBeTruthy();
    });

    it('Should show link content if linkTitle is given', () => {
      const { getByTestId } = render(ListItem, { propsData: { ...withLinkProps } });
      const linkExists = getByTestId('list-item-heading-link').textContent.includes('link text');
      expect(linkExists).toBeTruthy();
    });

    it('Should emit linkClick event when text-heading-link is clicked', () => {
      const { getByTestId, emitted } = render(ListItem, { propsData: { ...withLinkProps } });
      const link = getByTestId('list-item-heading-link');
      fireEvent.click(link);
      const linkEvent = emitted().linkClick;
      expect(linkEvent).toBeTruthy();
    });

    it('Should NOT emit linkClick event when text-heading-link is clicked and disabled', async () => {
      const wrapper = mount(ListItem, { propsData: { ...withLinkProps, disabled: true } });
      const link = wrapper.find('span[data-testid="list-item-heading-link"]');
      await wrapper.vm.$nextTick();
      link.trigger('click');
      await wrapper.vm.$nextTick();
      const linkClickNotEmitted = wrapper.emitted().linkClick === undefined;
      expect(linkClickNotEmitted).toBeTruthy();
    });
  });

  describe('Toggler behavior', () => {
    it('Should not visible if hasToggle is not provided', () => {
      const { queryAllByTestId } = render(ListItem, { propsData: { ...defaultProps } });
      const toggleNotExists = queryAllByTestId('list-item-toggle-input').length === 0;
      expect(toggleNotExists).toBeTruthy();
    });

    it('Should be visible if hasToggle is  provided', () => {
      const { getByTestId } = render(ListItem, { propsData: { ...defaultProps, hasToggle: true } });
      const toggleExists = getByTestId('list-item-toggle-input');
      expect(toggleExists).toBeTruthy();
    });

    it('Should emit input event when its checked', async () => {
      const wrapper = mount(ListItem, { propsData: { ...defaultProps, hasToggle: true } });
      await wrapper.vm.$nextTick();
      wrapper.vm.$options.watch.isChecked.call(wrapper.vm, false);
      await wrapper.vm.$nextTick();
      const inputEventEmitted = wrapper.emitted().input;
      expect(inputEventEmitted).toBeTruthy();
    });

    it('Should apply given value when its checked', async () => {
      const wrapper = mount(ListItem, { propsData: { ...defaultProps, hasToggle: true, value: true } });
      await wrapper.vm.$nextTick();
      wrapper.vm.$options.watch.value.call(wrapper.vm, true);
      await wrapper.vm.$nextTick();
      const givenValueIsTaken = wrapper.vm.$data.isChecked;
      expect(givenValueIsTaken).toBeTruthy();
    });
  });
});
