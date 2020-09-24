import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import CurrencyField from './CurrencyField.vue';
import { sleep } from '@/lib/sleepHelper';

const CurrencyFieldStories = {
  component: CurrencyField,
  title: 'Components/CurrencyField',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    CurrencyField,
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
    label: {
      default: text('Label', 'Example CurrencyField'),
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
    hideClearButton: {
      default: boolean('Hide Clear Button?', false),
    },
    lengthHint: {
      default: number('Length Hint'),
    },
    lengthHintLabel: {
      default: text('Length Hint Label'),
    },
    currency: {
      default: text('Currency Code', 'CLP'),
    },
    locale: {
      default: text('Locale', 'es-CL'),
    },
    helpText: {
      default: text('Help Text'),
    },
  },
  data() {
    return {
      value: '',
      unformattedValue: '',
    };
  },
  methods: {
    onBlur: action('Blur!'),
    onFocus: action('Focus!'),
    onPaste: action('Paste!'),
    onKeyup: action('KeyUp!'),
    onKeypress: action('KeyPress!'),
  },
  watch: {
    value() {
      this.unformattedValue = this.$refs.field.getUnformattedValue();
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>CurrencyField:</strong>&nbsp;An input field with currency formatting.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="margin: 20px;">
          <CurrencyField v-model="value"
                         ref="field"
                         :disabled="disabled"
                         :readonly="readonly"
                         :label="label"
                         :currency="currency"
                         :locale="locale"
                         :error-label="errorLabel"
                         :max-length="maxLength"
                         :show-prefix="showPrefix"
                         :length-hint="lengthHint"
                         :length-hint-label="lengthHintLabel"
                         :hide-clear-button="hideClearButton"
                         :help-text="helpText"
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
        <br>
        <div style="margin: 20px;">
          Unformatted value: {{ unformattedValue }}
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const withPrefilledValue = () => ({
  components: {
    CurrencyField,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  data() {
    return {
      value: null,
      unformattedValue: '',
    };
  },
  methods: {
    onBlur: action('Blur!'),
    onFocus: action('Focus!'),
    onPaste: action('Paste!'),
    onKeyup: action('KeyUp!'),
    onKeypress: action('KeyPress!'),
  },
  watch: {
    value() {
      this.unformattedValue = this.$refs.field.getUnformattedValue();
    },
  },
  async mounted() {
    await sleep(100);
    this.value = 12345;
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>CurrencyField:</strong>&nbsp;Example with a pre-filled value. (it should appear with proper formatting)</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="margin: 20px;">
          <CurrencyField v-model="value"
                         ref="field"
                         label="Example with Prefilled Value"
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
        <br>
        <div style="margin: 20px;">
          Unformatted value: {{ unformattedValue }}
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
  withPrefilledValue,
};

export default CurrencyFieldStories;
