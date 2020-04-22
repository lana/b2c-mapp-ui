import { render, fireEvent } from '@testing-library/preact';

import { FakeUseToggleComponent } from './../__mocks__/testutils';

const fakeComponentTestId = 'fake-component';

describe('useToggle test', () => {
  it('Should set flag as true if initialState is false and executing toggle once', () => {
    const { getByTestId, getByText } = render(<FakeUseToggleComponent initialState={false} />);
    fireEvent.click(getByTestId(fakeComponentTestId));
    expect(getByText('true')).toBeTruthy();
  });
  it('Should set flag as false if initialState is false and executing toggle twice', () => {
    const { getByTestId, getByText } = render(<FakeUseToggleComponent initialState={false} />);
    fireEvent.click(getByTestId(fakeComponentTestId));
    fireEvent.click(getByTestId(fakeComponentTestId));
    expect(getByText('false')).toBeTruthy();
  });
});
