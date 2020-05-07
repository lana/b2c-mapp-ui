import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import Stepper from './Stepper.vue';

const StepperStories = {
  component: Stepper,
  title: 'Stepper',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    Stepper,
  },
  props: {
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
      <div style="margin-top: 40px;">
        <Stepper :title="title"
                 :count-of-steps="countOfSteps"
                 :value="value"
                 :hide-active-step="hideActiveStep"
        />
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default StepperStories;
