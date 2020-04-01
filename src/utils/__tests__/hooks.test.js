import { render, fireEvent } from '@testing-library/preact';

import { FakeUseToggleComponent } from './../__mocks__/testutils';

describe('useToggle test', () => {
  it('Should set flag as true if initialState is false and executing toggle once', () => {
    const { getByTestId, getByText } = render(
      <FakeUseToggleComponent initialState={false} />
    );
    fireEvent.click(getByTestId('fake-component'));
    expect(getByText('true')).toBeTruthy();
  });
  it('Should set flag as false if initialState is false and executing toggle twice', () => {
    const { getByTestId, getByText } = render(
      <FakeUseToggleComponent initialState={false} />
    );
    fireEvent.click(getByTestId('fake-component'));
    fireEvent.click(getByTestId('fake-component'));
    expect(getByText('false')).toBeTruthy();
  });
});