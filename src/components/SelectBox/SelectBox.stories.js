import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import SelectBox from './SelectBox.vue';

const SelectBoxStories = {
  component: SelectBox,
  title: 'Components/SelectBox',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    SelectBox,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    label: {
      default: text('Label', 'Example label'),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
  },
  data() {
    return {
      selectedValue: '',
      preSelectedValue: 'option2',
      options: [
        {
          label: 'Option 1',
          value: 'option1',
        },
        {
          label: 'Option 2',
          value: 'option2',
        },
        {
          label: 'Option 3',
          value: 'option3',
        },
      ],
      preSelectedOptions: [
        {
          label: 'Option 1',
          value: 'option1',
        },
        {
          selected: true,
          label: 'Option 2',
          value: 'option2',
        },
        {
          label: 'Option 3',
          value: 'option2',
        },
      ],
    };
  },
  methods: {
    onInput: action('Changed!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>SelectBox:</strong>&nbsp;A customized &lt;select&gt; box component.</h2>
      <p style="margin-top: 10px;"><em>NOTE</em>: The first option will be selected by default.</p>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <SelectBox v-model="selectedValue"
                   :label="label"
                   :options="options"
                   :disabled="disabled"
                   @input="onInput"
        />
        <div style="margin: 20px;">
          Bound value: {{ selectedValue }}
        </div>
        <br>
        <br>
        <p style="margin-left: 10px;">With a pre-selected value (specified by the consumer)</p>
        <SelectBox v-model="preSelectedValue"
                   :label="label"
                   :options="preSelectedOptions"
                   :disabled="disabled"
                   @input="onInput"
        />
        <div style="margin: 20px;">
          Bound value: {{ preSelectedValue }}
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default SelectBoxStories;
