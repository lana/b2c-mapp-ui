import copyToClipboard from './copyToClipboard';

describe('CopyToClipboardButton unit test:', () => {
  it('Should call given the callback if window exists', () => {
    const mockCallback = jest.fn();
    copyToClipboard('myText', mockCallback);
    expect(mockCallback).toHaveBeenCalled();
  });
});
