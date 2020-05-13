// NOTE: See more theming options here: https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Lana µapp UI Library Storybook',
  brandUrl: 'https://lana.xyz',
  brandImage: 'https://lana.xyz/assets/images/lana_logo.svg',
});

export default theme;
