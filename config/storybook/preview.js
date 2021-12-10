import '../../src/styles/normalize.scss';
import './overrides.scss';
import '../../src/styles/fonts/graphik-web/fonts.css';
import '@lana/b2c-mapp-ui-assets/dist/style.css';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
