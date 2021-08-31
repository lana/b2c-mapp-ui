import { action } from '@storybook/addon-actions';

import DateField from './DateField.vue';
import { createOptionalDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createOptionalDeviceDecorator('<strong>DateField:</strong>&nbsp;A simple date input field.');

const DateFieldStories = {
  component: DateField,
  title: 'Components/DateField',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    autoformat: false,
    datePicker: true,
    disabled: false,
    readonly: false,
    label: 'Example Date Field',
    errorLabel: 'Fecha no válida (DD/MM/YYYY)',
    maxLength: 10,
    customValidation: false,
    helpText: '',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    autoformat: { control: 'boolean', name: 'Enable autoformatting?' },
    datePicker: { control: 'boolean', name: 'Enable Date Picker?' },
    disabled: { control: 'boolean', name: 'Is Disabled?' },
    readonly: { control: 'boolean', name: 'Is Readonly?' },
    label: { control: 'text', name: 'Label' },
    errorLabel: { control: 'text', name: 'Error Label' },
    maxLength: { control: 'number', name: 'Max Length' },
    customValidation: { control: 'boolean', name: 'Custom Validation?' },
    helpText: { control: 'text', name: 'Help Text' },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    DateField,
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
    onChange: action('Change!'),
    onValidate: action('Validate!'),
  },
  template: `
    <div>
      <div style="padding: 16px;">
        <DateField v-model="value"
                   :autoformat="autoformat"
                   :disabled="disabled"
                   :readonly="readonly"
                   :date-picker="datePicker"
                   :label="label"
                   :error-label="errorLabel"
                   :max-length="maxLength"
                   :custom-validation="customValidation"
                   :help-text="helpText"
                   @blur="onBlur"
                   @focus="onFocus"
                   @keypress="onKeypress"
                   @keyup="onKeyup"
                   @paste="onPaste"
                   @change="onChange"
                   @validate="onValidate"
        />
      </div>
      <br>
      <div style="margin-left: 20px;">
        Bound value: {{ value }}
      </div>
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<DateField v-model="value"
           :autoformat="autoformat"
           :disabled="disabled"
           :readonly="readonly"
           :date-picker="datePicker"
           :label="label"
           :error-label="errorLabel"
           :max-length="maxLength"
           :custom-validation="customValidation"
           :help-text="helpText"
           @blur="onBlur"
           @focus="onFocus"
           @keypress="onKeypress"
           @keyup="onKeyup"
           @paste="onPaste"
           @change="onChange"
           @validate="onValidate"
/>`,
    },
  },
};

const validation = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    DateField,
  },
  template: `
  <div>
    <h3>Validations.</h3>
    <hr>
    <div style="margin: 10px; width: 300px;">
      <label>With Valid Date:</label>
      <DateField value="01/12/1990" label="Enter your DOB" date-picker/>
    </div>
    <br>
    <div style="margin: 10px; width: 300px;">
      <label>With Help Text:</label>
      <DateField value="01/12/1990"
                 label="Enter your DOB"
                 date-picker
                 help-text="Example Help Text"
      />
    </div>
    <br>
    <div style="margin: 10px; width: 300px;">
      <label>With Invalid Date:</label>
      <DateField value="29/02/1990" label="Enter your DOB" date-picker/>
    </div>
    <br>
    <div style="margin: 10px; width: 300px;">
      <label>Readonly:</label>
      <DateField value="01/12/1990" label="Enter your DOB" date-picker readonly/>
    </div>
    <br>
    <div style="margin: 10px; width: 300px;">
      <label>Disabled:</label>
      <DateField value="01/12/1990" label="Enter your DOB" date-picker disabled/>
    </div>
  </div>
  `,
});
validation.args = {
  device: '',
};
validation.argTypes = {
  device: { table: { disable: true } },
  autoformat: { table: { disable: true } },
  datePicker: { table: { disable: true } },
  disabled: { table: { disable: true } },
  readonly: { table: { disable: true } },
  label: { table: { disable: true } },
  errorLabel: { table: { disable: true } },
  maxLength: { table: { disable: true } },
  customValidation: { table: { disable: true } },
  helpText: { table: { disable: true } },
};
validation.parameters = {
  docs: {
    source: {
      code: `
<div>
  <div style="margin: 10px; width: 300px;">
    <label>With Valid Date:</label>
    <DateField value="01/12/1990" label="Enter your DOB" date-picker/>
  </div>
  <br>
  <div style="margin: 10px; width: 300px;">
    <label>With Help Text:</label>
    <DateField value="01/12/1990"
                label="Enter your DOB"
                date-picker
                help-text="Example Help Text"
    />
  </div>
  <br>
  <div style="margin: 10px; width: 300px;">
    <label>With Invalid Date:</label>
    <DateField value="29/02/1990" label="Enter your DOB" date-picker/>
  </div>
  <br>
  <div style="margin: 10px; width: 300px;">
    <label>Readonly:</label>
    <DateField value="01/12/1990" label="Enter your DOB" date-picker readonly/>
  </div>
  <br>
  <div style="margin: 10px; width: 300px;">
    <label>Disabled:</label>
    <DateField value="01/12/1990" label="Enter your DOB" date-picker disabled/>
  </div>
</div>`,
    },
  },
};

export {
  defaultExample,
  validation,
};

export default DateFieldStories;
