import type { Meta, StoryFn } from '@storybook/vue3';

import StorybookMobileDeviceSimulator from './StorybookMobileDeviceSimulator.vue';
import { getAvailableDevices } from './StorybookMobileDeviceSimulator';
import { createScreenDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const availableDevices = getAvailableDevices();
const screenDecorator = createScreenDecorator('<strong>StorybookMobileDeviceSimulator:</strong>&nbsp;A minimal mobile device simulator for helping visualize Storybook stories as a mobile device.');

const StorybookMobileDeviceSimulatorStories = {
  component: StorybookMobileDeviceSimulator,
  title: 'Components/StorybookMobileDeviceSimulator',
  decorators: [screenDecorator],
  args: {
    device: availableDevices[0],
    default: '<p>Example mobile device content</p>',
  },
  argTypes: {
    device: { control: 'select', name: 'Simulated Mobile Device', options: [...availableDevices] },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
} as Meta<typeof StorybookMobileDeviceSimulator>;

const defaultExample: StoryFn<typeof StorybookMobileDeviceSimulator> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    StorybookMobileDeviceSimulator,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
      <StorybookMobileDeviceSimulator :device="device">
        <RenderString :string="defaultSlot" />
      </StorybookMobileDeviceSimulator>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<StorybookMobileDeviceSimulator :device="device">
  <p>Example mobile device content</p>
</StorybookMobileDeviceSimulator>`,
    },
  },
};

export {
  defaultExample,
};

export default StorybookMobileDeviceSimulatorStories;
