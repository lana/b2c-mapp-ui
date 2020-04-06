import { render, fireEvent } from '@testing-library/preact';
import ActionItem from './index'

describe('UI/lists/ActionItem', () => {

    const defaultProps = {
        dataTestId:'action-item',
        className: "CLASSNAME",
        mediaColor: "RED",
        mediaContent: <img src='' alt=''/>,
        highlight: true,
        title: "TITLE"
    }

    const withoutMediaContentProps = {
        dataTestId:'action-item',
        className: "CLASSNAME",
        mediaColor: "RED",
        title: "TITLE"
    }
    
    it('Should apply given className class', () => {
        const { getByTestId } = render(<ActionItem {...defaultProps} />);
        const classNameApplied = getByTestId('action-item').className.includes('CLASSNAME');
        expect(classNameApplied).toBeTruthy();
    });

    it('Should apply mediaColorClassname if mediaContent and mediaColor prop is given', () => {
        const { getByTestId } = render(<ActionItem {...defaultProps} />);
        const mediaColorClassApplied = getByTestId('action-item-mediacolor').className.includes('RED');
        expect(mediaColorClassApplied).toBeTruthy();
    });

    it('Should NOT include action-item-mediacolor item if mediaContent is NOT given', () => {
        const { queryAllByTestId } = render(<ActionItem {...withoutMediaContentProps} />);
        const mediaColorNotExist = queryAllByTestId('action-item-mediacolor').length === 0;
        expect(mediaColorNotExist).toBeTruthy();
    });

    it('Should apply given highlight class to inner text', () => {
        const { getByTestId } = render(<ActionItem {...defaultProps} />);
        const highlightApplied = getByTestId('action-item-highlight').className.includes('highlight');
        expect(highlightApplied).toBe(true);
    });

    it('Should NOT apply given highlight class to action-item-highlight if highlight is NOT given', () => {
        const { getByTestId } = render(<ActionItem {...defaultProps} highlight={false} />);
        const highlightNotApplied = !getByTestId('action-item-highlight').className.includes('highlight');
        expect(highlightNotApplied).toBeTruthy();
    });

	it('should trigger components onClick', () => {
		const mockClick = jest.fn();
        const { getByTestId } = render(<ActionItem {...defaultProps} onClick={mockClick} />);
        const element = getByTestId('action-item');
        fireEvent.click(element);
		expect(mockClick).toHaveBeenCalled();
	});

});
