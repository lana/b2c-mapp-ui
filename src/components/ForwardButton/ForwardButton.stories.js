import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import ForwardButton from './ForwardButton.vue';

const ForwardButtonStories = {
  component: ForwardButton,
  title: 'Components/ForwardButton',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ForwardButton,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    debounce: {
      default: boolean('Has debounce?', false),
    },
    debounceDelay: {
      default: number('Debounce Delay', 400, { step: 100 }),
    },
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ForwardButton:</strong>&nbsp;Wraps a Button component with extra padding to be placed at the bottom of the screen.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="height: 100%;">
          <ForwardButton :disabled="disabled"
                         :debounce="debounce"
                         :debounce-delay="debounceDelay"
                         @click="onClick"
          />
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default ForwardButtonStories;
