import type { Meta, StoryFn } from '@storybook/vue3';

import Stepper from './Stepper.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>Stepper:</strong>&nbsp;A step based progress indicator for multi screen flows.');

const StepperStories = {
  component: Stepper,
  title: 'Components/Stepper',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    title: 'Your progress',
    countOfSteps: 4,
    hideActiveStep: false,
    value: 1,
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    title: { control: 'text', name: 'Title' },
    countOfSteps: { control: 'number', name: 'Count of Steps' },
    hideActiveStep: { control: 'boolean', name: 'Hide the active step?' },
    value: { control: 'number', name: 'Active Step Number' },
  },
} as Meta<typeof Stepper>;

const defaultExample: StoryFn<typeof Stepper> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    Stepper,
  },
  template: `
    <div style="margin-top: 40px;">
      <Stepper :title="title"
               :count-of-steps="countOfSteps"
               v-model="value"
               :hide-active-step="hideActiveStep"
      />
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<Stepper :title="title"
         :count-of-steps="countOfSteps"
         v-model="value"
         :hide-active-step="hideActiveStep"
/>`,
    },
  },
};

export {
  defaultExample,
};

export default StepperStories;
