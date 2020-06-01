import { withKnobs, select } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from './StorybookMobileDeviceSimulator.vue';
import { availableDevices } from './StorybookMobileDeviceSimulator';

const StorybookMobileDeviceSimulatorStories = {
  component: StorybookMobileDeviceSimulator,
  title: 'Components/StorybookMobileDeviceSimulator',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px; height: 100vh;">
      <h2><strong>StorybookMobileDeviceSimulator:</strong>&nbsp;A minimal mobile device simulator for helping visualize Storybook stories as a mobile device.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <p>Example mobile device content</p>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default StorybookMobileDeviceSimulatorStories;
