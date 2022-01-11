import type { Meta, StoryFn } from '@storybook/vue3';

import LoadingSpinner from './LoadingSpinner.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>LoadingSpinner:</strong>&nbsp;A loading spinner to inform users about a pending task.');

const LoadingSpinnerStories = {
  component: LoadingSpinner,
  title: 'Components/LoadingSpinner',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
  },
  argTypes: {
    ...deviceDecorator.argTypes,
  },
} as Meta<typeof LoadingSpinner>;

const defaultExample: StoryFn<typeof LoadingSpinner> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    LoadingSpinner,
  },
  template: `
    <div style="margin-top: 20px; width: 100%; height: 100%; display: flex; justify-content: center">
      <LoadingSpinner/>
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<div style="margin-top: 20px; width: 100%; height: 100%; display: flex; justify-content: center">
  <LoadingSpinner/>
</div>
      `,
    },
  },
};

export {
  defaultExample,
};

export default LoadingSpinnerStories;
