import type { Meta, StoryFn } from '@storybook/vue3';

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
    locale: { name: 'Locale', control: 'select', options: ['es-CL', 'es-MX'] },
    currency: { name: 'Currency', control: 'select', options: ['CLP', 'MXN'] },
    dataTestId: { control: { type: 'text' } },
    id: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    disabled: { name: 'Is disabled?', control: 'boolean' },
    readonly: { name: 'Is read only?', control: 'boolean' },
    startFocused: { name: 'Start focused?', control: 'boolean' },
  },
} as Meta<typeof AmountInput>;

const defaultExample: StoryFn<typeof AmountInput> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    AmountInput,
  },
  data() {
    return {
      boundValue: `${this.value || ''}`,
      formattedValue: this.value || 0,
    };
  },
  watch: {
    value() {
      this.boundValue = `${this.value || 0}`;
    },
  },
  template: `
    <div style="height: 80%">
      <AmountInput v-model="boundValue"
                   v-model:formattedValue="formattedValue"
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
      <p>formatted value: {{formattedValue}}</p>
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
