import { action } from '@storybook/addon-actions';

import FormField from './FormField.vue';
import { createOptionalDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createOptionalDeviceDecorator('<strong>FormField:</strong>&nbsp;A simple text field.');

const FormFieldStories = {
  component: FormField,
  title: 'Components/FormField',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    type: '',
    disabled: false,
    readonly: false,
    label: 'Example FormField',
    errorLabel: '',
    maxLength: null,
    showPrefix: false,
    hideClearButton: false,
    startFocused: false,
    lengthHint: null,
    lengthHintLabel: '',
    helpText: '',
    inputmode: '',
    pattern: '',
    default: '',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    type: { control: 'text', name: 'Type' },
    disabled: { control: 'boolean', name: 'Is Disabled?' },
    readonly: { control: 'boolean', name: 'Is Readonly?' },
    label: { control: 'text', name: 'Label' },
    errorLabel: { control: 'text', name: 'Error Label' },
    maxLength: { control: 'number', name: 'Max Length' },
    showPrefix: { control: 'boolean', name: 'Show Prefix?' },
    hideClearButton: { control: 'boolean', name: 'Hide Clear Button' },
    startFocused: { control: 'boolean', name: 'Start focused?' },
    lengthHint: { control: 'number', name: 'Length Hint' },
    lengthHintLabel: { control: 'text', name: 'Length Hint Label' },
    helpText: { control: 'text', name: 'Help Text' },
    inputmode: { control: 'text', name: 'Inputmode' },
    pattern: { control: 'text', name: 'Pattern' },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    FormField,
    RenderString,
  },
  data() {
    return {
      value: '',
    };
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
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
        <FormField v-model="value"
                   :type="type"
                   :disabled="disabled"
                   :readonly="readonly"
                   :label="label"
                   :error-label="errorLabel"
                   :max-length="maxLength"
                   :show-prefix="showPrefix"
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
        >
          <RenderString :string="defaultSlot" v-if="defaultSlot"/>
        </FormField>
      </div>
      <div style="margin: 20px;">
        Bound value: {{ value }}
      </div>
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<FormField v-model="value"
           :type="type"
           :disabled="disabled"
           :readonly="readonly"
           :label="label"
           :error-label="errorLabel"
           :max-length="maxLength"
           :show-prefix="showPrefix"
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
    FormField,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h3>Examples.</h3>
      <hr>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div style="width: 500px">
          <label>Unfocused with no value:</label>
          <FormField label='Enter your name'/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Focused with value:</label>
          <FormField label="Example" modelValue="foo" start-focused/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Unfocused with error:</label>
          <FormField modelValue="foo" label="Foo" error-label="Invalid value"/>
        </div>
        <br>
        <div style="width: 500px">
          <label>With help text:</label>
          <FormField label="With help text" help-text="Example help text" />
        </div>
        <br>
        <div style="width: 500px">
          <label>With hidden clear button:</label>
          <FormField label="With help text" modelValue="Example" hide-clear-button/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Readonly:</label>
          <FormField label="Enter your name" modelValue="Locked Value" readonly/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Disabled:</label>
          <FormField label="Enter your name" modelValue="Locked Value" disabled/>
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
  showPrefix: { table: { disable: true } },
  hideClearButton: { table: { disable: true } },
  lengthHint: { table: { disable: true } },
  lengthHintLabel: { table: { disable: true } },
  helpText: { table: { disable: true } },
  default: { table: { disable: true } },
};
examples.parameters = {
  docs: {
    source: {
      code: `
<div style="width: 500px">
  <label>Unfocused with no value:</label>
  <FormField label='Enter your name'/>
</div>
<br>
<div style="width: 500px">
  <label>Focused with value:</label>
  <FormField label="Example" modelValue="foo" start-focused/>
</div>
<br>
<div style="width: 500px">
  <label>Unfocused with error:</label>
  <FormField modelValue="foo" label="Foo" error-label="Invalid value"/>
</div>
<br>
<div style="width: 500px">
  <label>With help text:</label>
  <FormField label="With help text" help-text="Example help text" />
</div>
<br>
<div style="width: 500px">
  <label>With hidden clear button:</label>
  <FormField label="With help text" modelValue="Example" hide-clear-button/>
</div>
<br>
<div style="width: 500px">
  <label>Readonly:</label>
  <FormField label="Enter your name" modelValue="Locked Value" readonly/>
</div>
<br>
<div style="width: 500px">
  <label>Disabled:</label>
  <FormField label="Enter your name" modelValue="Locked Value" disabled/>
</div>`,
    },
  },
};

export {
  defaultExample,
  examples,
};

export default FormFieldStories;
