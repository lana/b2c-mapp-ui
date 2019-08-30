import { configure} from 'enzyme';
import { Adapter } from 'enzyme-adapter-preact';

configure({ adapter: new Adapter() });