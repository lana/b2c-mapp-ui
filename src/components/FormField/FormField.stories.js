import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import FormField from './FormField.vue';

const FormFieldStories = {
  component: FormField,
  title: 'Components/FormField',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    FormField,
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
      default: text('Label', 'Example FormField'),
    },
    errorLabel: {
      default: text('Error Label', ''),
    },
    maxLength: {
      default: number('Max Length'),
    },
    showPrefix: {
      default: boolean('Show Prefix?', false),
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
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>FormField:</strong>&nbsp;A simple text field.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <FormField :type="type"
                   :disabled="disabled"
                   :readonly="readonly"
                   :label="label"
                   :error-label="errorLabel"
                   :max-length="maxLength"
                   :show-prefix="showPrefix"
                   v-model="value"
                   @blur="onBlur"
                   @focus="onFocus"
        />
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
    FormField,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>FormField:</strong>&nbsp;Examples.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div style="width: 500px">
          <label>Unfocused with no value:</label>
          <FormField label='Enter your name'/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Focused with value:</label>
          <FormField label="Example" value="foo" start-focused/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Unfocused with error:</label>
          <FormField value="foo" errorLabel="Invalid value"/>
        </div>
        <br>
        <div style="width: 500px">
          <label>Readonly:</label>
          <FormField label="Enter your name" value="Locked Value" readonly/>
        </div>
      </div>
    </div>
  `,
});

// TODO: Add more stories for this component to showcase more usage scenarios

export {
  defaultExample,
  examples,
};

export default FormFieldStories;
