import { mount } from 'enzyme'
import FigureCard from '.'

describe('FigureCard unit test:', () => {
	const defaultProps = {
		dataTestId: 'figure-card-test',
		size: '',
		className: '',
		meta: 'Meta text',
		title: 'Title text',
		imageSrc: 'myImage.png',
		link: '/redirect/to/here',
		onClick: () => {},
	}
	it('Should set imageSrc as background for figure-card-test-image:', () => {
		const mockedClick = jest.fn()
		const wrapper = mount(<FigureCard {...defaultProps} onClick={mockedClick} />)
		const figureStyles = wrapper.find('[data-testid="figure-card-test-image"]').prop('style')
		expect(figureStyles).toHaveProperty('backgroundImage', "url('myImage.png')")
	})

	it('Should trigger onClick:', () => {
		const mockedClick = jest.fn()
		const wrapper = mount(<FigureCard {...defaultProps} onClick={mockedClick} />)
		const cta = wrapper.find('[data-testid="figure-card-test-cta"]')
		cta.simulate('click')
		expect(mockedClick).toHaveBeenCalled()
	})

	it('Should trigger onClick passing link as param:', () => {
		const mockedClick = jest.fn()
		const wrapper = mount(<FigureCard {...defaultProps} onClick={mockedClick} />)
		const cta = wrapper.find('[data-testid="figure-card-test-cta"]')
		cta.simulate('click')
		expect(mockedClick).toHaveBeenCalledWith(defaultProps.link)
	})
})
