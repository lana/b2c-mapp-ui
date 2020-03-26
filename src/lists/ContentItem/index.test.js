import { render, fireEvent } from '@testing-library/preact'

import ContentItem from './index'

describe('UI/lists/ContentItem', () => {
	const defaultProps = {
		dataTestId: 'content-item',
		mediaColor: 'MEDIACOLOR',
		media: <img src="any" />,
		meta: 'META',
		textColor: 'TEXTCOLOR',
		onClick: () => {
			console.log('test')
			return 'bu'
		},
		className: 'CLASSNAME',
		title: 'TITLE',
	}

	it('Should NOT show mediaIcon if its not given', () => {
		const { queryByTestId } = render(<ContentItem {...defaultProps} media={null} />)
		const media = queryByTestId('content-item-media-icon')
		expect(media).not.toBeTruthy()
	})

	it('Should show given mediaIcon', () => {
		const { getByTestId } = render(<ContentItem {...defaultProps} />)
		const media = getByTestId('content-item-media-icon')
		expect(media).toBeTruthy()
	})

	it('Should add given mediaColor to content-item-media-icon', () => {
		const { getByTestId } = render(<ContentItem {...defaultProps} />)
		const mediaClasses = getByTestId('content-item-media-icon').className
		expect(mediaClasses.includes('MEDIACOLOR')).toBe(true)
	})

	it('Should not add mediaColor class to content-item-media-icon if its not given', () => {
		const { getByTestId } = render(<ContentItem {...defaultProps} mediaColor={null} />)
		const mediaClasses = getByTestId('content-item-media-icon').className
		expect(mediaClasses.includes('MEDIACOLOR')).toBe(false)
	})

	it('Should show given meta info', () => {
		const { getByTestId } = render(<ContentItem {...defaultProps} />)
		const metaInfo = getByTestId('content-item-meta-text').textContent
		expect(metaInfo).toEqual('META')
	})

	it('Should NOT show meta information if is not given', () => {
		const { queryByTestId } = render(<ContentItem {...defaultProps} meta={null} />)
		const metaInfo = queryByTestId('content-item-meta-text')
		expect(metaInfo).not.toBeTruthy()
	})

	it('Should call onClick when content-item is clicked', () => {
		const mockOnClick = jest.fn()
		const { getByTestId } = render(<ContentItem {...defaultProps} onClick={mockOnClick} />)
		const li = getByTestId('content-item')
		fireEvent.click(li)
		expect(mockOnClick).toHaveBeenCalled()
	})

	it('Should display ForwardIcon if onClick is given', () => {
		const { getByTestId } = render(<ContentItem {...defaultProps} />)
		const forward = getByTestId('content-item').getElementsByClassName('icon')
		expect(forward.length).toEqual(1)
	})

	it('Should NOT display ForwardIcon if onClick is NOT given', () => {
		const { queryByTestId } = render(<ContentItem {...defaultProps} onClick={null} />)
		const forward = queryByTestId('content-item').getElementsByClassName('icon')
		expect(forward.length).toEqual(0)
	})
})
