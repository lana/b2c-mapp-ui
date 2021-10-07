import { render } from '@testing-library/vue';

import TopBar from './TopBar.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('TopBar unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });
  const defaultProps = {
    className: 'test-classname',
    dataTestId: 'top-bar',
    title: 'my title',
  };

  it('Should show given title', () => {
    const { getByTestId } = render(TopBar, { props: { ...defaultProps } });
    const title = getByTestId('heading');
    expect(title.textContent).toEqual('my title');
  });

  it('Should apply given classname to header', () => {
    const { getByTestId } = render(TopBar, { props: { ...defaultProps, class: 'test-classname' } });
    const header = getByTestId('top-bar');
    expect(header.className.includes('test-classname')).toBe(true);
  });
});
