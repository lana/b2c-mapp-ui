import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import DateField from './DateField.vue';

const DateFieldStories = {
  component: DateField,
  title: 'Components/DateField',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    DateField,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    autoformat: {
      default: boolean('Enable autoformatting?', false),
    },
    datePicker: {
      default: boolean('Enable Date Picker?', true),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    readonly: {
      default: boolean('Is Readonly?', false),
    },
    label: {
      default: text('Label', 'Example Date Field'),
    },
    errorLabel: {
      default: text('Error Label', 'Fecha no válida (DD/MM/YYYY)'),
    },
    maxLength: {
      default: number('Max Length', 10),
    },
    customValidation: {
      default: boolean('Custom Validation?', false),
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
    onChange: action('Change!'),
    onValidate: action('Validate!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>DateField:</strong>&nbsp;A simple date input field.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <DateField :autoformat="autoformat"
                   :disabled="disabled"
                   :readonly="readonly"
                   :date-picker="datePicker"
                   :label="label"
                   :error-label="errorLabel"
                   :max-length="maxLength"
                   :custom-validation="customValidation"
                   v-model="value"
                   @blur="onBlur"
                   @focus="onFocus"
                   @keypress="onKeypress"
                   @keyup="onKeyup"
                   @paste="onPaste"
                   @change="onChange"
                   @validate="onValidate"
        />
        <br>
        <div style="margin-left: 20px;">
          Bound value: {{ value }}
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const validation = () => ({
  components: {
    DateField,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>DateField:</strong>&nbsp;Validations.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="margin: 10px;">
          <label>With Valid Date:</label>
          <DateField value="01/12/1990" label='Enter your DOB' date-picker/>
        </div>
        <br>
        <div style="margin: 10px;">
          <label>With Invalid Date:</label>
          <DateField value="01/20/1990" label='Enter your DOB' date-picker/>
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
  validation,
};

export default DateFieldStories;
