import { mount } from 'enzyme';
import Stepper from './index'
import { shallow } from 'preact-render-spy';
import Router from '../../../../src/Router'

describe('UI/navigation/Stepper', () => {
	let wrapper;
	test('should render correctly',  () => {
		wrapper = mount(<Stepper steps={3} activeStep={2} hideActive={false}  className="teste" title="teste" />)
		expect(wrapper).toMatchSnapshot()
	})
	test('should render correctly',  () => {
		wrapper = mount(<Stepper steps={3} activeStep={1} />)
		expect(wrapper).toMatchSnapshot()
	})
	test('should find three steps',  () => {
		const div = document.createElement('div')
		let arr;
		wrapper = mount(<Stepper steps={3} activeStep={1} />)
		div.innerHTML = wrapper.html()
		arr = [].slice.call(div.querySelectorAll('li'))
		expect(arr.length).toBe(3)
		expect(div.querySelector('li:nth-child(2)').className).toContain('active')

	})
})
