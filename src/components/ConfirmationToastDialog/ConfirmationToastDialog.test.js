import { render, fireEvent } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import ConfirmationToastDialog from './ConfirmationToastDialog.vue';
import ConfirmationToastDialogWrapper from './UnitTestWrappers/ConfirmationToastDialogWrapper.vue';

describe('ConfirmationToastDialog unit test', () => {
  beforeAll(() => { // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  const defaultProps = {
    title: 'title',
    description: 'description',
    confirmButtonText: 'confirm',
    secondaryButtonText: 'secondary',
    disabled: false,
  };

  it('Should be initially visible if given value is set to true', () => {
    const { getByTestId } = render(ConfirmationToastDialog, { propsData: { ...defaultProps, value: true } });
    const dialog = getByTestId('bottom-dialog-section');
    const dialogIsVisible = dialog.className.includes('visible');
    expect(dialogIsVisible).toBeTruthy();
  });

  it('Should be initially NOT visible if given value is set to false', () => {
    const { getByTestId } = render(ConfirmationToastDialog, { propsData: { ...defaultProps, value: false } });
    const dialog = getByTestId('bottom-dialog-section');
    const dialogIsNotVisible = !dialog.className.includes('visible');
    expect(dialogIsNotVisible).toBeTruthy();
  });

  it('Should set to visible if given value is set to true', () => new Promise((resolve) => {
    const { getByTestId } = render(ConfirmationToastDialogWrapper);
    const openModal = getByTestId('open-modal');
    fireEvent.click(openModal);
    setTimeout(() => {
      const dialog = getByTestId('bottom-dialog-section');
      const dialogIsVisible = dialog.className.includes('visible');
      expect(dialogIsVisible).toBeTruthy();
      resolve();
    });
  }));

  it('Should show title if provided', () => {
    const { getByTestId } = render(ConfirmationToastDialog, { propsData: { ...defaultProps } });
    const titleIsShown = getByTestId('bottom-dialog-title').textContent.includes('title');
    expect(titleIsShown).toBeTruthy();
  });

  it('Should show description if provided', () => {
    const { getByTestId } = render(ConfirmationToastDialog, { propsData: { ...defaultProps } });
    const descriptionIsShown = getByTestId('bottom-dialog-description').textContent.includes('description');
    expect(descriptionIsShown).toBeTruthy();
  });

  it('Should NOT show given children if description is provided', () => {
    const { queryAllByTestId } = render(ConfirmationToastDialog, { slots: { default: '<span data-testid="confirmation-modal-dialog-slot">Hey!</span>' }, propsData: { ...defaultProps } });
    const childrenIsNotShown = !queryAllByTestId('confirmation-modal-dialog-slot').length;
    expect(childrenIsNotShown).toBeTruthy();
  });

  it('Should show given children if description is not provided', () => {
    const { getByTestId } = render(ConfirmationToastDialog, { slots: { default: '<span data-testid="confirmation-modal-dialog-slot">Hey!</span>' }, propsData: { ...defaultProps, description: null } });
    const childrenIsShown = getByTestId('confirmation-modal-dialog-slot').textContent.includes('Hey!');
    expect(childrenIsShown).toBeTruthy();
  });

  it('Should emit a dismiss event when its closed', async () => {
    const wrapper = mount(ConfirmationToastDialog, { propsData: { ...defaultProps } });
    wrapper.vm.$options.watch.isShowing.call(wrapper.vm, false);
    await wrapper.vm.$nextTick();
    const closeEventEmitted = wrapper.emitted().dismiss;
    expect(closeEventEmitted).toBeTruthy();
  });

  describe('Confirm actions behavior', () => {
    it('Should show action-confirm button when confirm is given', () => {
      const { getByTestId } = render(ConfirmationToastDialog, { propsData: { ...defaultProps } });
      const confirmIsShown = getByTestId('bottom-dialog-action-confirm-button').textContent.includes('confirm');
      expect(confirmIsShown).toBeTruthy();
    });

    it('Should NOT show action-confirm button when confirm is NOT given', () => {
      const { queryAllByTestId } = render(ConfirmationToastDialog, { propsData: {
        ...defaultProps,
        confirmButtonText: null,
      } });
      const confirmIsNotShown = !queryAllByTestId('bottom-dialog-action-confirm-button').length;
      expect(confirmIsNotShown).toBeTruthy();
    });

    it('Should emit an event when confirm is given and action-confirm is clicked', () => {
      const { getByTestId, emitted } = render(ConfirmationToastDialog, { propsData: { ...defaultProps } });
      const confirmCTA = getByTestId('bottom-dialog-action-confirm-button');
      fireEvent.click(confirmCTA);
      const clickEvent = emitted().confirm;
      expect(clickEvent).toBeTruthy();
    });
  });

  describe('Secondary actions behavior', () => {
    it('Should show bottom-dialog-action-secondary button when secondaryText is given', () => {
      const { getByTestId } = render(ConfirmationToastDialog, { propsData: { ...defaultProps } });
      const dismissIsShown = getByTestId('bottom-dialog-action-secondary').textContent.includes('secondary');
      expect(dismissIsShown).toBeTruthy();
    });

    it('Should NOT show bottom-dialog-action-secondary when secondaryText is NOT given', () => {
      const { queryAllByTestId } = render(ConfirmationToastDialog, { propsData: {
        ...defaultProps,
        secondaryButtonText: null,
      } });
      const secondaryIsNotShown = !queryAllByTestId('bottom-dialog-action-secondary').length;
      expect(secondaryIsNotShown).toBeTruthy();
    });

    it('Should emit an event when secondary is given and bottom-dialog-action-secondary is clicked', () => {
      const { getByTestId, emitted } = render(ConfirmationToastDialog, { propsData: { ...defaultProps } });
      const secondaryCTA = getByTestId('bottom-dialog-action-secondary');
      fireEvent.click(secondaryCTA);
      const clickEvent = emitted().secondary;
      expect(clickEvent).toBeTruthy();
    });
  });
});
