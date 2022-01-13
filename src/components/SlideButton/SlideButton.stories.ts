import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/vue3';

import SlideButton from './SlideButton.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>SlideButton:</strong>&nbsp;Slide button to confirm any action visually.');

const SlideButtonStories = {
  component: SlideButton,
  title: 'Components/SlideButton',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    initialInstructionLabel: 'Desliza para confirmar',
    completedLabel: '',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    initialInstructionLabel: { control: 'text', name: 'Initial instruction label' },
    completedLabel: { control: 'text', name: 'Label after completion' },
  },
} as Meta<typeof SlideButton>;

const defaultExample: StoryFn<typeof SlideButton> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    SlideButton,
  },
  methods: {
    onActionConfirmed: action('Confirmed!'),
  },
  template: `
    <SlideButton :initial-instruction-label="initialInstructionLabel" :completed-label="completedLabel" @actionConfirmed="onActionConfirmed"/>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<SlideButton :initial-instruction-label="initialInstructionLabel"
             :completed-label="completedLabel"
             @actionConfirmed="onActionConfirmed"
/>`,
    },
  },
};

export {
  defaultExample,
};

export default SlideButtonStories;
