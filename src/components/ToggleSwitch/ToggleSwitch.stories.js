import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

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
    buttons: {
      default: boolean('Buttons mode?', false),
    },
    trueButtonLabel: {
      default: text('True button label', 'True button'),
    },
    falseButtonLabel: {
      default: text('False button label', 'False button'),
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
            <ToggleSwitch v-model="isChecked"
                          :buttons="buttons"
                          :true-button-label="trueButtonLabel"
                          :false-button-label="falseButtonLabel"
            />
          </label>
        </div>
        <div style="margin: 20px">
          <label>
            Disabled:
            <ToggleSwitch v-model="isChecked"
                          :buttons="buttons"
                          :true-button-label="trueButtonLabel"
                          :false-button-label="falseButtonLabel"
                          disabled
            />
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
