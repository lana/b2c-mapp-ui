import { action } from '@storybook/addon-actions';

import TextField from './TextField.vue';
import { createOptionalDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createOptionalDeviceDecorator('<strong>TextField:</strong>&nbsp;A simple text field.');

const TextFieldStories = {
  component: TextField,
  title: 'Components/TextField',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    value: '',
    type: '',
    disabled: false,
    readonly: false,
    label: 'Example Text Field',
    errorLabel: '',
    maxLength: null,
    lengthHint: null,
    lengthHintLabel: '',
    helpText: '',
    hideClearButton: false,
    startFocused: false,
    inputmode: '',
    pattern: '',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    value: { control: 'text', name: 'Value' },
    type: { control: 'text', name: 'Type' },
    disabled: { control: 'boolean', name: 'Is Disabled?' },
    readonly: { control: 'boolean', name: 'Is Readonly?' },
    label: { control: 'text', name: 'Label' },
    errorLabel: { control: 'text', name: 'Error Label' },
    maxLength: { control: 'number', name: 'Max Length' },
    lengthHint: { control: 'number', name: 'Length Hint' },
    lengthHintLabel: { control: 'text', name: 'Length Hint Label' },
    helpText: { control: 'text', name: 'Help Text' },
    hideClearButton: { control: 'boolean', name: 'Hide Clear Button?' },
    startFocused: { control: 'boolean', name: 'Start Focused?' },
    inputmode: { control: 'text', name: 'Inputmode' },
    pattern: { control: 'text', name: 'Pattern' },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    TextField,
  },
  data() {
    return {
      boundValue: this.value,
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
    <div>
      <div style="padding: 16px;">
        <TextField v-model="boundValue"
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
                   :start-focused="startFocused"
                   :inputmode="inputmode"
                   :pattern="pattern"
                   @blur="onBlur"
                   @focus="onFocus"
                   @keypress="onKeypress"
                   @keyup="onKeyup"
                   @paste="onPaste"
        />
      </div>
      <br>
      <div style="margin: 20px;">
        Bound value: {{ boundValue }}
      </div>
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
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
           :inputmode="inputmode"
           :pattern="pattern"
           @blur="onBlur"
           @focus="onFocus"
           @keypress="onKeypress"
           @keyup="onKeyup"
           @paste="onPaste"
/>`,
    },
  },
};

const examples = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    TextField,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h3>Examples.</h3>
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
          <TextField label="Example" modelValue="foo" start-focused/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Unfocused with error:</label>
          <TextField modelValue="foo" label="foo" error-label="Invalid value"/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Length hint with error:</label>
          <TextField modelValue="1234" label="Credit Card Number" :length-hint="16" error-label="Length should be 16"/>
        </div>
        <br>
        <div style="width: 500px">
          <label>With hidden clear button:</label>
          <TextField label="Example" modelValue="Example" hide-clear-button/>
        </div>
        <br>
        <div style="width: 500px">
          <label>With Help Text:</label>
          <TextField label="With help text" modelValue="Example" hide-clear-button help-text="Example Help Text"/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Readonly:</label>
          <TextField label="Enter your name" modelValue="value locked" readonly/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Disabled:</label>
          <TextField label="Enter your name" modelValue="value locked" disabled/>
        </div>
      </div>
    </div>
  `,
});
examples.args = {
  device: '',
};
examples.argTypes = {
  device: { table: { disable: true } },
  type: { table: { disable: true } },
  disabled: { table: { disable: true } },
  readonly: { table: { disable: true } },
  label: { table: { disable: true } },
  errorLabel: { table: { disable: true } },
  maxLength: { table: { disable: true } },
  lengthHint: { table: { disable: true } },
  lengthHintLabel: { table: { disable: true } },
  helpText: { table: { disable: true } },
  hideClearButton: { table: { disable: true } },
};
examples.parameters = {
  docs: {
    source: {
      code: `
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
    <TextField label="Example" modelValue="foo" start-focused/>
  </div>
  <br>
  <div style="width: 500px">
    <label>Unfocused with error:</label>
    <TextField modelValue="foo" label="foo" error-label="Invalid value"/>
  </div>
  <br>
  <div style="width: 500px">
    <label>Length hint with error:</label>
    <TextField modelValue="1234" label="Credit Card Number" :length-hint="16" error-label="Length should be 16"/>
  </div>
  <br>
  <div style="width: 500px">
    <label>With hidden clear button:</label>
    <TextField label="Example" modelValue="Example" hide-clear-button/>
  </div>
  <br>
  <div style="width: 500px">
    <label>With Help Text:</label>
    <TextField label="With help text" modelValue="Example" hide-clear-button help-text="Example Help Text"/>
  </div>
  <br>
  <div style="width: 500px">
    <label>Readonly:</label>
    <TextField label="Enter your name" modelValue="value locked" readonly/>
  </div>
  <br>
  <div style="width: 500px">
    <label>Disabled:</label>
    <TextField label="Enter your name" modelValue="value locked" disabled/>
  </div>
</div>`,
    },
  },
};

export {
  defaultExample,
  examples,
};

export default TextFieldStories;
