
import ContentItem from './index'
import { mount, shallow } from 'enzyme';

describe('UI/lists/ContentItem', () => {
	let wrapperS;
	let wrapperM;
	const props = {
		mediaColor: "MEDIACOLOR",
		media: <img src="any"/>,
		meta: "META",
		textColor: "TEXTCOLOR",
		onClick: () => { console.log('test'); return 'bu'},
		className: "CLASSNAME",
		title: "TITLE"
	}
	beforeEach(()=>{
		wrapperS = shallow(<ContentItem {...props} />)
		wrapperM = mount(<ContentItem {...props} />)
	})
	test('should render correctly',  () => {
		expect(wrapperS).toMatchSnapshot()
	})
	test('should render correctly with minimal config',  () => {
		wrapperS = shallow(<ContentItem title="title" />)
		expect(wrapperS).toMatchSnapshot()
	})

	test('should render correctly with params: mediaColor, media, meta, className, title ',  () => {
		const div = document.createElement('div');
		// workaround to avoid preact/enzyme conflict
		div.innerHTML = wrapperM.html()
		expect(div.querySelectorAll(`div.${props.mediaColor}`).length).toBe(1)
		expect(div.querySelector('img').src).toBe('http://localhost/any')
		expect(div.querySelectorAll(`li.${props.className}`).length).toBe(1)
		// expect(div.querySelector(`p.callout`).innerHTML).toContain(props.meta)
		expect(div.querySelectorAll(`li.${props.className}`).length).toBe(1)
	})
	test('should test click behavior',  () => {
		let check = false
		wrapperS = shallow(<ContentItem title="title" onClick={() => { check=true }} />)
		wrapperS.find('[onClick]').simulate('click')
		expect(check).toBe(true)
	})
})
