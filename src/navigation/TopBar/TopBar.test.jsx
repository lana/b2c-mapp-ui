import { mount } from 'enzyme';
import TopBar from './TopBar'

describe('UI/navigation/TopBar', () => {
	const wrapper = mount(<TopBar title="test" className="test" />)
	const div = document.createElement('div')
	div.innerHTML = wrapper.html()
	const find = (tag) => [].slice.call(div.querySelectorAll(tag))
	test('should render correctly',  () => {
		expect(wrapper).toMatchSnapshot()
	})
	test('should find a header tag',  () => {
		expect(find('header').length).toBe(1)
	})

	test('should find a h1 tag',  () => {
		expect(find('header').length).toBe(1)
	})

	test('should find customized className',  () => {
		expect(find('.test').length).toBe(1)
	})
})