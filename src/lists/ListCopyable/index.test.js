import { render } from '@testing-library/preact'
import ListCopyable from '.'

describe('UI/lists/ListCopyable', () => {

    const defaultProps = {
        title: 'Title',
        options: [
            {
                icon: <img src="https://source.unsplash.com/random/24x24" />,
                text: 'Text to be copied',
                itemTitle: 'An Info text',
                hide: false,
            },
            {
                icon: <img src="https://source.unsplash.com/random/24x24" />,
                text: 'https://source.unsplash.com/random/24x24',
                itemTitle: 'Random URL',
                hide: true,
            },
            {
                icon: <img src="https://source.unsplash.com/random/24x24" />,
                text: 'https://source.unsplash.com/random/24x24',
                itemTitle: 'Random URL'
            }
        ]
    }

    it('Should show given title', () => {
        const { getByTestId } = render(<ListCopyable {...defaultProps}/>);
        const titleContentFound = getByTestId('heading').textContent === 'Title';
        expect(titleContentFound).toBeTruthy();
    })

    it('Should render given options', () => {
        const { queryAllByTestId } = render(<ListCopyable {...defaultProps}/>);
        const allOptionsAreShown = queryAllByTestId('list-copyable-element').length === 3;
        expect(allOptionsAreShown).toBeTruthy();
    })

    it('Should display copy to clipboard button if hide property is false for given option', () => {
        const targetAttribute = 'list-copyable-copy-to-clipboard-button-button';
        const { queryAllByTestId } = render(<ListCopyable {...defaultProps}/>);
        const option = queryAllByTestId('list-copyable-element')[0];
        const button = option.getElementsByTagName('button')[0];
        const copyToClipboardExist = button.getAttribute('data-testid') === targetAttribute
        expect(copyToClipboardExist).toBeTruthy();
    });
    
    it('Should NOT display copy to clipboard button if hide property is true for given option', () => {
        const { queryAllByTestId } = render(<ListCopyable {...defaultProps}/>);
        const option = queryAllByTestId('list-copyable-element')[1];
        const copyToClipboardNotFound = option.getElementsByTagName('button').length === 0;
        expect(copyToClipboardNotFound).toBeTruthy();
    });

    it('Should display copy to clipboard button if hide property is NOT given in option', () => {
        const targetAttribute = 'list-copyable-copy-to-clipboard-button-button';
        const { queryAllByTestId } = render(<ListCopyable {...defaultProps}/>);
        const option = queryAllByTestId('list-copyable-element')[2];
        const button = option.getElementsByTagName('button')[0];
        const copyToClipboardExist = button.getAttribute('data-testid') === targetAttribute
        expect(copyToClipboardExist).toBeTruthy();
    });

})