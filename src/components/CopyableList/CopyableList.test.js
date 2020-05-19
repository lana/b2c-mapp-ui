import { render } from '@testing-library/vue';

import CopyableListWrapper from './UnitTestWrappers/CopyableListWrapper.vue';

describe('CopyableList unit test', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  it('Should show given title', () => {
    const { getByTestId } = render(CopyableListWrapper);
    const titleContentFound = getByTestId('heading').textContent.includes('Title');
    expect(titleContentFound).toBeTruthy();
  });

  it('Should render given options', () => {
    const { queryAllByTestId } = render(CopyableListWrapper);
    const allOptionsAreShown = queryAllByTestId('copyable-list-item').length === 4;
    expect(allOptionsAreShown).toBeTruthy();
  });
});
