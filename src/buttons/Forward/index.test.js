import { render, fireEvent } from '@testing-library/preact'

import Forward from './index';

describe('UI/buttons/Forward', () => {
	const defaultProps = {
		dataTestId: 'test-id',
		onClick: () => {},
	}

	it('Should wrap a Button with a section', () => {
		const { getByTestId } = render(<Forward {...defaultProps}/>)
		const sectionWrapperExist = getByTestId('test-id-section')
		expect(sectionWrapperExist).toBeTruthy()
	})

	it('Should add extra class if given', () => {
        const { getByTestId } = render(<Forward {...defaultProps} className={'myClassName'}/>)
		const extraClassApplied = getByTestId('test-id-section').className.includes('myClassName')
		expect(extraClassApplied).toBeTruthy()
	})

	it('Should trigger onClick when its clicked', () => {
		const mockClick = jest.fn();
        const { getByTestId } = render(<Forward {...defaultProps} onClick={mockClick}/>)
		const button = getByTestId('test-id-button')
		fireEvent.click(button);
		expect(mockClick).toHaveBeenCalled()
	})
})
