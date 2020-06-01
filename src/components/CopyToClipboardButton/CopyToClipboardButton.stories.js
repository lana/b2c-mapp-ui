import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import CopyToClipboardButton from './CopyToClipboardButton.vue';

const CopyToClipboardButtonStories = {
  component: CopyToClipboardButton,
  title: 'Components/CopyToClipboardButton',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    CopyToClipboardButton,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    valueToCopy: {
      default: text('Value To Copy', 'Example value'),
    },
    toCopyLabel: {
      default: text('Label for "To Copy"', 'Copiar'),
    },
    copyingLabel: {
      default: text('Label for "Copying"', 'Copiando...'),
    },
    copiedLabel: {
      default: text('Label for "Copied"', 'Copiado!'),
    },
    copyingFeedbackDelay: {
      default: number('Delay for showing "Copying" in milliseconds', 1000),
    },
    copiedFeedbackDelay: {
      default: number('Delay for showing "Copied" in milliseconds', 2500),
    },
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>CopyToClipboardButton:</strong>&nbsp;A button that copies the given value to the clipboard and provides 3 steps of feedback to the user.</h2>
      <ul style="margin-left: 40px; margin-top: 10px; margin-bottom: 10px; list-style: circle">
        <li>Copy (default status)</li>
        <li>Copying... (Working/In progress)</li>
        <li>Copied! (success or end of the process)</li>
      </ul>
      <p>
        <em>(Optional)</em> You can specify classNames for each feedback state, and specify the duration of the transitions between the states.
      </p>
      <hr>
      <div style="display: flex; flex-direction: column; align-items: start; width: 100%;">
        <StorybookMobileDeviceSimulator :device="device">
          <div style="margin: 20px">
            <CopyToClipboardButton :value-to-copy="valueToCopy"
                                   :to-copy-label="toCopyLabel"
                                   :copying-label="copyingLabel"
                                   :copied-label="copiedLabel"
                                   :copying-feedback-delay="copyingFeedbackDelay"
                                   :copied-feedback-delay="copiedFeedbackDelay"
                                   :disabled="disabled"
                                   @click="onClick"
            />
          </div>
        </StorybookMobileDeviceSimulator>
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default CopyToClipboardButtonStories;
