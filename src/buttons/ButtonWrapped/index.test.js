import { render, fireEvent } from '@testing-library/preact'

import ButtonWrapped from './index';

describe('UI/buttons/ButtonWrapped', () => {
	const defaultProps = {
		dataTestId: 'test-id',
		onClick: () => {},
	}

	it('Should wrap a Button with a section', () => {
		const { getByTestId } = render(<ButtonWrapped {...defaultProps}>content</ButtonWrapped>)

		const section = getByTestId('test-id-wrapper')
		expect(section).toBeTruthy()
	})

	it('Should add extra class if given', () => {
        const { getByTestId } = render(<ButtonWrapped {...defaultProps} className={'myClassName'}>content</ButtonWrapped>)
		const section = getByTestId('test-id-wrapper')
		expect(section.className.includes('myClassName')).toBe(true)
	})

	it('Should trigger onClick when its clicked', () => {
		const mockClick = jest.fn();
        const { getByTestId } = render(<ButtonWrapped {...defaultProps} onClick={mockClick}>content</ButtonWrapped>)
		const button = getByTestId('test-id-button')
		fireEvent.click(button);
		expect(mockClick).toHaveBeenCalled()
	})
})
