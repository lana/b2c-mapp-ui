import '../../src/styles/normalize.scss';
import './overrides.scss';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
