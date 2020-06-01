import { withKnobs, select } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import LoadingSpinner from './LoadingSpinner.vue';

const LoadingSpinnerStories = {
  component: LoadingSpinner,
  title: 'Components/LoadingSpinner',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    LoadingSpinner,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>LoadingSpinner:</strong>&nbsp;A loading spinner to inform users about a pending task.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="margin-top: 20px; width: 100%; height: 100%; display: flex; justify-content: center">
          <LoadingSpinner/>
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default LoadingSpinnerStories;
