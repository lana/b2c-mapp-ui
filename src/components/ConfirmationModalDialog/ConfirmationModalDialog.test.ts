import { render, fireEvent } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import ConfirmationModalDialog from './ConfirmationModalDialog.vue';
import ConfirmationModalDialogWrapper from './UnitTestWrappers/ConfirmationModalDialogWrapper.vue';

describe('ConfirmationModalDialog unit test', () => {
  const defaultProps = {
    title: 'title',
    description: 'description',
    confirmButtonText: 'confirm',
    dismissButtonText: 'dismiss',
  };

  it('Should be intially visible if given value is set to true', () => {
    const { getByTestId } = render(ConfirmationModalDialog, { props: { ...defaultProps, modelValue: true } });
    const dialog = getByTestId('dialog-section');
    const dialogIsVisible = dialog.className.includes('visible');
    expect(dialogIsVisible).toBeTruthy();
  });

  it('Should be intially NOT visible if given value is set to false', () => {
    const { getByTestId } = render(ConfirmationModalDialog, { props: { ...defaultProps, modelValue: false } });
    const dialog = getByTestId('dialog-section');
    const dialogIsNotVisible = !dialog.className.includes('visible');
    expect(dialogIsNotVisible).toBeTruthy();
  });

  it('Should set to visible if given value is set to true', async () => {
    const { getByTestId } = render(ConfirmationModalDialogWrapper);
    const openModal = getByTestId('open-modal');
    await fireEvent.click(openModal);
    const dialog = getByTestId('dialog-section');
    const dialogIsVisible = dialog.className.includes('visible');
    expect(dialogIsVisible).toBeTruthy();
  });

  it('Should show title if provided', () => {
    const { getByTestId } = render(ConfirmationModalDialog, { props: { ...defaultProps } });
    const titleIsShown = getByTestId('dialog-title').textContent?.includes('title');
    expect(titleIsShown).toBeTruthy();
  });

  it('Should show description if provided', () => {
    const { getByTestId } = render(ConfirmationModalDialog, { props: { ...defaultProps } });
    const descriptionIsShown = getByTestId('dialog-description').textContent?.includes('description');
    expect(descriptionIsShown).toBeTruthy();
  });

  it('Should NOT show given children if description is provided', () => {
    const { queryAllByTestId } = render(ConfirmationModalDialog, { slots: { default: '<span data-testid="confirmation-modal-dialog-slot">Hey!</span>' }, props: { ...defaultProps } });
    const childrenIsNotShown = !queryAllByTestId('confirmation-modal-dialog-slot').length;
    expect(childrenIsNotShown).toBeTruthy();
  });

  it('Should show given children if description is not provided', () => {
    const { getByTestId } = render(ConfirmationModalDialog, { slots: { default: '<span data-testid="confirmation-modal-dialog-slot">Hey!</span>' }, props: { ...defaultProps, description: null } });
    const childrenIsShown = getByTestId('confirmation-modal-dialog-slot').textContent?.includes('Hey!');
    expect(childrenIsShown).toBeTruthy();
  });

  it('Should show custom action', () => {
    const { getByTestId } = render(
      ConfirmationModalDialog,
      {
        slots: { extraActions: '<a data-testid="custom-action">x</a>' },
        props: { ...defaultProps },
      },
    );
    const customTitleVisible = getByTestId('custom-action');
    expect(customTitleVisible).toBeTruthy();
  });

  describe('Confirm actions behavior', () => {
    it('Should show action-confirm button when confirm is given', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { props: { ...defaultProps } });
      const confirmIsShown = getByTestId('dialog-action-confirm-button').textContent?.includes('confirm');
      expect(confirmIsShown).toBeTruthy();
    });

    it('Should be disabled if given confirmButtonDisabled is set to true', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { props: { ...defaultProps, confirmButtonDisabled: true } });
      const confirmDisabled = typeof getByTestId('dialog-action-confirm-button').getAttribute('disabled') === 'string';
      expect(confirmDisabled).toBeTruthy();
    });

    it('Should be NOT disabled if given confirmButtonDisabled is set to false', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { props: { ...defaultProps, confirmButtonDisabled: false } });
      const confirmDisabled = (typeof getByTestId('dialog-action-confirm-button').getAttribute('disabled') === 'string');
      expect(confirmDisabled).toBeFalsy();
    });

    it('Should be NOT disabled if given confirmButtonDisabled by default', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { props: { ...defaultProps } });
      const confirmDisabled = (typeof getByTestId('dialog-action-confirm-button').getAttribute('disabled') === 'string');
      expect(confirmDisabled).toBeFalsy();
    });

    it('Should NOT show action-confirm button when confirm is NOT given', () => {
      const { queryAllByTestId } = render(ConfirmationModalDialog, { props: {
        ...defaultProps,
        confirmButtonText: null,
      } });
      const confirmIsNotShown = !queryAllByTestId('dialog-action-confirm-button').length;
      expect(confirmIsNotShown).toBeTruthy();
    });

    it('Should emit an event when confirm is given and action-confirm is clicked', async () => {
      const wrapper = mount(ConfirmationModalDialog, { props: { ...defaultProps } });
      const confirmCTA = wrapper.find('[data-testid="dialog-action-confirm-button"]');
      await confirmCTA.trigger('click');
      const clickEvent = wrapper.emitted('confirm');
      expect(clickEvent).toBeTruthy();
    });
  });

  describe('Dismiss actions behavior', () => {
    it('Should show action-dismiss button when dismiss is given', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { props: { ...defaultProps } });
      const dismissIsShown = getByTestId('dialog-action-dismiss-button').textContent?.includes('dismiss');
      expect(dismissIsShown).toBeTruthy();
    });

    it('Should be disabled if given dismissButtonDisabled is set to true', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { props: { ...defaultProps, dismissButtonDisabled: true } });
      const dismissDisabled = getByTestId('dialog-action-dismiss-button').getAttribute('disabled');
      expect(dismissDisabled).toBeDefined();
    });

    it('Should be NOT disabled if given dismissButtonDisabled is set to false', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { props: { ...defaultProps, dismissButtonDisabled: false } });
      const dismissDisabled = getByTestId('dialog-action-dismiss-button').getAttribute('disabled');
      expect(dismissDisabled).toBeFalsy();
    });

    it('Should be NOT disabled if given dismissButtonDisabled by default', () => {
      const { getByTestId } = render(ConfirmationModalDialog, { props: { ...defaultProps } });
      const dismissDisabled = getByTestId('dialog-action-dismiss-button').getAttribute('disabled');
      expect(dismissDisabled).toBeFalsy();
    });

    it('Should NOT show action-dismiss button when dismiss is NOT given', () => {
      const { queryAllByTestId } = render(ConfirmationModalDialog, { props: {
        ...defaultProps,
        dismissButtonText: null,
      } });
      const dismissIsNotShown = !queryAllByTestId('dialog-action-dismiss-button').length;
      expect(dismissIsNotShown).toBeTruthy();
    });

    it('Should emit an event when dismiss is given and action-dismiss is clicked', () => {
      const { getByTestId, emitted } = render(ConfirmationModalDialog, { props: { ...defaultProps } });
      const dismissCTA = getByTestId('dialog-action-dismiss-button');
      fireEvent.click(dismissCTA);
      const clickEvent = emitted().dismiss;
      expect(clickEvent).toBeTruthy();
    });

    it('Should emit a close event when its closed', async () => {
      const wrapper = mount(ConfirmationModalDialog, { props: { ...defaultProps } });
      wrapper.vm.$options.watch.isShowing.call(wrapper.vm, false);
      await wrapper.vm.$nextTick();
      const closeEventEmitted = wrapper.emitted().close;
      expect(closeEventEmitted).toBeTruthy();
    });

    it('Should emit an event when dismiss is given by extra slot and action-dismiss is clicked', () => {
      const { getByTestId, emitted } = render(
        ConfirmationModalDialog,
        {
          slots: { extraActions: '<template v-slot:extraActions="{ onDismiss }"><a data-testid="custom-action" @click="onDismiss">x</a></template>' },
          props: { ...defaultProps },
        },
      );
      const dismissCTA = getByTestId('custom-action');
      fireEvent.click(dismissCTA);
      const clickEvent = emitted().dismiss;
      expect(clickEvent).toBeTruthy();
    });
  });
});
