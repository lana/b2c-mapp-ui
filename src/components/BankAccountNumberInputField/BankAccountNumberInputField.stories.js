import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import BankAccountNumberInputField from './BankAccountNumberInputField.vue';

const BankAccountNumberInputFieldStories = {
  component: BankAccountNumberInputField,
  title: 'Components/BankAccountNumberInputField',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    BankAccountNumberInputField,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    readonly: {
      default: boolean('Is Readonly?', false),
    },
    autoformat: {
      default: boolean('Is Autoformatting Enabled?', false),
    },
    showLengthHint: {
      default: boolean('Show length hint?', false),
    },
    lengthHint: {
      default: number('Length Hint Number'),
    },
    lengthHintLabel: {
      default: text('Length Hint Label', ''),
    },
    label: {
      default: text('Label', 'Example BankAccount Field'),
    },
    errorLabel: {
      default: text('Error Label', ''),
    },
    countryCode: {
      default: text('Country Code', 'MX'),
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
    onChange: action('Changed!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>BankAccountNumberInputField:</strong>&nbsp;An international bank account formatting and validation field.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div>
          <BankAccountNumberInputField :disabled="disabled"
                                       :readonly="readonly"
                                       :autoformat="autoformat"
                                       :label="label"
                                       :error-label="errorLabel"
                                       :show-length-hint="showLengthHint"
                                       :length-hint-label="lengthHintLabel"
                                       :length-hint="lengthHint"
                                       v-model="value"
                                       @blur="onBlur"
                                       @focus="onFocus"
                                       @change="onChange"
          />
          <br>
          <div style="margin-left: 10px">
            Bound value: {{ value }}
          </div>
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const examples = () => ({
  components: {
    BankAccountNumberInputField,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>BankAccountNumberInputField:</strong>&nbsp;Examples.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div style="width: 500px">
          <label>Normal example:</label>
          <BankAccountNumberInputField country-code="MX"
                                       label="Introduce un CLABE"
                                       error-label="Invalid CLABE number"
          />
        </div>
        <br>
        <div style="width: 500px">
          <label>With a valid value:</label>
          <BankAccountNumberInputField country-code="MX"
                                       label="Introduce un CLABE"
                                       error-label="Invalid CLABE number"
                                       value="138211000000000127"
          />
        </div>
        <br>
        <div style="width: 500px">
          <label>With a autoformatting enabled:</label>
          <BankAccountNumberInputField country-code="MX"
                                       autoformat
                                       label="Introduce un CLABE"
                                       error-label="Invalid CLABE number"
                                       value="138211000000000127"
          />
        </div>
        <br>
        <div style="width: 500px">
          <label>With an invalid value:</label>
          <BankAccountNumberInputField country-code="MX"
                                       label="Introduce un CLABE"
                                       error-label="Invalid CLABE number"
                                       value="1382110000000"
          />
        </div>
        <br>
        <div style="width: 500px">
          <label>Readonly:</label>
          <BankAccountNumberInputField country-code="MX"
                                       label="Introduce un CLABE"
                                       error-label="Invalid CLABE number"
                                       value="138211000000000127"
                                       readonly
          />
        </div>
        <div style="width: 500px">
          <label>Disabled:</label>
          <BankAccountNumberInputField country-code="MX"
                                       label="Introduce un CLABE"
                                       error-label="Invalid CLABE number"
                                       value="138211000000000127"
                                       disabled
          />
        </div>
      </div>
    </div>
  `,
});

export {
  defaultExample,
  examples,
};

export default BankAccountNumberInputFieldStories;
