import { render, fireEvent } from '@testing-library/preact'

import ForwardButton from './ForwardButton';

describe('UI/buttons/ForwardButton', () => {
	const defaultProps = {
		dataTestId: 'test-id',
		onClick: () => {},
	}

	it('Should wrap a Button with a section', () => {
		const { getByTestId } = render(<ForwardButton {...defaultProps}/>)
		const sectionWrapperExist = getByTestId('test-id-section')
		expect(sectionWrapperExist).toBeTruthy()
	})

	it('Should add extra class if given', () => {
    const { getByTestId } = render(<ForwardButton {...defaultProps} className={'myClassName'}/>)
		const extraClassApplied = getByTestId('test-id-section').className.includes('myClassName')
		expect(extraClassApplied).toBeTruthy()
	})

	it('Should trigger onClick when its clicked', () => {
		const mockClick = jest.fn();
    const { getByTestId } = render(<ForwardButton {...defaultProps} onClick={mockClick}/>)
		const button = getByTestId('test-id-button')
		fireEvent.click(button);
		expect(mockClick).toHaveBeenCalled()
	})
})
