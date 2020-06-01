import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import Screen from './Screen.vue';

const ScreenStories = {
  component: Screen,
  title: 'Components/Screen',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    Screen,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  methods: {
    onKeyboardFocus: action('KeyboardFocus!'),
    onKeyboardBlur: action('KeyboardBlur!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Screen:</strong>&nbsp;A wrapper used by each Screen of a microapp.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <Screen @keyboardFocus="onKeyboardFocus"
                @keyboardBlur="onKeyboardBlur"
        >
          <p style="margin: 20px;">Example Screen Content</p>
        </Screen>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default ScreenStories;
