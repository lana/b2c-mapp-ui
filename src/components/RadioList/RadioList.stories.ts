import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/vue3';

import RadioList from './RadioList.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>RadioList:</strong>&nbsp;A control that allows a user to select an option by showing all available options as a list of radio buttons.');

const RadioListStories = {
  component: RadioList,
  title: 'Components/RadioList',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    title: 'Example Title',
    disabled: false,
    buttonMode: false,
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
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    title: { control: 'text', name: 'Title' },
    disabled: { control: 'boolean', name: 'Is Disabled?' },
    buttonMode: { control: 'boolean', name: 'Button Mode?' },
    options: { control: 'object', name: 'Options' },
  },
} as Meta<typeof RadioList>;

const defaultExample: StoryFn<typeof RadioList> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    RadioList,
  },
  data() {
    return {
      selectedValue: 'option2',
    };
  },
  methods: {
    onInput: action('Changed!'),
  },
  template: `
    <div>
      <RadioList v-model="selectedValue"
                 id="exampleRadioList"
                 :title="title"
                 :options="options"
                 :disabled="disabled"
                 :button-mode="buttonMode"
                 @input="onInput"
      />
      <hr>
      <div style="margin: 20px">
        Bound value: {{ selectedValue }}
      </div>
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<RadioList v-model="value"
           id="exampleRadioList"
           :title="title"
           :options="options"
           :disabled="disabled"
           :button-mode="buttonMode"
           @input="onInput"
/>`,
    },
  },
};

const withHtmlLabel: StoryFn<typeof RadioList> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    RadioList,
  },
  data() {
    return {
      selectedValue: 'option2',
    };
  },
  methods: {
    onInput: action('Changed!'),
  },
  template: `
    <div>
      <RadioList v-model="selectedValue"
                 id="exampleRadioList"
                 :title="title"
                 :options="options"
                 :disabled="disabled"
                 :button-mode="buttonMode"
                 @input="onInput"
      />
      <hr>
      <div style="margin: 20px">
        Bound value: {{ selectedValue }}
      </div>
    </div>
  `,
});
withHtmlLabel.args = {
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
withHtmlLabel.parameters = {
  docs: {
    source: {
      code: `
<RadioList v-model="value"
           id="exampleRadioList"
           :title="title"
           :options="options"
           :disabled="disabled"
           :button-mode="buttonMode"
           @input="onInput"
/>`,
    },
  },
};

export {
  defaultExample,
  withHtmlLabel,
};

export default RadioListStories;
