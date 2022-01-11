import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/vue3';

import WrappedButton from './WrappedButton.vue';
import { availableTypes } from './WrappedButton';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>WrappedButton:</strong>&nbsp;Wraps a Button component with extra padding to be placed at the bottom of the screen.');

const WrappedButtonStories = {
  component: WrappedButton,
  title: 'Components/WrappedButton',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    type: '',
    disabled: false,
    loading: false,
    debounce: false,
    debounceDelay: 400,
    loadingText: 'Cargando...',
    href: '',
    default: 'Example Wrapped Button Content',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    type: { control: 'select', name: 'Type', options: [...availableTypes, ''] },
    disabled: { control: 'boolean', name: 'Is Disabled?' },
    loading: { control: 'boolean', name: 'Is Loading?' },
    debounce: { control: 'boolean', name: 'Has debounce?' },
    debounceDelay: { control: { type: 'number', step: 100 }, name: 'Debounce Delay' },
    loadingText: { control: 'text', name: 'Loading Text' },
    href: { control: 'text', name: 'href' },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
} as Meta<typeof WrappedButton>;

const defaultExample: StoryFn<typeof WrappedButton> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    WrappedButton,
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
    <WrappedButton :type="type"
                   :href="href"
                   :loading="loading"
                   :loading-text="loadingText"
                   :disabled="disabled"
                   :debounce="debounce"
                   @click="onClick"
    >
      <RenderString :string="defaultSlot" />
    </WrappedButton>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<WrappedButton :type="type"
               :href="href"
               :loading="loading"
               :loading-text="loadingText"
               :disabled="disabled"
               :debounce="debounce"
               @click="onClick"
>
  Example Wrapped Button Content
</WrappedButton>`,
    },
  },
};

export {
  defaultExample,
};

export default WrappedButtonStories;
