import { withKnobs, select } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import AmountInput from './AmountInput.vue';

const deviceDecorator = () => ({
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  components: { StorybookMobileDeviceSimulator },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>AmountInput:</strong>&nbsp;An input that allows the user to enter a desire amount.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <story />
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});
deviceDecorator.argTypes = {
  device: { control: { type: 'select', options: [...availableDevices] } },
};

const AmountInputStories = {
  component: AmountInput,
  title: 'Components/AmountInput',
  decorators: [withKnobs, deviceDecorator],
  args: {
    symbol: '$',
    value: '0',
    dataTestId: '',
    locale: 'es-MX',
    decimal: 2,
    disabled: false,
    readonly: false,
    startFocused: false,
    id: 'amount-input-id',
    name: 'amount-name',
  },
  argTypes: {
    symbol: { name: 'Symbol', control: 'text' },
    value: { name: 'Value', control: { type: 'number' } },
    locale: { name: 'Locale', control: { type: 'select', options: ['es-CL', 'es-MX'] } },
    decimal: { name: 'Decimal', control: { type: 'number', min: 0, max: 2 } },
    dataTestId: { control: { type: 'text' } },
    id: { control: { type: 'text' } },
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
      unformattedValue: '',
    };
  },
  watch: {
    value() {
      this.boundValue = `${this.value || 0}`;
    },
    boundValue() {
      this.unformattedValue = this.$refs.field.getUnformattedValue() || '';
    },
  },
  template: `
    <div style="height: 80%">
      <AmountInput v-model="boundValue"
                   :key="startFocused"
                   ref="field"
                   :symbol="symbol"
                   :locale="locale"
                   :decimal="decimal"
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
