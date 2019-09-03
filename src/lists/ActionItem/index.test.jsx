import { mount } from 'enzyme';
import ActionItem from './index'
import { shallow } from 'preact-render-spy';

describe('UI/lists/ActionItem', () => {
	let wrapper;

	test('should render correctly',  () => {
		wrapper = mount(<ActionItem title='boo' media={<img src="any" />}  />)
		expect(wrapper).toMatchSnapshot()
	})
	test('should render correctly with params highlight and mediaColor',  () => {
		wrapper = mount(<ActionItem title='boo' media={<img src="any" highlight mediaColor="blue" />}  />)
		expect(wrapper).toMatchSnapshot()
	})
	test('should find declared params: media, mediaColor, highlight, className, title',  () => {
		const div = document.createElement('div');
		const props = {
			className: "CLASSNAME",
			mediaColor: "MEDIACOLOR",
			media: "MEDIA",
			highlight: true,
			title: "TITLE"
		}
		wrapper = mount(<ActionItem {...props} />)
		// workaround to avoid preact/enzyme conflict
		div.innerHTML = wrapper.html()
		expect(div.querySelectorAll(`li.${props.className}`).length).toBe(1)
		expect(div.querySelectorAll(`div.${props.mediaColor}`).length).toBe(1)
		expect(div.querySelector(`div.${props.mediaColor}`).innerHTML).toBe(props.media)
		expect(div.querySelector(`p.highlight`).innerHTML).toBe(props.title)
	})
	test('should trigger component\'s onClick', () => {
		let check = false;
		wrapper = shallow(<ActionItem onClick={() => { check = true; }} />)
		wrapper.find('[onClick]').simulate('click')
		expect(check).toBe(true)
	})

});
