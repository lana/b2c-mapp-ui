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
      const { getByTestId } = render(ListItem, { props: { ...defaultProps } });
      const titleExists = getByTestId('heading').textContent?.includes('Main Title');
      expect(titleExists).toBeTruthy();
    });

    it('Should show given description if given', () => {
      const { getByTestId } = render(ListItem, { props: { ...defaultProps, description: 'desc' } });
      const descriptionExists = getByTestId('list-item-description').textContent?.includes('desc');
      expect(descriptionExists).toBeTruthy();
    });

    it('Should not show empty description if not given', () => {
      const { queryAllByTestId } = render(ListItem, { props: { ...defaultProps } });
      const descriptionNotExists = queryAllByTestId('list-item-description').length === 0;
      expect(descriptionNotExists).toBeTruthy();
    });

    it('Should show given icon if given', () => {
      const { queryAllByTestId } = render(ListItem, { slots: { default: '<span data-testid="list-item-icon">Icon</span>' }, props: { ...defaultProps } });
      const iconExists = queryAllByTestId('list-item-icon').length;
      expect(iconExists).toBeTruthy();
    });

    it('Should not show icon if not given', () => {
      const { queryAllByTestId } = render(ListItem, { props: { ...defaultProps } });
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
      const { queryAllByTestId } = render(ListItem, { props: { ...defaultProps } });
      const linkNotExists = !queryAllByTestId('list-item-heading-link').length;
      expect(linkNotExists).toBeTruthy();
    });

    it('Should show link content if linkTitle is given', () => {
      const { getByTestId } = render(ListItem, { props: { ...withLinkProps } });
      const linkExists = getByTestId('list-item-heading-link').textContent?.includes('link text');
      expect(linkExists).toBeTruthy();
    });

    it('Should emit linkClick event when text-heading-link is clicked', () => {
      const { getByTestId, emitted } = render(ListItem, { props: { ...withLinkProps } });
      const link = getByTestId('list-item-heading-link');
      fireEvent.click(link);
      const linkEvent = emitted().linkClick;
      expect(linkEvent).toBeTruthy();
    });

    it('Should NOT emit linkClick event when text-heading-link is clicked and disabled', async () => {
      const wrapper = mount(ListItem, { props: { ...withLinkProps, disabled: true } });
      const link = wrapper.find('span[data-testid="list-item-heading-link"]');
      await wrapper.vm.$nextTick();
      link.trigger('click');
      await wrapper.vm.$nextTick();
      const linkClickNotEmitted = wrapper.emitted().linkClick === undefined;
      expect(linkClickNotEmitted).toBeTruthy();
    });
  });

  describe('Toggler behavior', () => {
    it('Should not be visible if hasToggle is not provided', () => {
      const { queryAllByTestId } = render(ListItem, { props: { ...defaultProps } });
      const toggleNotExists = queryAllByTestId('list-item-toggle-input').length === 0;
      expect(toggleNotExists).toBeTruthy();
    });

    it('Should not be visible if hasCheckbox is provided', () => {
      const { queryAllByTestId } = render(ListItem, { props: { ...defaultProps, hasCheckbox: true } });
      const toggleNotExists = queryAllByTestId('list-item-toggle-input').length === 0;
      expect(toggleNotExists).toBeTruthy();
    });

    it('Should not be visible if hasCheckbox and hasToggle are provided', () => {
      const { queryAllByTestId } = render(ListItem, { props: { ...defaultProps, hasCheckbox: true, hasToggle: true } });
      const toggleNotExists = queryAllByTestId('list-item-toggle-input').length === 0;
      expect(toggleNotExists).toBeTruthy();
    });

    it('Should be visible if hasToggle is  provided but hasCheckbox is not provided', () => {
      const { getByTestId } = render(ListItem, { props: { ...defaultProps, hasToggle: true } });
      const toggleExists = getByTestId('list-item-toggle-input');
      expect(toggleExists).toBeTruthy();
    });

    it('Should emit input event when its checked', async () => {
      const wrapper = mount(ListItem, { props: { ...defaultProps, hasToggle: true } });
      await wrapper.vm.$nextTick();
      wrapper.vm.$options.watch.isChecked.call(wrapper.vm, false);
      await wrapper.vm.$nextTick();
      const inputEventEmitted = wrapper.emitted('update:modelValue');
      expect(inputEventEmitted).toBeTruthy();
    });

    it('Should apply given value when its checked', async () => {
      const wrapper = mount(ListItem, { props: { ...defaultProps, hasToggle: true, modelValue: true } });
      await wrapper.vm.$nextTick();
      wrapper.vm.$options.watch.modelValue.call(wrapper.vm, true);
      await wrapper.vm.$nextTick();
      const givenValueIsTaken = wrapper.vm.isChecked;
      expect(givenValueIsTaken).toBeTruthy();
    });
  });

  describe('Checkbox behavior', () => {
    const withCheckboxDefaultProps = {
      ...defaultProps,
      hasToggle: false,
      hasCheckbox: true,
    };
    it('Should not be visible if hasCheckbox is not provided but hasToggle is provided', () => {
      const { queryAllByTestId } = render(ListItem, { props: { ...withCheckboxDefaultProps, hasCheckbox: false, hasToggle: true } });
      const checkboxNotExists = queryAllByTestId('list-item-checkbox-input').length === 0;
      expect(checkboxNotExists).toBeTruthy();
    });

    it('Should not be visible if hasToggle is provided', () => {
      const { queryAllByTestId } = render(ListItem, { props: { ...withCheckboxDefaultProps, hasToggle: true } });
      const checkboxNotExists = queryAllByTestId('list-item-checkbox-input').length === 0;
      expect(checkboxNotExists).toBeTruthy();
    });

    it('Should be visible if hasCheckbox is  provided', () => {
      const { getByTestId } = render(ListItem, { props: { ...withCheckboxDefaultProps } });
      const checkboxExists = getByTestId('list-item-checkbox-input');
      expect(checkboxExists).toBeTruthy();
    });

    it('Should emit input event when its checked', async () => {
      const wrapper = mount(ListItem, { props: { ...withCheckboxDefaultProps } });
      await wrapper.vm.$nextTick();
      wrapper.vm.$options.watch.isChecked.call(wrapper.vm, false);
      await wrapper.vm.$nextTick();
      const inputEventEmitted = wrapper.emitted('update:modelValue');
      expect(inputEventEmitted).toBeTruthy();
    });

    it('Should apply given value when its checked', async () => {
      const wrapper = mount(ListItem, { props: { ...withCheckboxDefaultProps, modelValue: true } });
      await wrapper.vm.$nextTick();
      wrapper.vm.$options.watch.modelValue.call(wrapper.vm, true);
      await wrapper.vm.$nextTick();
      const givenValueIsTaken = wrapper.vm.isChecked;
      expect(givenValueIsTaken).toBeTruthy();
    });
  });
});
