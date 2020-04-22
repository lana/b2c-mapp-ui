import { render, fireEvent } from '@testing-library/preact';

import FormField from './FormField';

describe('UI/forms/FormField', () => {
	const defaultProps = {
		name: 'my-input',
		placeholder: 'Placeholder',
		type: 'text',
	};

	describe('Label behavior', () => {
		it('Should have focus class if focus is triggered', () => {
			const { getByTestId } = render(<FormField {...defaultProps} />);
			const input = getByTestId('field-input');
			fireEvent.focus(input);
			const focusClass = getByTestId('field-label').className.includes('focus');
			expect(focusClass).toBeTruthy();
		});

		it('Should have focus class if focus it starts focused', () => {
			const { getByTestId } = render(<FormField {...defaultProps} startFocused />);
			const focusClass = getByTestId('field-label').className.includes('focus');
			expect(focusClass).toBeTruthy();
		});

		it('Should NOT have focus class if not focused', () => {
			const { getByTestId } = render(<FormField {...defaultProps} />);
			const noFocusClass = !getByTestId('field-label').className.includes('focus');
			expect(noFocusClass).toBeTruthy();
		});

		it('Should have labeled class if is readOnly', () => {
			const { getByTestId } = render(<FormField {...defaultProps} readOnly />);
			const labeledClass = getByTestId('field-label').className.includes('labeled');
			expect(labeledClass).toBeTruthy();
		});

		it('Should NOT have labeled class if is NOT readOnly', () => {
			const { getByTestId } = render(<FormField {...defaultProps} />);
			const noLabeledClass = !getByTestId('field-label').className.includes('labeled');
			expect(noLabeledClass).toBeTruthy();
		});

		it('Should have labeled class if showPrefix is given', () => {
			const { getByTestId } = render(<FormField {...defaultProps} showPrefix />);
			const labeledClass = getByTestId('field-label').className.includes('labeled');
			expect(labeledClass).toBeTruthy();
		});

		it('Should NOT have labeled class if showPrefix is NOT given', () => {
			const { getByTestId } = render(<FormField {...defaultProps} />);
			const noLabeledClass = !getByTestId('field-label').className.includes('labeled');
			expect(noLabeledClass).toBeTruthy();
		});

		it('Should have labeled class if value is given', () => {
			const { getByTestId } = render(<FormField {...defaultProps} value="yep" />);
			const labeledClass = getByTestId('field-label').className.includes('labeled');
			expect(labeledClass).toBeTruthy();
		});

		it('Should NOT have labeled class if value is NOT given', () => {
			const { getByTestId } = render(<FormField {...defaultProps} />);
			const noLabeledClass = !getByTestId('field-label').className.includes('labeled');
			expect(noLabeledClass).toBeTruthy();
		});

		it('Should show given children inside field-label', () => {
			const { getByTestId } = render(<FormField {...defaultProps}> Hey! </FormField>);
			const childrenIsInLabel = getByTestId('field-label').textContent.includes('Hey!');
			expect(childrenIsInLabel).toBeTruthy();
		});

		it('Should show given errorLabel as label content', () => {
			const { getByTestId } = render(<FormField {...defaultProps} errorLabel={'Error Label'} />);
			const errorLabel = getByTestId('field-label').textContent.includes('Error Label');
			expect(errorLabel).toBeTruthy();
		});

		it('Should NOT show given placeholder if errorLabel is given', () => {
			const { getByTestId } = render(<FormField {...defaultProps} errorLabel={'Error Label'} />);
			const noPlacholder = !getByTestId('field-label').textContent.includes('Placeholder');
			expect(noPlacholder).toBeTruthy();
		});
	});

	describe('Input behavior', () => {
		it('Should call given onChange when onChange is triggered', () => {
			const handleChangeMock = jest.fn();
			const { getByTestId } = render(<FormField {...defaultProps} onChange={handleChangeMock} />);
			const input = getByTestId('field-input');
			fireEvent.change(input);
			expect(handleChangeMock).toHaveBeenCalled();
		});

		it('Should call given onChange when onInput is triggered', () => {
			const handleChangeMock = jest.fn();
			const { getByTestId } = render(<FormField {...defaultProps} onChange={handleChangeMock} />);
			const input = getByTestId('field-input');
			fireEvent.input(input);
			expect(handleChangeMock).toHaveBeenCalled();
		});

		it('Should call given onBlur when onBlur is triggered', () => {
			const handleBlurMock = jest.fn();
			const { getByTestId } = render(<FormField {...defaultProps} onBlur={handleBlurMock} />);
			const input = getByTestId('field-input');
			fireEvent.blur(input);
			expect(handleBlurMock).toHaveBeenCalled();
		});

		it('Should call given onFocus when onFocus is triggered', () => {
			const handleFocusMock = jest.fn();
			const { getByTestId } = render(<FormField {...defaultProps} onFocus={handleFocusMock} />);
			const input = getByTestId('field-input');
			fireEvent.focus(input);
			expect(handleFocusMock).toHaveBeenCalled();
		});

		it('Should call given onFocus when startFocused is given', () => {
			const handleFocusMock = jest.fn();
			const { getByTestId } = render(<FormField {...defaultProps} startFocused onFocus={handleFocusMock} />,);
			const input = getByTestId('field-input');
			fireEvent.focus(input);
			expect(handleFocusMock).toHaveBeenCalled();
		});
	});
});
