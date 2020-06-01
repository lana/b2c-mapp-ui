import { withKnobs, text, number, boolean, select } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import Stepper from './Stepper.vue';

const StepperStories = {
  component: Stepper,
  title: 'Components/Stepper',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    Stepper,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    title: {
      default: text('Title', 'Your progress'),
    },
    countOfSteps: {
      default: number('Count of Steps', 4),
    },
    hideActiveStep: {
      default: boolean('Hide the active step?', false),
    },
    value: {
      default: number('Active Step Number', 1),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Stepper:</strong>&nbsp;A step based progress indicator for multi screen flows.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="margin-top: 40px;">
          <Stepper :title="title"
                   :count-of-steps="countOfSteps"
                   :value="value"
                   :hide-active-step="hideActiveStep"
          />
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default StepperStories;
