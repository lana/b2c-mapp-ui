import { render, fireEvent, act } from '@testing-library/preact'
import Button from './index'

describe('UI/buttons/Button', () => {
	const defaultButtonProps = {
		className: 'my-class-name',
		type: 'secondary',
		loading: false,
		href: null,
		onClick: () => {},
		children: <span>Children</span>,
	}

	const defaultLinkProps = {
		className: 'my-class-name',
		type: 'primary',
		loading: false,
		href: '#',
		onClick: () => {},
		children: <span data-testid={'link-children'}>Children</span>,
	}

	describe('Button behavior', () => {
		it('Should render a button if href is not provided', () => {
			const { getByTestId } = render(<Button {...defaultButtonProps} />)
			const itsAButton = getByTestId('button-button')
			expect(itsAButton).toBeTruthy()
		})

		it('Should NOT render a anchor if href is not provided', () => {
			const { queryAllByTestId } = render(<Button {...defaultButtonProps} />)
			const itsNotALink = !queryAllByTestId('button-link').length > 0
			expect(itsNotALink).toBeTruthy()
		})

		it('Should add secondary className if secondary type is given', () => {
			const { getByTestId } = render(<Button {...defaultButtonProps} />);
			const hasSecondaryClassName = getByTestId('button-button').className.includes('secondary');
			expect(hasSecondaryClassName).toBeTruthy()
		})

		it('Should add disabled className if disabled type is given', () => {
			const { getByTestId } = render(<Button {...defaultButtonProps} type="disabled" />)
			const hasDisabledClassName = getByTestId('button-button').className.includes('disabled')
			expect(hasDisabledClassName).toBeTruthy()
		})
		it('Should add dismiss className if dismiss type is given', () => {
			const { getByTestId } = render(<Button {...defaultButtonProps} type="dismiss" />)
			const hasDismissClassName = getByTestId('button-button').className.includes('dismiss')
			expect(hasDismissClassName).toBeTruthy()
		})
		it('Should NOT add type className if given type is NOT disabled|secondary|dismiss', () => {
			const { getByTestId } = render(<Button {...defaultButtonProps} type="wrongType" />)
			const wrongTypeNotSupported = !getByTestId('button-button').className.includes('wrongType')
			expect(wrongTypeNotSupported).toBeTruthy()
		})

		it('Should call onClick when is clicked', () => {
			const myMockClick = jest.fn()
			const { getByTestId } = render(<Button {...defaultButtonProps} onClick={myMockClick} />)
			const button = getByTestId('button-button')
			fireEvent.click(button)
			expect(myMockClick).toHaveBeenCalled()
        })
        
		describe('Loading behavior', () => {
			it('Should show button-children-content if is NOT loading', () => {
				const { getByTestId } = render(<Button {...defaultButtonProps} loading={false} />)
				const childrenExists = getByTestId('button-children')
				expect(childrenExists).toBeTruthy()
			})
			it('Should NOT show button-loading if is NOT loading', () => {
				const { queryAllByTestId } = render(<Button {...defaultButtonProps} loading={false} />)
				const withoutLoadingContent = queryAllByTestId('button-loading').length === 0;
				expect(withoutLoadingContent).toBeTruthy()
			})

			it('Should NOT add loadingClass if given loading is false', () => {
				const { getByTestId } = render(<Button {...defaultButtonProps} loading={false} />)
				const loadingClassNotApplied = !getByTestId('button-button').className.includes('loading')
				expect(loadingClassNotApplied).toBeTruthy()
			})
			it('Should add loading class if given loading is true', () => {
				const { getByTestId } = render(<Button {...defaultButtonProps} loading={true} />)
				const loadingClassApplied = getByTestId('button-button').className.includes('loading')
				expect(loadingClassApplied).toBeTruthy()
			})
			it('Should NOT show button-children-content if is loading', () => {
				const { queryAllByTestId } = render(<Button {...defaultButtonProps} loading={true} />)
				const childrenNotExsist = queryAllByTestId('button-children').length === 0
				expect(childrenNotExsist).toBeTruthy()
			})

			it('Should show loading content if given loading is true', () => {
				const { getByTestId } = render(<Button {...defaultButtonProps} loading={true} />)
				const loadingContentExist = getByTestId('button-loading')
				expect(loadingContentExist).toBeTruthy()
			})
		})
	})

	describe('Link behavior', () => {
        it('Should render a link if href is provided', () => {
			const { getByTestId } = render(<Button {...defaultLinkProps} />)
			const itsALink = getByTestId('button-link')
			expect(itsALink).toBeTruthy()
		})

		it('Should NOT render a button if href is provided', () => {
			const { queryAllByTestId } = render(<Button {...defaultLinkProps} />)
			const itsNotAButton = queryAllByTestId('button-button').length === 0;
			expect(itsNotAButton).toBeTruthy()
		})

		it('Should call onClick when is clicked', () => {
			const myMockClick = jest.fn()
			const { getByTestId } = render(<Button {...defaultLinkProps} onClick={myMockClick} />)
			const link = getByTestId('button-link')
			fireEvent.click(link)
			expect(myMockClick).toHaveBeenCalled()
        })
	})
})
