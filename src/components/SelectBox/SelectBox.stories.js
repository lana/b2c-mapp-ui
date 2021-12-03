import { action } from '@storybook/addon-actions';

import SelectBox from './SelectBox.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>SelectBox:</strong>&nbsp;A customized &lt;select&gt; box component.');

const SelectBoxStories = {
  component: SelectBox,
  title: 'Components/SelectBox',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    label: 'Example label',
    errorLabel: '',
    readonly: false,
    disabled: false,
    helpText: '',
    options: [],
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    label: { control: 'text', name: 'Label' },
    errorLabel: { control: 'text', name: 'Error Label' },
    readonly: { control: 'boolean', name: 'Is Readonly?' },
    disabled: { control: 'boolean', name: 'Is Disabled?' },
    helpText: { control: 'text', name: 'Help Text' },
    options: { control: 'object', name: 'Options' },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    SelectBox,
  },
  data() {
    return {
      selectedValue: '',
    };
  },
  methods: {
    onInput: action('Changed!'),
    onBlur: action('Blur!'),
    onFocus: action('Focus!'),
    onPaste: action('Paste!'),
    onKeyup: action('KeyUp!'),
    onKeypress: action('KeyPress!'),
  },
  template: `
    <div>
      <p style="margin-top: 10px;"><em>NOTE</em>: The first option will be selected by default.</p>
      <hr>
      <div style="margin: 20px;">
        <SelectBox v-model="selectedValue"
                   :label="label"
                   :error-label="errorLabel"
                   :options="options"
                   :readonly="readonly"
                   :disabled="disabled"
                   :help-text="helpText"
                   @input="onInput"
                   @blur="onBlur"
                   @focus="onFocus"
                   @keypress="onKeypress"
                   @keyup="onKeyup"
                   @paste="onPaste"
        />
      </div>
      <div style="margin: 20px;">
        Bound value: {{ selectedValue }}
      </div>
    </div>
  `,
});
defaultExample.args = {
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
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<SelectBox v-model="selectedValue"
           :label="label"
           :error-label="errorLabel"
           :options="options"
           :readonly="readonly"
           :disabled="disabled"
           :help-text="helpText"
           @input="onInput"
           @blur="onBlur"
           @focus="onFocus"
           @keypress="onKeypress"
           @keyup="onKeyup"
           @paste="onPaste"
/>`,
    },
  },
};

const withPreselectedValue = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    SelectBox,
  },
  data() {
    return {
      selectedValue: 'option2',
    };
  },
  methods: {
    onInput: action('Changed!'),
    onBlur: action('Blur!'),
    onFocus: action('Focus!'),
    onPaste: action('Paste!'),
    onKeyup: action('KeyUp!'),
    onKeypress: action('KeyPress!'),
  },
  template: `
    <div>
      <p style="margin-left: 10px;">With a pre-selected value (specified by the consumer)</p>
      <div style="margin: 20px;">
        <SelectBox v-model="selectedValue"
                    :label="label"
                    :error-label="errorLabel"
                    :options="options"
                    :disabled="disabled"
                    :readonly="readonly"
                    :help-text="helpText"
                    @input="onInput"
                    @blur="onBlur"
                    @focus="onFocus"
                    @keypress="onKeypress"
                    @keyup="onKeyup"
                    @paste="onPaste"
        />
      </div>
      <div style="margin: 20px;">
        Bound value: {{ selectedValue }}
      </div>
    </div>
  `,
});
withPreselectedValue.args = {
  options: [
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
      value: 'option3',
    },
  ],
};
withPreselectedValue.parameters = {
  docs: {
    source: {
      code: `
<SelectBox v-model="selectedValue"
           :label="label"
           :error-label="errorLabel"
           :options="options"
           :readonly="readonly"
           :disabled="disabled"
           :help-text="helpText"
           @input="onInput"
           @blur="onBlur"
           @focus="onFocus"
           @keypress="onKeypress"
           @keyup="onKeyup"
           @paste="onPaste"
/>`,
    },
  },
};

const withNoValueInitiallySelected = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    SelectBox,
  },
  data() {
    return {
      selectedValue: '',
    };
  },
  methods: {
    onInput: action('Changed!'),
    onBlur: action('Blur!'),
    onFocus: action('Focus!'),
    onPaste: action('Paste!'),
    onKeyup: action('KeyUp!'),
    onKeypress: action('KeyPress!'),
  },
  template: `
    <div>
      <h3>With no value initially selected.</h3>
      <hr>
      <div style="margin: 20px;">
        <SelectBox v-model="selectedValue"
                    label="With no value selected"
                    :options="options"
                    @input="onInput"
                    @blur="onBlur"
                    @focus="onFocus"
                    @keypress="onKeypress"
                    @keyup="onKeyup"
                    @paste="onPaste"
        />
      </div>
      <div style="margin: 20px;">
        Bound value: {{ selectedValue }}
      </div>
    </div>
  `,
});
withNoValueInitiallySelected.args = {
  options: [
    {
      label: 'Choose an option',
      value: '',
      disabled: true,
    },
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

export {
  defaultExample,
  withPreselectedValue,
  withNoValueInitiallySelected,
};

export default SelectBoxStories;
