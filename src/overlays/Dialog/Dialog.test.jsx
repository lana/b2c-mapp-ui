import { render, fireEvent } from '@testing-library/preact';
import Dialog from './Dialog';

describe('UI/overlays/Dialog', () => {
	it('Should show description if provided', () => {
		const { getByTestId } = render(<Dialog description={'description'} />);
		const descriptionIsShown = getByTestId('dialog-description').textContent === 'description';
		expect(descriptionIsShown).toBeTruthy();
	});

	it('Should show children if provided', () => {
		const { getByTestId } = render(<Dialog children={'children'} />);
		const childrenIsShown = getByTestId('dialog-children').textContent === 'children';
		expect(childrenIsShown).toBeTruthy();
	});

	it('Should not show children if also description is given', () => {
		const { queryAllByTestId } = render(<Dialog children={'children'} description="description" />);
		const childrenIsNotShown = !queryAllByTestId('dialog-children').length
		expect(childrenIsNotShown).toBeTruthy();
	})

	it('Should show title if provided', () => {
		const { getByTestId } = render(<Dialog title={'title'} />);
		const titleIsShown = getByTestId('dialog-title').textContent === 'title';
		expect(titleIsShown).toBeTruthy();
	});
    
    it('Should apply visible class if visible is given:', () => {
        const { getByTestId } = render(<Dialog visible />);
		const isVisible = getByTestId('dialog-section').className.includes('visible');
		expect(isVisible).toBeTruthy();
    })
    
    it('Should NOT visible class if visible is given to false:', () => {
        const { getByTestId } = render(<Dialog visible={false} />);
		const isNotVisible = !getByTestId('dialog-section').className.includes('visible');
		expect(isNotVisible).toBeTruthy();
    })

	describe('confirm actions behavior', () => {
		it('Should show action-confirm button when confirm is given', () => {
			const { getByTestId } = render(<Dialog confirm={'confirm'} />);
			const confirmIsShown = getByTestId('dialog-action-confirm-button').textContent === 'confirm';
			expect(confirmIsShown).toBeTruthy();
		});

		it('Should NOT show action-confirm button when confirm is NOT given', () => {
			const { queryAllByTestId } = render(<Dialog />);
			const confirmIsNotShown = !queryAllByTestId('dialog-action-confirm-button').length;
			expect(confirmIsNotShown).toBeTruthy();
		});

		it('Should call on confirm when confirm is given and action-confirm is clicked', () => {
			const mockConfirm = jest.fn();
			const { getByTestId } = render(<Dialog confirm={'confirm'} onConfirm={mockConfirm} />);
			const confirmCTA = getByTestId('dialog-action-confirm-button');
			fireEvent.click(confirmCTA);
			expect(mockConfirm).toHaveBeenCalled();
		});

		it('Should call on confirm when confirm is given and action-confirm is clicked passing event as param', () => {
			const mockConfirm = jest.fn();
			const { getByTestId } = render(<Dialog confirm={'confirm'} onConfirm={mockConfirm} />);
			const confirmCTA = getByTestId('dialog-action-confirm-button');
			fireEvent.click(confirmCTA);
			expect(mockConfirm).toHaveBeenCalledWith(new MouseEvent('click'));
		});
	});

	describe('dismiss actions behavior', () => {
		it('Should show action-dismiss button when dismiss is given', () => {
			const { getByTestId } = render(<Dialog dismiss={'dismiss'} />);
			const dismissIsShown = getByTestId('dialog-action-dismiss-button').textContent === 'dismiss';
			expect(dismissIsShown).toBeTruthy();
		});

		it('Should NOT show action-dismiss button when dismiss is NOT given', () => {
			const { queryAllByTestId } = render(<Dialog />);
			const dismissIsNotShown = !queryAllByTestId('dialog-action-dismiss-button').length;
			expect(dismissIsNotShown).toBeTruthy();
		});

		it('Should call on dismiss when dismiss is given and action-dismiss is clicked', () => {
			const mockDismiss = jest.fn();
			const { getByTestId } = render(<Dialog dismiss={'dismiss'} onDismiss={mockDismiss} />);
			const dismissCTA = getByTestId('dialog-action-dismiss-button');
			fireEvent.click(dismissCTA);
			expect(mockDismiss).toHaveBeenCalled();
		});

		it('Should call on dismiss when dismiss is given and action-dismiss is clicked passing event as param', () => {
			const mockDismiss = jest.fn();
			const { getByTestId } = render(<Dialog dismiss={'dismiss'} onDismiss={mockDismiss} />);
			const dismissCTA = getByTestId('dialog-action-dismiss-button');
			fireEvent.click(dismissCTA);
			expect(mockDismiss).toHaveBeenCalledWith(new MouseEvent('click'));
		});
	});
});
