import { action } from '@storybook/addon-actions';

import ForwardButton from './ForwardButton.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>ForwardButton:</strong>&nbsp;Wraps a Button component with extra padding to be placed at the bottom of the screen.');

const ForwardButtonStories = {
  component: ForwardButton,
  title: 'Components/ForwardButton',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    disabled: false,
    debounce: false,
    debounceDelay: 400,
    default: '',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    disabled: { control: 'boolean', name: 'Is Disabled?' },
    debounce: { control: 'boolean', name: 'Has debounce?' },
    debounceDelay: { control: { type: 'number', step: 100 }, name: 'Debounce Delay' },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ForwardButton,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
    <div style="height: 100vh;">
      <ForwardButton :disabled="disabled"
                     :debounce="debounce"
                     :debounce-delay="debounceDelay"
                     @click="onClick"
      >
        <RenderString :string="defaultSlot" v-if="defaultSlot"/>
      </ForwardButton>
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<ForwardButton :disabled="disabled"
               :debounce="debounce"
               :debounce-delay="debounceDelay"
               @click="onClick"
/>`,
    },
  },
};

export {
  defaultExample,
};

export default ForwardButtonStories;
