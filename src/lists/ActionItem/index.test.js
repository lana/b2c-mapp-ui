import { render, fireEvent } from '@testing-library/preact';
import ActionItem from './index'

describe('UI/lists/ActionItem', () => {

    const defaultProps = {
        dataTestId:'action-item',
        className: "CLASSNAME",
        mediaColor: "MEDIACOLOR",
        media: "MEDIA",
        highlight: true,
        title: "TITLE"
    }
    
    it('Should apply given className class', () => {
        const { getByTestId } = render(<ActionItem {...defaultProps} />);
        const li = getByTestId('action-item');
        expect(li.className.includes('CLASSNAME')).toBe(true);
    });

    it('Should apply given mediaColor class', () => {
        const { getByTestId } = render(<ActionItem {...defaultProps} />);
        const div = getByTestId('action-item-mediacolor');
        expect(div.className.includes('MEDIACOLOR')).toBe(true);
    });

    it('Should show given media content', () => {
        const { getByTestId } = render(<ActionItem {...defaultProps} />);
        const mediaContent = getByTestId('action-item-mediacolor').textContent;
        expect(mediaContent).toEqual("MEDIA");
    });

    it('Should apply given highlight class to inner text', () => {
        const { getByTestId } = render(<ActionItem {...defaultProps} />);
        const textClass = getByTestId('text').className;
        expect(textClass.includes('highlight')).toBe(true);
    });

	it('should trigger components onClick', () => {
		const mockClick = jest.fn();
        const { getByTestId } = render(<ActionItem {...defaultProps} onClick={mockClick} />);
        const element = getByTestId('action-item');
        fireEvent.click(element);
		expect(mockClick).toHaveBeenCalled();
	});

});
