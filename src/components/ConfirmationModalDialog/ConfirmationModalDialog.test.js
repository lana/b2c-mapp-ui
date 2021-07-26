import { render, fireEvent } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import ConfirmationModalDialog from './ConfirmationModalDialog.vue';
import ConfirmationModalDialogWrapper from './UnitTestWrappers/ConfirmationModalDialogWrapper.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('ConfirmationmodalDialog unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  const defaultProps = {
    title: 'title',
    description: 'description',
    confirmButtonText: 'confirm',
    dismissButtonText: 'dismiss',
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

  it('Should show custom action', () => {
    const { getByTestId } = render(
      ConfirmationModalDialog,
      {
        slots: { extraActions: '<a data-testid="custom-action">x</a>' },
        propsData: { ...defaultProps },
      },
    );
    const customTitleVisible = getByTestId('custom-action');
    expect(customTitleVisible).toBeTruthy();
  });

  describe('Confirm actions behavior', () => {
    it('Should show action-confirm button when confirm is given', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { propsData: { ...defaultProps } });
      const confirmIsShown = getByTestId('dialog-action-confirm-button').textContent.includes('confirm');
      expect(confirmIsShown).toBeTruthy();
    });

    it('Should be disabled if given confirmButtonDisabled is set to true', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { propsData: { ...defaultProps, confirmButtonDisabled: true } });
      const confirmIsDisabled = getByTestId('dialog-action-confirm-button').getAttribute('disabled') === 'disabled';
      expect(confirmIsDisabled).toBeTruthy();
    });

    it('Should be NOT disabled if given confirmButtonDisabled is set to false', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { propsData: { ...defaultProps, confirmButtonDisabled: false } });
      const confirmIsNotDisabled = !getByTestId('dialog-action-confirm-button').getAttribute('disabled');
      expect(confirmIsNotDisabled).toBeTruthy();
    });

    it('Should be NOT disabled if given confirmButtonDisabled by default', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { propsData: { ...defaultProps } });
      const confirmIsNotDisabled = !getByTestId('dialog-action-confirm-button').getAttribute('disabled');
      expect(confirmIsNotDisabled).toBeTruthy();
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

    it('Should be disabled if given dismissButtonDisabled is set to true', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { propsData: { ...defaultProps, dismissButtonDisabled: true } });
      const dismissIsDisabled = getByTestId('dialog-action-dismiss-button').getAttribute('disabled') === 'disabled';
      expect(dismissIsDisabled).toBeTruthy();
    });

    it('Should be NOT disabled if given dismissButtonDisabled is set to false', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { propsData: { ...defaultProps, dismissButtonDisabled: false } });
      const dismissIsNotDisabled = !getByTestId('dialog-action-dismiss-button').getAttribute('disabled');
      expect(dismissIsNotDisabled).toBeTruthy();
    });

    it('Should be NOT disabled if given dismissButtonDisabled by default', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { propsData: { ...defaultProps } });
      const dismissIsNotDisabled = !getByTestId('dialog-action-dismiss-button').getAttribute('disabled');
      expect(dismissIsNotDisabled).toBeTruthy();
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

    it('Should emit a close event when its closed', async () => {
      const wrapper = mount(ConfirmationModalDialog, { propsData: { ...defaultProps } });
      wrapper.vm.$options.watch.isShowing.call(wrapper.vm, false);
      await wrapper.vm.$nextTick();
      const closeEventEmitted = wrapper.emitted().close;
      expect(closeEventEmitted).toBeTruthy();
    });

    it('Should emit an event when dismiss is given by extra slot and action-dismiss is clicked', () => {
      const { getByTestId, emitted } = render(
        ConfirmationModalDialog,
        {
          scopedSlots: { extraActions: '<a data-testid="custom-action" @click="props.onDismiss">x</a>' },
          propsData: { ...defaultProps },
        },
      );
      const dismissCTA = getByTestId('custom-action');
      fireEvent.click(dismissCTA);
      const clickEvent = emitted().dismiss;
      expect(clickEvent).toBeTruthy();
    });
  });
});
