import { render } from '@testing-library/preact';
import TopBar from './index';

describe('UI/navigation/TopBar', () => {

    const defaultProps = {
        className: 'test-classname',
        dataTestId:'top-bar',
        title: 'my title'
    }

    it('Should show given title', () => {
        const { getByTestId } = render(<TopBar {...defaultProps}/>)
        const title = getByTestId('heading');
        expect(title.textContent).toEqual('my title');
    })

    it('Should apply given classname to header', () => {
        const { getByTestId } = render(<TopBar {...defaultProps}/>)
        const header = getByTestId('top-bar');
        expect(header.className.includes('test-classname')).toBe(true);
    })

});