import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

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
  },
  methods: {
    onActionConfirmed: action('Confirmed!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>SlideButton:</strong>&nbsp;Wraps a Button component with extra padding to be placed at the bottom of the screen.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <SlideButton ref="SlideButton"
                      @actionConfirmed="onActionConfirmed"
                      initialInstructionText="Desliza para confirmar"
        />
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default SlideButtonStories;
