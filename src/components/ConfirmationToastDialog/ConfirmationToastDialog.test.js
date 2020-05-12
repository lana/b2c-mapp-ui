import { render, fireEvent } from '@testing-library/vue';

import ConfirmationToastDialog from './ConfirmationToastDialog.vue';
import ConfirmationToastDialogWrapper from './UnitTestWrappers/ConfirmationToastDialogWrapper.vue';


describe('UI/buttons/Button', () => {
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
    const { getByTestId } = render(ConfirmationToastDialog, { propsData: { ...defaultProps, value: true } });
    const dialog = getByTestId('bottom-dialog-section');
    const dialogIsVisible = dialog.className.includes('visible');
    expect(dialogIsVisible).toBeTruthy();
  });

  it('Should be intially NOT visible if given value is set to false', () => {
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
  //
  // it('Should show given children if description is not provided', () => {
  //   const { getByTestId } = render(ConfirmationToastDialogWrapper);
  //   const childrenIsShown = getByTestId('confirmation-modal-dialog-slot').textContent.includes('Hey!');
  //   expect(childrenIsShown).toBeTruthy();
  // });

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

  // describe('Secondary actions behavior', () => {
  //   it('Should show action-dismiss button when dismiss is given', () => {
  //     const { getByTestId } = render(ConfirmationToastDialog, { propsData: { ...defaultProps } });
  //     const dismissIsShown = getByTestId('bottom-dialog-action-dismiss-button').textContent.includes('dismiss');
  //     expect(dismissIsShown).toBeTruthy();
  //   });
  //
  //   it('Should NOT show action-dismiss button when dismiss is NOT given', () => {
  //     const { queryAllByTestId } = render(ConfirmationToastDialog, { propsData: {
  //       ...defaultProps,
  //       dismissButtonText: null,
  //     } });
  //     const dismissIsNotShown = !queryAllByTestId('bottom-dialog-action-dismiss-button').length;
  //     expect(dismissIsNotShown).toBeTruthy();
  //   });
  //
  //   it('Should emit an event when dismiss is given and action-dismiss is clicked', () => {
  //     const { getByTestId, emitted } = render(ConfirmationToastDialog, { propsData: { ...defaultProps } });
  //     const dismissCTA = getByTestId('bottom-dialog-action-dismiss-button');
  //     fireEvent.click(dismissCTA);
  //     const clickEvent = emitted().dismiss;
  //     expect(clickEvent).toBeTruthy();
  //   });
  // });
});
// TODO: Uncomment the below test cases after refactoring to work with Vue
// describe('UI/overlays/ConfirmationToastDialog', () => {
//   it('Should show description if provided', () => {
//     const { getByTestId } = render(<ConfirmationToastDialog description={'description'} />);
//     const descriptionIsShown = getByTestId('bottom-dialog-description').textContent === 'description';
//     expect(descriptionIsShown).toBeTruthy();
//   });
//
//   it('Should show children if provided', () => {
//     const { getByTestId } = render(<ConfirmationToastDialog children={'children'} />);
//     const childrenIsShown = getByTestId('bottom-dialog-children').textContent === 'children';
//     expect(childrenIsShown).toBeTruthy();
//   });
//
//   it('Should not show children if also description is given', () => {
//     const { queryAllByTestId } = render(<ConfirmationToastDialog children={'children'} description="description" />);
//     const childrenIsNotShown = !queryAllByTestId('bottom-dialog-children').length
//     expect(childrenIsNotShown).toBeTruthy();
//   })
//
//   it('Should show title if provided', () => {
//     const { getByTestId } = render(<ConfirmationToastDialog title={'title'} />);
//     const titleIsShown = getByTestId('bottom-dialog-title').textContent === 'title';
//     expect(titleIsShown).toBeTruthy();
//   });
//
//   it('Should call given onDismiss if dismiss is clicked', () => {
//     const mockDismiss = jest.fn();
//     const { getByTestId } = render(<ConfirmationToastDialog onDismiss={mockDismiss} />);
//     const dismissCTA = getByTestId('bottom-dialog-dismiss');
//     fireEvent.click(dismissCTA);
//     expect(mockDismiss).toHaveBeenCalled();
//   });
//
//   it('Should apply visible class if visible is given:', () => {
//     const { getByTestId } = render(<ConfirmationToastDialog visible />);
//     const isVisible = getByTestId('bottom-dialog-section').className.includes('visible');
//     expect(isVisible).toBeTruthy();
//   })
//
//   it('Should NOT visible class if visible is given to false:', () => {
//     const { getByTestId } = render(<ConfirmationToastDialog visible={false} />);
//     const isNotVisible = !getByTestId('bottom-dialog-section').className.includes('visible');
//     expect(isNotVisible).toBeTruthy();
//   })
//
//   describe('confirm actions behavior', () => {
//     it('Should show action-confirm button when confirm is given', () => {
//       const { getByTestId } = render(<ConfirmationToastDialog confirm={'confirm'} />);
//       const confirmIsShown = getByTestId('bottom-dialog-action-confirm-button').textContent === 'confirm';
//       expect(confirmIsShown).toBeTruthy();
//     });
//
//     it('Should NOT show action-confirm button when confirm is NOT given', () => {
//       const { queryAllByTestId } = render(<ConfirmationToastDialog />);
//       const confirmIsNotShown = !queryAllByTestId('bottom-dialog-action-confirm-button').length;
//       expect(confirmIsNotShown).toBeTruthy();
//     });
//
//     it('Should call on confirm when confirm is given and action-confirm is clicked', () => {
//       const mockConfirm = jest.fn();
//       const { getByTestId } = render(<ConfirmationToastDialog confirm={'confirm'} onConfirm={mockConfirm} />);
//       const confirmCTA = getByTestId('bottom-dialog-action-confirm-button');
//       fireEvent.click(confirmCTA);
//       expect(mockConfirm).toHaveBeenCalled();
//     });
//
//     it('Should call on confirm when confirm is given and action-confirm is clicked passing event as param', () => {
//       const mockConfirm = jest.fn();
//       const { getByTestId } = render(<ConfirmationToastDialog confirm={'confirm'} onConfirm={mockConfirm} />);
//       const confirmCTA = getByTestId('bottom-dialog-action-confirm-button');
//       fireEvent.click(confirmCTA);
//       expect(mockConfirm).toHaveBeenCalledWith(new MouseEvent('click'));
//     });
//   });
//
//   describe('secondary actions behavior', () => {
//     it('Should show action-secondary button when secondary is given', () => {
//       const { getByTestId } = render(<ConfirmationToastDialog secondary={'secondary'} />);
//       const secondaryIsShown = getByTestId('bottom-dialog-action-secondary-button').textContent === 'secondary';
//       expect(secondaryIsShown).toBeTruthy();
//     });
//
//     it('Should NOT show action-secondary button when secondary is NOT given', () => {
//       const { queryAllByTestId } = render(<ConfirmationToastDialog />);
//       const secondaryIsNotShown = !queryAllByTestId('bottom-dialog-action-secondary-button').length;
//       expect(secondaryIsNotShown).toBeTruthy();
//     });
//
//     it('Should call on secondary when confirm is given and action-secondary is clicked', () => {
//       const mockSecondary = jest.fn();
//       const { getByTestId } = render(<ConfirmationToastDialog secondary={'secondary'} onSecondary={mockSecondary} />);
//       const secondaryCTA = getByTestId('bottom-dialog-action-secondary-button');
//       fireEvent.click(secondaryCTA);
//       expect(mockSecondary).toHaveBeenCalled();
//     });
//
//     it('Should call on secondary when secondary is given and action-secondary is clicked passing event as param', () => {
//       const mockSecondary = jest.fn();
//       const { getByTestId } = render(<ConfirmationToastDialog secondary={'secondary'} onSecondary={mockSecondary} />);
//       const secondaryCTA = getByTestId('bottom-dialog-action-secondary-button');
//       fireEvent.click(secondaryCTA);
//       expect(mockSecondary).toHaveBeenCalledWith(new MouseEvent('click'));
//     });
//   });
// });
