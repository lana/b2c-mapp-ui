import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import TextField from './TextField.vue';

const TextFieldStories = {
  component: TextField,
  title: 'Components/TextField',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    TextField,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    type: {
      default: text('Type', ''),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    readonly: {
      default: boolean('Is Readonly?', false),
    },
    label: {
      default: text('Label', 'Example Text Field'),
    },
    errorLabel: {
      default: text('Error Label', ''),
    },
    maxLength: {
      default: number('Max Length'),
    },
    lengthHint: {
      default: number('Length Hint'),
    },
    lengthHintLabel: {
      default: text('Length Hint Label'),
    },
    helpText: {
      default: text('Help Text', ''),
    },
    hideClearButton: {
      default: boolean('Hide Clear Button?', false),
    },
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onBlur: action('Blur!'),
    onFocus: action('Focus!'),
    onPaste: action('Paste!'),
    onKeyup: action('KeyUp!'),
    onKeypress: action('KeyPress!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>TextField:</strong>&nbsp;A simple text field.</h2> <!-- TODO: Improve this description so that it makes it clear how this is different from the FormField component -->
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="padding: 16px;">
          <TextField v-model="value"
                     :type="type"
                     :disabled="disabled"
                     :readonly="readonly"
                     :label="label"
                     :error-label="errorLabel"
                     :max-length="maxLength"
                     :length-hint="lengthHint"
                     :length-hint-label="lengthHintLabel"
                     :help-text="helpText"
                     :hide-clear-button="hideClearButton"
                     @blur="onBlur"
                     @focus="onFocus"
                     @keypress="onKeypress"
                     @keyup="onKeyup"
                     @paste="onPaste"
          />
        </div>
        <br>
        <div style="margin: 20px;">
          Bound value: {{ value }}
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const examples = () => ({
  components: {
    TextField,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>TextField:</strong>&nbsp;Examples.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div style="width: 500px">
          <label>Unfocused with no value:</label>
          <TextField label='Enter your name'/>
        </div>
        <br>
        <div style="width: 500px">
          <label>No value with length hint:</label>
          <TextField label='Credit Card Number' :length-hint="16" length-hint-label="digits"/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Focused with value:</label>
          <TextField label="Example" value="foo" start-focused/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Unfocused with error:</label>
          <TextField value="foo" label="foo" error-label="Invalid value"/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Length hint with error:</label>
          <TextField value="1234" label="Credit Card Number" :length-hint="16" error-label="Length should be 16"/>
        </div>
        <br>
        <div style="width: 500px">
          <label>With hidden clear button:</label>
          <TextField label="Example" value="Example" hide-clear-button/>
        </div>
        <br>
        <div style="width: 500px">
          <label>With Help Text:</label>
          <TextField label="With help text" value="Example" hide-clear-button help-text="Example Help Text"/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Readonly:</label>
          <TextField label="Enter your name" value="value locked" readonly/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Disabled:</label>
          <TextField label="Enter your name" value="value locked" disabled/>
        </div>
      </div>
    </div>
  `,
});

export {
  defaultExample,
  examples,
};

export default TextFieldStories;
