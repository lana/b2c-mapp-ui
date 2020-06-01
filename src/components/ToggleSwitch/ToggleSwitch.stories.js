import { withKnobs, select } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import ToggleSwitch from './ToggleSwitch.vue';

const ToggleSwitchStories = {
  component: ToggleSwitch,
  title: 'Components/ToggleSwitch',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ToggleSwitch,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  data() {
    return {
      isChecked: false,
    };
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ToggleSwitch:</strong>&nbsp;A simple toggle switch input.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="margin: 20px">
          <label>
            Enabled:
            <ToggleSwitch v-model="isChecked"/>
          </label>
        </div>
        <div style="margin: 20px">
          <label>
            Disabled:
            <ToggleSwitch v-model="isChecked" disabled/>
          </label>
        </div>
        <div style="margin: 20px;">
          Bound value: {{ isChecked }}
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default ToggleSwitchStories;
