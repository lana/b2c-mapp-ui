import { render, fireEvent } from '@testing-library/vue';

import ConfirmationModalDialog from './ConfirmationModalDialog.vue';
import ConfirmationModalDialogWrapper from './UnitTestWrappers/ConfirmationModalDialogWrapper.vue';

describe('ConfirmationmodalDialog unit test', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  const defaultProps = {
    title: 'title',
    description: 'description',
    confirmButtonText: 'confirm',
    dismissButtonText: 'dismiss',
    disabled: false,
  };

  it('Should be intially visible if given value is set to true', () => {
    const { getByTestId } = render(ConfirmationModalDialog, { propsData: { ...defaultProps, value: true } });
    const dialog = getByTestId('dialog-section');
    const dialogIsVisible = dialog.className.includes('visible');
    expect(dialogIsVisible).toBeTruthy();
  });

  it('Should be intially NOT visible if given value is set to false', () => {
    const { getByTestId } = render(ConfirmationModalDialog, { propsData: { ...defaultProps, value: false } });
    const dialog = getByTestId('dialog-section');
    const dialogIsNotVisible = !dialog.className.includes('visible');
    expect(dialogIsNotVisible).toBeTruthy();
  });

  it('Should set to visible if given value is set to true', () => new Promise((resolve) => {
    const { getByTestId } = render(ConfirmationModalDialogWrapper);
    const openModal = getByTestId('open-modal');
    fireEvent.click(openModal);
    setTimeout(() => {
      const dialog = getByTestId('dialog-section');
      const dialogIsVisible = dialog.className.includes('visible');
      expect(dialogIsVisible).toBeTruthy();
      resolve();
    });
  }));

  it('Should show title if provided', () => {
    const { getByTestId } = render(ConfirmationModalDialog, { propsData: { ...defaultProps } });
    const titleIsShown = getByTestId('dialog-title').textContent.includes('title');
    expect(titleIsShown).toBeTruthy();
  });

  it('Should show description if provided', () => {
    const { getByTestId } = render(ConfirmationModalDialog, { propsData: { ...defaultProps } });
    const descriptionIsShown = getByTestId('dialog-description').textContent.includes('description');
    expect(descriptionIsShown).toBeTruthy();
  });

  it('Should NOT show given children if description is provided', () => {
    const { queryAllByTestId } = render(ConfirmationModalDialog, { slots: { default: '<span data-testid="confirmation-modal-dialog-slot">Hey!</span>' }, propsData: { ...defaultProps } });
    const childrenIsNotShown = !queryAllByTestId('confirmation-modal-dialog-slot').length;
    expect(childrenIsNotShown).toBeTruthy();
  });

  it('Should show given children if description is not provided', () => {
    const { getByTestId } = render(ConfirmationModalDialog, { slots: { default: '<span data-testid="confirmation-modal-dialog-slot">Hey!</span>' }, propsData: { ...defaultProps, description: null } });
    const childrenIsShown = getByTestId('confirmation-modal-dialog-slot').textContent.includes('Hey!');
    expect(childrenIsShown).toBeTruthy();
  });

  describe('Confirm actions behavior', () => {
    it('Should show action-confirm button when confirm is given', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { propsData: { ...defaultProps } });
      const confirmIsShown = getByTestId('dialog-action-confirm-button').textContent.includes('confirm');
      expect(confirmIsShown).toBeTruthy();
    });

    it('Should NOT show action-confirm button when confirm is NOT given', () => {
      const { queryAllByTestId } = render(ConfirmationModalDialog, { propsData: {
        ...defaultProps,
        confirmButtonText: null,
      } });
      const confirmIsNotShown = !queryAllByTestId('dialog-action-confirm-button').length;
      expect(confirmIsNotShown).toBeTruthy();
    });

    it('Should emit an event when confirm is given and action-confirm is clicked', () => {
      const { getByTestId, emitted } = render(ConfirmationModalDialog, { propsData: { ...defaultProps } });
      const confirmCTA = getByTestId('dialog-action-confirm-button');
      fireEvent.click(confirmCTA);
      const clickEvent = emitted().confirm;
      expect(clickEvent).toBeTruthy();
    });
  });

  describe('Dismiss actions behavior', () => {
    it('Should show action-dismiss button when dismiss is given', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { propsData: { ...defaultProps } });
      const dismissIsShown = getByTestId('dialog-action-dismiss-button').textContent.includes('dismiss');
      expect(dismissIsShown).toBeTruthy();
    });

    it('Should NOT show action-dismiss button when dismiss is NOT given', () => {
      const { queryAllByTestId } = render(ConfirmationModalDialog, { propsData: {
        ...defaultProps,
        dismissButtonText: null,
      } });
      const dismissIsNotShown = !queryAllByTestId('dialog-action-dismiss-button').length;
      expect(dismissIsNotShown).toBeTruthy();
    });

    it('Should emit an event when dismiss is given and action-dismiss is clicked', () => {
      const { getByTestId, emitted } = render(ConfirmationModalDialog, { propsData: { ...defaultProps } });
      const dismissCTA = getByTestId('dialog-action-dismiss-button');
      fireEvent.click(dismissCTA);
      const clickEvent = emitted().dismiss;
      expect(clickEvent).toBeTruthy();
    });
  });
});
