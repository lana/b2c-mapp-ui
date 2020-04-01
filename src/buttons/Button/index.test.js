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
			const button = getByTestId('button-button')
			expect(button).toBeTruthy()
		})

		it('Should NOT render a anchor if href is not provided', () => {
			const { queryByTestId } = render(<Button {...defaultButtonProps} />)
			const link = queryByTestId('button-link')
			expect(link).not.toBeTruthy()
		})

		it('Should add secondary className if secondary type is given', () => {
			const { getByTestId } = render(<Button {...defaultButtonProps} />)
			const buttonClasses = getByTestId('button-button').className
			expect(buttonClasses.includes('secondary')).toBe(true)
		})

		it('Should add disabled className if disabled type is given', () => {
			const { getByTestId } = render(<Button {...defaultButtonProps} type="disabled" />)
			const buttonClasses = getByTestId('button-button').className
			expect(buttonClasses.includes('disabled')).toBe(true)
		})
		it('Should add dismiss className if dismiss type is given', () => {
			const { getByTestId } = render(<Button {...defaultButtonProps} type="dismiss" />)
			const buttonClasses = getByTestId('button-button').className
			expect(buttonClasses.includes('dismiss')).toBe(true)
		})
		it('Should NOT add type className if given type is NOT disabled|secondary|dismiss', () => {
			const { getByTestId } = render(<Button {...defaultButtonProps} type="wrongType" />)
			const buttonClasses = getByTestId('button-button').className
			expect(buttonClasses.includes('wrongType')).toBe(false)
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
				const children = getByTestId('button-children')
				expect(children).toBeTruthy()
			})
			it('Should NOT show button-loading if is NOT loading', () => {
				const { queryByTestId } = render(<Button {...defaultButtonProps} loading={false} />)
				const loadingContent = queryByTestId('button-loading')
				expect(loadingContent).not.toBeTruthy()
			})

			it('Should NOT add loadingClass if given loading is false', () => {
				const { getByTestId } = render(<Button {...defaultButtonProps} loading={false} />)
				const buttonClasses = getByTestId('button-button').className
				expect(buttonClasses.includes('loading')).toBe(false)
			})
			it('Should add loading class if given loading is true', () => {
				const { getByTestId } = render(<Button {...defaultButtonProps} loading={true} />)
				const buttonClasses = getByTestId('button-button').className
				expect(buttonClasses.includes('loading')).toBe(true)
			})
			it('Should NOT show button-children-content if is loading', () => {
				const { queryByTestId } = render(<Button {...defaultButtonProps} loading={true} />)
				const children = queryByTestId('button-children')
				expect(children).not.toBeTruthy()
			})

			it('Should show loading content if given loading is true', () => {
				const { getByTestId } = render(<Button {...defaultButtonProps} loading={true} />)
				const loadingContent = getByTestId('button-loading')
				expect(loadingContent).toBeTruthy()
			})
		})
	})

	describe('Link behavior', () => {
        it('Should render a link if href is provided', () => {
			const { getByTestId } = render(<Button {...defaultLinkProps} />)
			const link = getByTestId('button-link')
			expect(link).toBeTruthy()
		})

		it('Should NOT render a button if href is provided', () => {
			const { queryByTestId } = render(<Button {...defaultLinkProps} />)
			const button = queryByTestId('button-button')
			expect(button).not.toBeTruthy()
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
