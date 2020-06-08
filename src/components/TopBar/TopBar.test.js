import { render } from '@testing-library/vue';

import TopBar from './TopBar.vue';

describe('TopBar unit test', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });
  const defaultProps = {
    className: 'test-classname',
    dataTestId: 'top-bar',
    title: 'my title',
  };

  it('Should show given title', () => {
    const { getByTestId } = render(TopBar, { propsData: { ...defaultProps } });
    const title = getByTestId('heading');
    expect(title.textContent).toEqual('my title');
  });

  it('Should apply given classname to header', () => {
    const { getByTestId } = render(TopBar, { propsData: { ...defaultProps, class: 'test-classname' } });
    const header = getByTestId('top-bar');
    expect(header.className.includes('test-classname')).toBe(true);
  });
});
