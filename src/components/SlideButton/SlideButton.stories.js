import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import SlideButton from './SlideButton.vue';

const SlideButtonStories = {
  component: SlideButton,
  title: 'Components/SlideButton',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    SlideButton,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    initialInstructionLabel: {
      default: text('Initial instruction label', 'Desliza para confirmar'),
    },
    completedLabel: {
      default: text('Label after completion', ''),
    },
  },
  methods: {
    onActionConfirmed: action('Confirmed!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>SlideButton:</strong>&nbsp;Slide button to confirm any action visually.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <SlideButton :initial-instruction-label="initialInstructionLabel" :completed-label="completedLabel" @actionConfirmed="onActionConfirmed"/>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default SlideButtonStories;
