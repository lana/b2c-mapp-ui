import { action } from '@storybook/addon-actions';

import CopyToClipboardButton from './CopyToClipboardButton.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>CopyToClipboardButton:</strong>&nbsp;A button that copies the given value to the clipboard and provides 3 steps of feedback to the user.');

const CopyToClipboardButtonStories = {
  component: CopyToClipboardButton,
  title: 'Components/CopyToClipboardButton',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    disabled: false,
    valueToCopy: 'Example value',
    toCopyLabel: 'Copiar',
    copyingLabel: 'Copiando...',
    copiedLabel: 'Copiado!',
    copyingFeedbackDelay: 1000,
    copiedFeedbackDelay: 2500,
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    disabled: { name: 'Is Disabled?', control: 'boolean' },
    valueToCopy: { name: 'Value to Copy', control: 'text' },
    toCopyLabel: { name: 'Label for "To Copy"', control: 'text' },
    copyingLabel: { name: 'Label for "Copying"', control: 'text' },
    copiedLabel: { name: 'Label for "Copied"', control: 'text' },
    copyingFeedbackDelay: { name: 'Delay for showing "Copying" in milliseconds', control: 'number' },
    copiedFeedbackDelay: { name: 'Delay for showing "Copied" in milliseconds', control: 'number' },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    CopyToClipboardButton,
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
    <div>
      <ul style="margin-left: 40px; margin-top: 10px; margin-bottom: 10px; list-style: circle">
        <li>Copy (default status)</li>
        <li>Copying... (Working/In progress)</li>
        <li>Copied! (success or end of the process)</li>
      </ul>
      <p>
        <em>(Optional)</em> You can specify classNames for each feedback state, and specify the duration of the transitions between the states.
      </p>
      <hr>
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
    </div>
  `,
});

export {
  defaultExample,
};

export default CopyToClipboardButtonStories;
