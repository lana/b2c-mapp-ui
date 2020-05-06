import { shallowMount } from '@vue/test-utils';

import CopyToClipboardButton from './CopyToClipboardButton.vue';
import copyToClipboard from '../../utils/copyToClipboard';

// TODO: Uncomment the below test cases after refactoring to work with Vue

// jest.mock('../../utils/copyToClipboard', (value, fn) => jest.fn());
// jest.useFakeTimers();
//
// describe('UI/buttons/CopyToClipboardButton', () => {
//   it('Should call copy-to-clipboard on click', () => {
//     const { getByTestId } = render(<CopyToClipboardButton toCopyValue="myValue" />);
//     const button = getByTestId('copy-to-clipboard-button');
//     fireEvent.click(button);
//     jest.runAllTimers();
//     expect(copyToClipboard).toHaveBeenCalled();
//   });
//
//   it('Should call copy-to-clipboard on click with given value to be copied', () => {
//     const mockCallback = jest.fn();
//     const { getByTestId } = render(<CopyToClipboardButton toCopyValue="myValue" />);
//     const button = getByTestId('copy-to-clipboard-button');
//     fireEvent.click(button);
//     jest.runAllTimers();
//     const firstArgumentUsed = copyToClipboard.mock.calls[0][0];
//     expect(firstArgumentUsed).toEqual('myValue');
//   });
//
//   it('Should call copy-to-clipboard on click with callback function as second argument', () => {
//     const mockCallback = jest.fn();
//     const { getByTestId } = render(<CopyToClipboardButton toCopyValue="myValue" />);
//     const button = getByTestId('copy-to-clipboard-button');
//     fireEvent.click(button);
//     jest.runAllTimers();
//     const ndArgumentUsed = copyToClipboard.mock.calls[0][1];
//     expect(typeof ndArgumentUsed).toEqual('function');
//   });
// });
