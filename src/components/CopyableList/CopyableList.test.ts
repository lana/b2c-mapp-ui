import { render } from '@testing-library/vue';

import CopyableListWrapper from './UnitTestWrappers/CopyableListWrapper.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('CopyableList unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  it('Should show given title', () => {
    const { getByTestId } = render(CopyableListWrapper);
    const titleContentFound = getByTestId('heading').textContent?.includes('Title');
    expect(titleContentFound).toBeTruthy();
  });

  it('Should render given options', () => {
    const { queryAllByTestId } = render(CopyableListWrapper);
    const allOptionsAreShown = queryAllByTestId('copyable-list-item').length === 4;
    expect(allOptionsAreShown).toBeTruthy();
  });
});
