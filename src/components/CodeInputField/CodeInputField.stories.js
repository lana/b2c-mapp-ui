import { action } from '@storybook/addon-actions';

import CodeInputField from './CodeInputField.vue';
import { availableTypes } from './CodeInputField';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>CodeInputField:</strong>&nbsp;Used for validating codes such as SMS verification.');

const CodeInputFieldStories = {
  component: CodeInputField,
  title: 'components/CodeInputField',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    type: availableTypes[1],
    disabled: false,
    errorMessage: '',
    errorDescription: '',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    type: { name: 'Type', control: 'select', options: availableTypes },
    disabled: { name: 'Is Disabled?', control: 'boolean' },
    errorMessage: { name: 'Error Message', control: 'text' },
    errorDescription: { name: 'Error Description', control: 'text' },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    CodeInputField,
  },
  data() {
    return {
      code: '',
    };
  },
  methods: {
    onAnimationEnd: action('AnimationEnd'),
    onInput: action('Input'),
    onReadyToCheckChanged: action('ReadyToCheckChanged'),
  },
  mounted() {
    this.$refs.field.focus();
  },
  template: `
      <div>
        <CodeInputField v-model="code"
                        ref="field"
                        :type="type"
                        :disabled="disabled"
                        :error-message="errorMessage"
                        :error-description="errorDescription"
                        @input="onInput"
                        @animationend="onAnimationEnd"
                        @readyToCheckChanged="onReadyToCheckChanged"
        />
        <br>
        <br>
        <div style="margin-left: 20px">
          Bound value: {{ code }}
        </div>
      </div>
  `,
});

const withError = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    CodeInputField,
  },
  template: `
    <CodeInputField value="123456"
                    error-message="Example error message"
                    error-description="Example error description"
    />
  `,
});
withError.argTypes = {
  type: { table: { disable: true } },
  disabled: { table: { disable: true } },
  errorMessage: { table: { disable: true } },
  errorDescription: { table: { disable: true } },
};
withError.parameters = {
  docs: {
    source: {
      code: `
<CodeInputField value="123456"
              error-message="Example error message"
              error-description="Example error description"
/>`,
    },
  },
};

export {
  defaultExample,
  withError,
};

export default CodeInputFieldStories;
