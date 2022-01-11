import { render, fireEvent } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import ConfirmationToastDialog from './ConfirmationToastDialog.vue';
import ConfirmationToastDialogWrapper from './UnitTestWrappers/ConfirmationToastDialogWrapper.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('ConfirmationToastDialog unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  const defaultProps = {
    title: 'title',
    description: 'description',
    confirmButtonText: 'confirm',
    secondaryButtonText: 'secondary',
    disabled: false,
  };

  it('Should be initially visible if given value is set to true', () => {
    const { getByTestId } = render(ConfirmationToastDialog, { props: { ...defaultProps, modelValue: true } });
    const dialog = getByTestId('bottom-dialog-section');
    const dialogIsVisible = dialog.className.includes('visible');
    expect(dialogIsVisible).toBeTruthy();
  });

  it('Should be initially NOT visible if given value is set to false', () => {
    const { getByTestId } = render(ConfirmationToastDialog, { props: { ...defaultProps, modelValue: false } });
    const dialog = getByTestId('bottom-dialog-section');
    const dialogIsNotVisible = !dialog.className.includes('visible');
    expect(dialogIsNotVisible).toBeTruthy();
  });

  it('Should set to visible if given value is set to true', async () => {
    const { getByTestId } = render(ConfirmationToastDialogWrapper);
    const openModal = getByTestId('open-modal');
    await fireEvent.click(openModal);
    const dialog = getByTestId('bottom-dialog-section');
    const dialogIsVisible = dialog.className.includes('visible');
    expect(dialogIsVisible).toBeTruthy();
  });

  it('Should show title if provided', () => {
    const { getByTestId } = render(ConfirmationToastDialog, { props: { ...defaultProps } });
    const titleIsShown = getByTestId('bottom-dialog-title').textContent?.includes('title');
    expect(titleIsShown).toBeTruthy();
  });

  it('Should show description if provided', () => {
    const { getByTestId } = render(ConfirmationToastDialog, { props: { ...defaultProps } });
    const descriptionIsShown = getByTestId('bottom-dialog-description').textContent?.includes('description');
    expect(descriptionIsShown).toBeTruthy();
  });

  it('Should NOT show given children if description is provided', () => {
    const { queryAllByTestId } = render(ConfirmationToastDialog, { slots: { default: '<span data-testid="confirmation-modal-dialog-slot">Hey!</span>' }, props: { ...defaultProps } });
    const childrenIsNotShown = !queryAllByTestId('confirmation-modal-dialog-slot').length;
    expect(childrenIsNotShown).toBeTruthy();
  });

  it('Should show given children if description is not provided', () => {
    const { getByTestId } = render(ConfirmationToastDialog, { slots: { default: '<span data-testid="confirmation-modal-dialog-slot">Hey!</span>' }, props: { ...defaultProps, description: null } });
    const childrenIsShown = getByTestId('confirmation-modal-dialog-slot').textContent?.includes('Hey!');
    expect(childrenIsShown).toBeTruthy();
  });

  it('Should emit a dismiss event when its closed', async () => {
    const wrapper = mount(ConfirmationToastDialog, { props: { ...defaultProps } });
    wrapper.vm.$options.watch.isShowing.call(wrapper.vm, false);
    await wrapper.vm.$nextTick();
    const closeEventEmitted = wrapper.emitted().dismiss;
    expect(closeEventEmitted).toBeTruthy();
  });

  describe('Confirm actions behavior', () => {
    it('Should show action-confirm button when confirm is given', () => {
      const { getByTestId } = render(ConfirmationToastDialog, { props: { ...defaultProps } });
      const confirmIsShown = getByTestId('bottom-dialog-action-confirm-button').textContent?.includes('confirm');
      expect(confirmIsShown).toBeTruthy();
    });

    it('Should NOT show action-confirm button when confirm is NOT given', () => {
      const { queryAllByTestId } = render(ConfirmationToastDialog, { props: {
        ...defaultProps,
        confirmButtonText: null,
      } });
      const confirmIsNotShown = !queryAllByTestId('bottom-dialog-action-confirm-button').length;
      expect(confirmIsNotShown).toBeTruthy();
    });

    it('Should emit an event when confirm is given and action-confirm is clicked', () => {
      const { getByTestId, emitted } = render(ConfirmationToastDialog, { props: { ...defaultProps } });
      const confirmCTA = getByTestId('bottom-dialog-action-confirm-button');
      fireEvent.click(confirmCTA);
      const clickEvent = emitted().confirm;
      expect(clickEvent).toBeTruthy();
    });
  });

  describe('Secondary actions behavior', () => {
    it('Should show bottom-dialog-action-secondary button when secondaryText is given', () => {
      const { getByTestId } = render(ConfirmationToastDialog, { props: { ...defaultProps } });
      const dismissIsShown = getByTestId('bottom-dialog-action-secondary').textContent?.includes('secondary');
      expect(dismissIsShown).toBeTruthy();
    });

    it('Should NOT show bottom-dialog-action-secondary when secondaryText is NOT given', () => {
      const { queryAllByTestId } = render(ConfirmationToastDialog, { props: {
        ...defaultProps,
        secondaryButtonText: null,
      } });
      const secondaryIsNotShown = !queryAllByTestId('bottom-dialog-action-secondary').length;
      expect(secondaryIsNotShown).toBeTruthy();
    });

    it('Should emit an event when secondary is given and bottom-dialog-action-secondary is clicked', () => {
      const { getByTestId, emitted } = render(ConfirmationToastDialog, { props: { ...defaultProps } });
      const secondaryCTA = getByTestId('bottom-dialog-action-secondary');
      fireEvent.click(secondaryCTA);
      const clickEvent = emitted().secondary;
      expect(clickEvent).toBeTruthy();
    });
  });

  it('Should show custom actions', () => {
    const { getByTestId } = render(
      ConfirmationToastDialog,
      {
        slots: { actions: '<span data-testid="custom-actions">Text <br />newline</span>' },
        props: { ...defaultProps },
      },
    );
    const customMetaTextVisible = getByTestId('custom-actions');
    expect(customMetaTextVisible).toBeTruthy();
  });
});
