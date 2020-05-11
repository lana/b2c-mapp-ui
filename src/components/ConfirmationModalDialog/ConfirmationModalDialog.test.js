import { shallowMount } from '@vue/test-utils';

import ConfirmationModalDialog from './ConfirmationModalDialog.vue';

// TODO: Uncomment the below test cases after refactoring to work with Vue
// describe('UI/overlays/ConfirmationModalDialog', () => {
//   it('Should show description if provided', () => {
//     const { getByTestId } = render(<ModalConfirmationDialog description={'description'} />);
//     const descriptionIsShown = getByTestId('dialog-description').textContent === 'description';
//     expect(descriptionIsShown).toBeTruthy();
//   });
//
//   it('Should show children if provided', () => {
//     const { getByTestId } = render(<ModalConfirmationDialog children={'children'} />);
//     const childrenIsShown = getByTestId('dialog-children').textContent === 'children';
//     expect(childrenIsShown).toBeTruthy();
//   });
//
//   it('Should not show children if also description is given', () => {
//     const { queryAllByTestId } = render(<ModalConfirmationDialog children={'children'} description="description" />);
//     const childrenIsNotShown = !queryAllByTestId('dialog-children').length
//     expect(childrenIsNotShown).toBeTruthy();
//   })
//
//   it('Should show title if provided', () => {
//     const { getByTestId } = render(<ModalConfirmationDialog title={'title'} />);
//     const titleIsShown = getByTestId('dialog-title').textContent === 'title';
//     expect(titleIsShown).toBeTruthy();
//   });
//
//   it('Should apply visible class if visible is given:', () => {
//     const { getByTestId } = render(<ModalConfirmationDialog visible />);
//     const isVisible = getByTestId('dialog-section').className.includes('visible');
//     expect(isVisible).toBeTruthy();
//   })
//
//   it('Should NOT visible class if visible is given to false:', () => {
//     const { getByTestId } = render(<ModalConfirmationDialog visible={false} />);
//     const isNotVisible = !getByTestId('dialog-section').className.includes('visible');
//     expect(isNotVisible).toBeTruthy();
//   })
//
//   describe('confirm actions behavior', () => {
//     it('Should show action-confirm button when confirm is given', () => {
//       const { getByTestId } = render(<ModalConfirmationDialog confirm={'confirm'} />);
//       const confirmIsShown = getByTestId('dialog-action-confirm-button').textContent === 'confirm';
//       expect(confirmIsShown).toBeTruthy();
//     });
//
//     it('Should NOT show action-confirm button when confirm is NOT given', () => {
//       const { queryAllByTestId } = render(<ModalConfirmationDialog />);
//       const confirmIsNotShown = !queryAllByTestId('dialog-action-confirm-button').length;
//       expect(confirmIsNotShown).toBeTruthy();
//     });
//
//     it('Should call on confirm when confirm is given and action-confirm is clicked', () => {
//       const mockConfirm = jest.fn();
//       const { getByTestId } = render(<ModalConfirmationDialog confirm={'confirm'} onConfirm={mockConfirm} />);
//       const confirmCTA = getByTestId('dialog-action-confirm-button');
//       fireEvent.click(confirmCTA);
//       expect(mockConfirm).toHaveBeenCalled();
//     });
//
//     it('Should call on confirm when confirm is given and action-confirm is clicked passing event as param', () => {
//       const mockConfirm = jest.fn();
//       const { getByTestId } = render(<ModalConfirmationDialog confirm={'confirm'} onConfirm={mockConfirm} />);
//       const confirmCTA = getByTestId('dialog-action-confirm-button');
//       fireEvent.click(confirmCTA);
//       expect(mockConfirm).toHaveBeenCalledWith(new MouseEvent('click'));
//     });
//   });
//
//   describe('dismiss actions behavior', () => {
//     it('Should show action-dismiss button when dismiss is given', () => {
//       const { getByTestId } = render(<ModalConfirmationDialog dismiss={'dismiss'} />);
//       const dismissIsShown = getByTestId('dialog-action-dismiss-button').textContent === 'dismiss';
//       expect(dismissIsShown).toBeTruthy();
//     });
//
//     it('Should NOT show action-dismiss button when dismiss is NOT given', () => {
//       const { queryAllByTestId } = render(<ModalConfirmationDialog />);
//       const dismissIsNotShown = !queryAllByTestId('dialog-action-dismiss-button').length;
//       expect(dismissIsNotShown).toBeTruthy();
//     });
//
//     it('Should call on dismiss when dismiss is given and action-dismiss is clicked', () => {
//       const mockDismiss = jest.fn();
//       const { getByTestId } = render(<ModalConfirmationDialog dismiss={'dismiss'} onDismiss={mockDismiss} />);
//       const dismissCTA = getByTestId('dialog-action-dismiss-button');
//       fireEvent.click(dismissCTA);
//       expect(mockDismiss).toHaveBeenCalled();
//     });
//
//     it('Should call on dismiss when dismiss is given and action-dismiss is clicked passing event as param', () => {
//       const mockDismiss = jest.fn();
//       const { getByTestId } = render(<ModalConfirmationDialog dismiss={'dismiss'} onDismiss={mockDismiss} />);
//       const dismissCTA = getByTestId('dialog-action-dismiss-button');
//       fireEvent.click(dismissCTA);
//       expect(mockDismiss).toHaveBeenCalledWith(new MouseEvent('click'));
//     });
//   });
// });
