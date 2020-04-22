import copyToClipboard from './../copyToClipboard'

describe('CopyToClipboardButton unit test:', () => {
	it('Should call given callback if window exists', () => {
		const mockCallback = jest.fn()
		copyToClipboard('myText', mockCallback);
		expect(mockCallback).toHaveBeenCalled()
	})
})