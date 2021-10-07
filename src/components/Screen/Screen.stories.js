import { action } from '@storybook/addon-actions';

import Screen from './Screen.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>Screen:</strong>&nbsp;A wrapper used by each Screen of a microapp.');

const ScreenStories = {
  component: Screen,
  title: 'Components/Screen',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    default: '<p style="margin: 20px;">Example Screen Content</p>',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    Screen,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  methods: {
    onKeyboardFocus: action('KeyboardFocus!'),
    onKeyboardBlur: action('KeyboardBlur!'),
  },
  template: `
    <Screen @keyboardFocus="onKeyboardFocus"
            @keyboardBlur="onKeyboardBlur"
    >
      <RenderString :string="defaultSlot" v-if="defaultSlot" />
    </Screen>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<Screen @keyboardFocus="onKeyboardFocus"
        @keyboardBlur="onKeyboardBlur"
>
  <p style="margin: 20px;">Example Screen Content</p>
</Screen>`,
    },
  },
};

export {
  defaultExample,
};

export default ScreenStories;
