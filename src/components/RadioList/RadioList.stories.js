import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import RadioList from './RadioList.vue';

const RadioListStories = {
  component: RadioList,
  title: 'Components/RadioList',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    RadioList,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    title: {
      default: text('Title', 'Example Title'),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
  },
  data() {
    return {
      selectedValue: 'option2',
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
    };
  },
  methods: {
    onInput: action('Changed!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>RadioList:</strong>&nbsp;A control that allows a user to select an option by showing all available options as a list of radio buttons.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <RadioList v-model="selectedValue"
                   id="exampleRadioList"
                   :title="title"
                   :options="options"
                   :disabled="disabled"
                   @input="onInput"
        />
        <hr>
        <div style="margin: 20px">
          Bound value: {{ selectedValue }}
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const withHtmlLabel = () => ({
  components: {
    RadioList,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    title: {
      default: text('Title', 'Example Title'),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
  },
  data() {
    return {
      selectedValue: 'option2',
      options: [
        {
          label: 'Option 1',
          value: 'option1',
        },
        {
          htmlLabel: `
            <p>Option 2</p>
            <p>With <strong>fancy</strong>&nbsp;<em>HTML</em></p>
          `,
          value: 'option2',
        },
        {
          label: 'Option 3',
          value: 'option3',
        },
      ],
    };
  },
  methods: {
    onInput: action('Changed!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>RadioList:</strong>&nbsp;A control that allows a user to select an option by showing all available options as a list of radio buttons.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <RadioList v-model="selectedValue"
                   id="exampleRadioList"
                   :title="title"
                   :options="options"
                   :disabled="disabled"
                   @input="onInput"
        />
        <hr>
        <div style="margin: 20px">
          Bound value: {{ selectedValue }}
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
  withHtmlLabel,
};

export default RadioListStories;
