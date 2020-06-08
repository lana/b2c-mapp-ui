import { withKnobs, select, text } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import Checkbox from './Checkbox.vue';

const CheckboxStories = {
  component: Checkbox,
  title: 'Components/Checkbox',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    Checkbox,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    label: {
      default: text('Label', 'Example label'),
    },
  },
  data() {
    return {
      isChecked: false,
    };
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Checkbox:</strong>&nbsp;A simple Checkbox input.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="margin: 20px">
          <label>
            Enabled:
            <Checkbox v-model="isChecked" :label="label"/>
          </label>
        </div>
        <div style="margin: 20px">
          <label>
            Disabled:
            <Checkbox v-model="isChecked" :label="label" disabled/>
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

export default CheckboxStories;
