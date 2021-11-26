import '../../src/styles/normalize.scss';
import './overrides.scss';
import '../../public/fonts/graphik-web/fonts.css';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
