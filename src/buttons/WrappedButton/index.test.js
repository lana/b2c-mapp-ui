import { render, fireEvent } from '@testing-library/preact'

import WrappedButton from './index';

describe('UI/buttons/WrappedButton', () => {
	const defaultProps = {
		dataTestId: 'test-id',
		onClick: () => {},
	}

	it('Should wrap a Button with a section', () => {
		const { getByTestId } = render(<WrappedButton {...defaultProps}>content</WrappedButton>)

		const sectionWrapperExist = getByTestId('test-id-wrapper')
		expect(sectionWrapperExist).toBeTruthy()
	})

	it('Should add extra class if given', () => {
        const { getByTestId } = render(<WrappedButton {...defaultProps} className={'myClassName'}>content</WrappedButton>)
		const extraClassApplied = getByTestId('test-id-wrapper').className.includes('myClassName')
		expect(extraClassApplied).toBeTruthy();
	})

	it('Should trigger onClick when its clicked', () => {
		const mockClick = jest.fn();
        const { getByTestId } = render(<WrappedButton {...defaultProps} onClick={mockClick}>content</WrappedButton>)
		const button = getByTestId('test-id-button')
		fireEvent.click(button);
		expect(mockClick).toHaveBeenCalled()
	})
})
