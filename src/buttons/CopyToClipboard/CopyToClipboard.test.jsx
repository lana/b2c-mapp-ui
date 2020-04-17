import { render, fireEvent } from '@testing-library/preact';
import copyToClipboard from '../../utils/copy-to-clipboard';
import CopyToClipboard from './CopyToClipboard';

jest.mock('./../../utils/copy-to-clipboard', (value, fn) => jest.fn());
jest.useFakeTimers();

describe('UI/buttons/CopyToClipboard', () => {
	it('Should call copy-to-clipboard on click', () => {
		const { getByTestId } = render(<CopyToClipboard valueToCopy="myValue" />);
		const button = getByTestId('copy-to-clipboard-button');
		fireEvent.click(button);
		jest.runAllTimers();
		expect(copyToClipboard).toHaveBeenCalled();
	});

	it('Should call copy-to-clipboard on click with given value to be copied', () => {
		const mockCallback = jest.fn();
		const { getByTestId } = render(<CopyToClipboard valueToCopy="myValue" />);
		const button = getByTestId('copy-to-clipboard-button');
		fireEvent.click(button);
		jest.runAllTimers();
		const firstArgumentUsed = copyToClipboard.mock.calls[0][0];
		expect(firstArgumentUsed).toEqual('myValue');
	});

	it('Should call copy-to-clipboard on click with callback function as second argument', () => {
		const mockCallback = jest.fn();
		const { getByTestId } = render(<CopyToClipboard valueToCopy="myValue" />);
		const button = getByTestId('copy-to-clipboard-button');
		fireEvent.click(button);
		jest.runAllTimers();
		const ndArgumentUsed = copyToClipboard.mock.calls[0][1];
		expect(typeof ndArgumentUsed).toEqual('function');
	});
});
