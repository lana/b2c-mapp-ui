import { render, fireEvent } from '@testing-library/preact';

import ListItem from './ListItem';

describe('UI/lists/ListItem', () => {
	const defaultProps = {
		title: 'Main Title',
	};

	describe('General behavior', () => {
		it('Should show given title', () => {
			const { getByTestId } = render(<ListItem {...defaultProps} />);
			const titleExists = getByTestId('heading').textContent === 'Main Title';
			expect(titleExists).toBeTruthy();
		});

		it('Should show given description if given', () => {
			const { getByTestId } = render(<ListItem {...defaultProps} description={'desc'} />);
			const descriptionExists = getByTestId('list-item-description').textContent === 'desc';
			expect(descriptionExists).toBeTruthy();
		});

		it('Should not show empty description if not given', () => {
			const { queryAllByTestId } = render(<ListItem {...defaultProps} />);
			const descriptionNotExists = queryAllByTestId('list-item-description').length === 0;
			expect(descriptionNotExists).toBeTruthy();
		});

		it('Should show given icon if given', () => {
			const { queryAllByTestId } = render(<ListItem {...defaultProps} icon={<svg></svg>} />);
			const iconExists = queryAllByTestId('list-item-icon').length;
			expect(iconExists).toBeTruthy();
		});

		it('Should not show icon if not given', () => {
			const { queryAllByTestId } = render(<ListItem {...defaultProps} />);
			const iconNotExists = queryAllByTestId('list-item-icon').length === 0;
			expect(iconNotExists).toBeTruthy();
		});
	});

	describe('Link heading behavior', () => {
		const withLinkProps = {
			...defaultProps,
			onLink: () => {},
			linkText: 'link text',
		};

		it('Should not show link content if onLink is not given', () => {
			const { queryAllByTestId } = render(<ListItem {...defaultProps} />);
			const linkNotExists = queryAllByTestId('list-item-heading-link').length === 0;
			expect(linkNotExists).toBeTruthy();
		});

		it('Should show link content if onLink event is given', () => {
			const { getByTestId } = render(<ListItem {...withLinkProps} />);
			const linkExists = getByTestId('list-item-heading-link').textContent === 'link text';
			expect(linkExists).toBeTruthy();
		});

		it('Should call onLink method when list-item-heading-link is clicked', () => {
			const onLinkHandlerMock = jest.fn();
			const { getByTestId } = render(<ListItem {...withLinkProps} onLink={onLinkHandlerMock} />);
			const link = getByTestId('list-item-heading-link');
			fireEvent.click(link);
			expect(onLinkHandlerMock).toHaveBeenCalled();
		});
	});

	describe('Toggler behavior', () => {
		it('Should not visible if onChange is not provided', () => {
			const { queryAllByTestId } = render(<ListItem {...defaultProps} />);
			const toggleNotExists = queryAllByTestId('list-item-toggle').length === 0;
			expect(toggleNotExists).toBeTruthy();
		});

		it('Should be visible if onChange is  provided', () => {
			const { getByTestId } = render(<ListItem {...defaultProps} onChange={jest.fn()} />);
			const toggleExists = getByTestId('list-item-toggle');
			expect(toggleExists).toBeTruthy();
		});

		it('Should trigger onChange if list-item-toggle-input is clicked', () => {
			const mockedOnChangeHandler = jest.fn();
			const { getByTestId } = render(<ListItem {...defaultProps} onChange={mockedOnChangeHandler} />);
			const toggleExists = getByTestId('list-item-toggle-input');
			fireEvent.change(toggleExists);
			expect(mockedOnChangeHandler).toHaveBeenCalled();
		});
	});
});
