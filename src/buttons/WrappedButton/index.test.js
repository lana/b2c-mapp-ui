import { render, fireEvent } from '@testing-library/preact'

import WrappedButton from './index';

describe('UI/buttons/WrappedButton', () => {
	const defaultProps = {
		dataTestId: 'test-id',
		onClick: () => {},
	}

	it('Should wrap a Button with a section', () => {
		const { getByTestId } = render(<WrappedButton {...defaultProps}>content</WrappedButton>)

		const section = getByTestId('test-id-wrapper')
		expect(section).toBeTruthy()
	})

	it('Should add extra class if given', () => {
        const { getByTestId } = render(<WrappedButton {...defaultProps} className={'myClassName'}>content</WrappedButton>)
		const section = getByTestId('test-id-wrapper')
		expect(section.className.includes('myClassName')).toBe(true)
	})

	it('Should trigger onClick when its clicked', () => {
		const mockClick = jest.fn();
        const { getByTestId } = render(<WrappedButton {...defaultProps} onClick={mockClick}>content</WrappedButton>)
		const button = getByTestId('test-id-button')
		fireEvent.click(button);
		expect(mockClick).toHaveBeenCalled()
	})
})
