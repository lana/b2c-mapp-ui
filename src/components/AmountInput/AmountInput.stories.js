import { createDeviceDecorator } from '../../lib/storybookHelpers';
import AmountInput from './AmountInput.vue';

const deviceDecorator = createDeviceDecorator('<strong>AmountInput:</strong> An input that allows the user to enter a desire amount.');

const AmountInputStories = {
  component: AmountInput,
  title: 'Components/AmountInput',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    value: '0',
    dataTestId: '',
    locale: 'es-MX',
    currency: 'MXN',
    disabled: false,
    readonly: false,
    startFocused: false,
    id: 'amount-input-id',
    name: 'amount-name',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    value: { name: 'Value', control: { type: 'number' } },
    locale: { name: 'Locale', control: { type: 'select', options: ['es-CL', 'es-MX'] } },
    currency: { name: 'Currency', control: { type: 'select', options: ['CLP', 'MXN'] } },
    dataTestId: { control: { type: 'text' } },
    id: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    disabled: { name: 'Is disabled?', control: 'boolean' },
    readonly: { name: 'Is read only?', control: 'boolean' },
    startFocused: { name: 'Start focused?', control: 'boolean' },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    AmountInput,
  },
  data() {
    return {
      boundValue: `${this.value || ''}`,
      unformattedValue: `${this.value || ''}`,
    };
  },
  watch: {
    value() {
      this.boundValue = `${this.value || 0}`;
    },
    boundValue() {
      this.unformattedValue = this.$refs.field.getUnformattedValue();
    },
  },
  template: `
    <div style="height: 80%">
      <AmountInput v-model="boundValue"
                   :key="startFocused"
                   ref="field"
                   :currency="currency"
                   :locale="locale"
                   :disabled="disabled"
                   :readonly="readonly"
                   :start-focused="startFocused"
      >
      </AmountInput>
      <p>bound value: {{boundValue}}</p>
      <p>unformatted value: {{unformattedValue}}</p>
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<AmountInput v-model="value"
             ref="field"
             :symbol="symbol"
             :locale="locale"
             :decimal="decimal"
             :disabled="disabled"
             :readonly="readonly"
             :start-focused="startFocused"
>
</AmountInput>
      `,
    },
  },
};

export {
  defaultExample,
};

export default AmountInputStories;
