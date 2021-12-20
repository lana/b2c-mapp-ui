import { action } from '@storybook/addon-actions';

import BankAccountNumberInputField from './BankAccountNumberInputField.vue';
import { createOptionalDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createOptionalDeviceDecorator('<strong>AmountInput:</strong> An input that allows the user to enter a desire amount.');

const BankAccountNumberInputFieldStories = {
  component: BankAccountNumberInputField,
  title: 'Components/BankAccountNumberInputField',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    disabled: false,
    readonly: false,
    autoformat: false,
    showLengthHint: false,
    lengthHint: null,
    lengthHintLabel: '',
    label: 'Example BankAccountField',
    errorLabel: '',
    countryCode: 'MX',
    helpText: '',
    hideClearButton: false,
    inputmode: '',
    pattern: '',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    disabled: { name: 'Is Disabled?', control: 'boolean' },
    readonly: { name: 'Is Readonly?', control: 'boolean' },
    autoformat: { name: 'Is Autoformatting Enabled?', control: 'boolean' },
    showLengthHint: { name: 'Show length hint?', control: 'boolean' },
    lengthHint: { name: 'Length Hint Number', control: 'number' },
    lengthHintLabel: { name: 'Length Hint Label', control: 'text' },
    label: { name: 'Label', control: 'text' },
    errorLabel: { name: 'Error Label', control: 'text' },
    countryCode: { name: 'Country Code', control: 'text' },
    helpText: { name: 'Help Text', control: 'text' },
    hideClearButton: { name: 'Hide Clear Button?', control: 'boolean' },
    inputmode: { control: 'text', name: 'Inputmode' },
    pattern: { control: 'text', name: 'Pattern' },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    BankAccountNumberInputField,
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
    <div style="padding: 16px;">
      <BankAccountNumberInputField v-model="value"
                                   :disabled="disabled"
                                   :readonly="readonly"
                                   :autoformat="autoformat"
                                   :label="label"
                                   :error-label="errorLabel"
                                   :show-length-hint="showLengthHint"
                                   :length-hint-label="lengthHintLabel"
                                   :length-hint="lengthHint"
                                   :help-text="helpText"
                                   :hide-clear-button="hideClearButton"
                                   :inputmode="inputmode"
                                   :pattern="pattern"
                                   @blur="onBlur"
                                   @focus="onFocus"
                                   @change="onChange"
      />
      <br>
      <div style="margin-left: 10px">
        Bound value: {{ value }}
      </div>
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<BankAccountNumberInputField v-model="value"
                             :disabled="disabled"
                             :readonly="readonly"
                             :autoformat="autoformat"
                             :label="label"
                             :error-label="errorLabel"
                             :show-length-hint="showLengthHint"
                             :length-hint-label="lengthHintLabel"
                             :length-hint="lengthHint"
                             :help-text="helpText"
                             :hide-clear-button="hideClearButton"
                             :inputmode="inputmode"
                             :pattern="pattern"
                             @blur="onBlur"
                             @focus="onFocus"
                             @change="onChange"
/>
      `,
    },
  },
};

const examples = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    BankAccountNumberInputField,
  },
  template: `
      <div style="display: flex; flex-direction: column; width: 100%;">
        <h3>Examples</h3>
        <hr />
        <div style="width: 100%; max-width: 500px;">
          <label>Normal example:</label>
          <BankAccountNumberInputField country-code="MX"
                                       label="Introduce un CLABE"
                                       error-label="Invalid CLABE number"
          />
        </div>
        <br>
        <div style="width: 100%; max-width: 500px;">
          <label>With a valid value:</label>
          <BankAccountNumberInputField country-code="MX"
                                       label="Introduce un CLABE"
                                       error-label="Invalid CLABE number"
                                       modelValue="138211000000000127"
          />
        </div>
        <br>
        <div style="width: 100%; max-width: 500px;">
          <label>With a autoformatting enabled:</label>
          <BankAccountNumberInputField country-code="MX"
                                       autoformat
                                       label="Introduce un CLABE"
                                       error-label="Invalid CLABE number"
                                       modelValue="138211000000000127"
          />
        </div>
        <br>
        <div style="width: 100%; max-width: 500px;">
          <label>With a help text:</label>
          <BankAccountNumberInputField country-code="MX"
                                       label="Introduce un CLABE"
                                       modelValue=""
                                       help-text="Example Help Text"
          />
        </div>
        <br>
        <div style="width: 100%; max-width: 500px;">
          <label>With hidden clear button:</label>
          <BankAccountNumberInputField country-code="MX"
                                       label="Introduce un CLABE"
                                       modelValue="138211000000000127"
                                       hide-clear-button
          />
        </div>
        <br>
        <div style="width: 100%; max-width: 500px;">
          <label>With an invalid value:</label>
          <BankAccountNumberInputField country-code="MX"
                                       label="Introduce un CLABE"
                                       error-label="Invalid CLABE number"
                                       modelValue="1382110000000"
          />
        </div>
        <br>
        <div style="width: 100%; max-width: 500px;">
          <label>Readonly:</label>
          <BankAccountNumberInputField country-code="MX"
                                       label="Introduce un CLABE"
                                       error-label="Invalid CLABE number"
                                       modelValue="138211000000000127"
                                       readonly
          />
        </div>
        <div style="width: 100%; max-width: 500px;">
          <label>Disabled:</label>
          <BankAccountNumberInputField country-code="MX"
                                       label="Introduce un CLABE"
                                       error-label="Invalid CLABE number"
                                       modelValue="138211000000000127"
                                       disabled
          />
        </div>
      </div>
  `,
});
examples.args = {
  device: '',
};
examples.argTypes = {
  device: { table: { disable: true } },
  disabled: { table: { disable: true } },
  readonly: { table: { disable: true } },
  autoformat: { table: { disable: true } },
  showLengthHint: { table: { disable: true } },
  lengthHint: { table: { disable: true } },
  lengthHintLabel: { table: { disable: true } },
  label: { table: { disable: true } },
  errorLabel: { table: { disable: true } },
  countryCode: { table: { disable: true } },
  helpText: { table: { disable: true } },
  hideClearButton: { table: { disable: true } },
};

export {
  defaultExample,
  examples,
};

export default BankAccountNumberInputFieldStories;
