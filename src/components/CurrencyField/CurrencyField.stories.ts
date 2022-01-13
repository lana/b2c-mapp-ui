import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/vue3';

import CurrencyField from './CurrencyField.vue';
import { sleep } from '../../lib/sleepHelper';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>CurrencyField:</strong>&nbsp;An input field with currency formatting.');

const CurrencyFieldStories = {
  component: CurrencyField,
  title: 'Components/CurrencyField',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    disabled: false,
    readonly: false,
    label: 'Example CurrencyField',
    errorLabel: '',
    maxLength: null,
    showPrefix: false,
    hideClearButton: false,
    lengthHint: null,
    lengthHintLabel: '',
    currency: 'CLP',
    locale: 'es-cl',
    helpText: '',
    default: '',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    disabled: { name: 'Is Disabled?', control: 'boolean' },
    readonly: { name: 'Is Readonly?', control: 'boolean' },
    label: { name: 'Label', control: 'text' },
    errorLabel: { name: 'Error Label', control: 'text' },
    maxLength: { name: 'Max length', control: 'number' },
    showPrefix: { name: 'Show Prefix?', control: 'boolean' },
    hideClearButton: { name: 'Hide Clear Button', control: 'boolean' },
    lengthHint: { name: 'Length Hint', control: 'number' },
    lengthHintLabel: { name: 'Length Hint Label', control: 'text' },
    currency: { name: 'Currency Code', control: 'select', options: ['CLP', 'MXN', 'EUR', 'BRL'] },
    locale: { name: 'Locale', control: 'select', options: ['es-cl', 'es-mx', 'es-es', 'pt-br'] },
    helpText: { name: 'Help text', control: 'text' },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
} as Meta<typeof CurrencyField>;

const defaultExample: StoryFn<typeof CurrencyField> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    CurrencyField,
    RenderString,
  },
  data() {
    return {
      value: null,
      formattedValue: '',
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
      <div style="margin: 20px;">
        <CurrencyField v-model="value"
                       v-model:formattedValue="formattedValue"
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
        >
          <RenderString :string="defaultSlot" v-if="defaultSlot" fragment/>
        </CurrencyField>
      </div>
      <br>
      <div style="margin: 20px;">
        Bound value: {{ value }}
      </div>
      <br>
      <div style="margin: 20px;">
        Formatted value: {{ formattedValue }}
      </div>
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
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
/>`,
    },
  },
};

const withPrefilledValue: StoryFn<typeof CurrencyField> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    CurrencyField,
  },
  data() {
    return {
      value: null,
      formattedValue: '',
    };
  },
  methods: {
    onBlur: action('Blur!'),
    onFocus: action('Focus!'),
    onPaste: action('Paste!'),
    onKeyup: action('KeyUp!'),
    onKeypress: action('KeyPress!'),
  },
  async mounted() {
    await sleep(100);
    this.value = 12345;
  },
  template: `
    <div>
      <h3>Example with a pre-filled value. (it should appear with proper formatting)</h3>
      <hr>
      <div style="margin: 20px;">
        <CurrencyField v-model="value"
                       v-model:formattedValue="formattedValue"
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
        Formatted value: {{ formattedValue }}
      </div>
    </div>
  `,
});
withPrefilledValue.argTypes = {
  disabled: { table: { disable: true } },
  readonly: { table: { disable: true } },
  label: { table: { disable: true } },
  errorLabel: { table: { disable: true } },
  maxLength: { table: { disable: true } },
  showPrefix: { table: { disable: true } },
  hideClearButton: { table: { disable: true } },
  lengthHint: { table: { disable: true } },
  lengthHintLabel: { table: { disable: true } },
  currency: { table: { disable: true } },
  locale: { table: { disable: true } },
  helpText: { table: { disable: true } },
  default: { table: { disable: true } },
};
withPrefilledValue.parameters = {
  docs: {
    source: {
      code: `
<CurrencyField v-model="value"
               ref="field"
               label="Example with Prefilled Value"
               @blur="onBlur"
               @focus="onFocus"
               @keypress="onKeypress"
               @keyup="onKeyup"
               @paste="onPaste"
/>`,
    },
  },
};

export {
  defaultExample,
  withPrefilledValue,
};

export default CurrencyFieldStories;
