import WebFont from 'webfontloader';
import { addons } from '@storybook/addons';

import lanaTheme from './theme';

addons.setConfig({
  theme: lanaTheme,
});

const webFontOptions = {
  google: {
    families: ['Roboto:300,400,700', 'sans-serif'],
  },
  custom: {
    families: ['Graphik:n4,n5,n6', 'sans-serif'],
    urls: ['./graphik-web/fonts.css'],
  },
};
WebFont.load(webFontOptions);
