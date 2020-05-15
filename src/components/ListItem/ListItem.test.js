import { render, fireEvent } from '@testing-library/vue';

import ListItem from './ListItem.vue';

describe('ListItem', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
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
      const descriptionExists = getByTestId('text-description').textContent.includes('desc');
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
      const linkNotExists = !queryAllByTestId('text-heading-link').length;
      expect(linkNotExists).toBeTruthy();
    });

    it('Should show link content if linkTitle is given', () => {
      const { getByTestId } = render(ListItem, { propsData: { ...withLinkProps } });
      const linkExists = getByTestId('text-heading-link').textContent.includes('link text');
      expect(linkExists).toBeTruthy();
    });

    it('Should emit linkClick event when text-heading-link is clicked', () => {
      const { getByTestId, emitted } = render(ListItem, { propsData: { ...withLinkProps } });
      const link = getByTestId('text-heading-link');
      fireEvent.click(link);
      const linkEvent = emitted().linkClick;
      expect(linkEvent).toBeTruthy();
    });
  });

  describe('Toggler behavior', () => {
    it('Should not visible if hasToggle is not provided', () => {
      const { queryAllByTestId } = render(ListItem, { propsData: { ...defaultProps } });
      const toggleNotExists = queryAllByTestId('text-toggle-input').length === 0;
      expect(toggleNotExists).toBeTruthy();
    });

    it('Should be visible if hasToggle is  provided', () => {
      const { getByTestId } = render(ListItem, { propsData: { ...defaultProps, hasToggle: true } });
      const toggleExists = getByTestId('text-toggle-input');
      expect(toggleExists).toBeTruthy();
    });
  });
});
