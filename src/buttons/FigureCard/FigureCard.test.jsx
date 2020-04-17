import { render } from '@testing-library/preact';
import FigureCard from './FigureCard'

describe('FigureCard unit test:', () => {
	const defaultProps = {
		dataTestId: 'figure-card-test',
		size: '',
		className: '',
		meta: 'Meta text',
		title: 'Title text',
		imageSrc: 'myImage.png'
	}
	it('Should set imageSrc as background for figure-card-test-image:', () => {
		const { getByTestId } = render(<FigureCard {...defaultProps} />)
		const backgroundApplied = getByTestId('figure-card-test-image').style.backgroundImage === 'url(myImage.png)';
		expect(backgroundApplied).toBeTruthy();
	});
})
