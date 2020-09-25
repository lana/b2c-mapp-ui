import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import CodeInputField from './CodeInputField.vue';
import { availableTypes } from './CodeInputField';
import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';

const CodeInputFieldStories = {
  component: CodeInputField,
  title: 'components/CodeInputField',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    CodeInputField,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    type: {
      default: select('Type', availableTypes, availableTypes[1]),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    errorMessage: {
      default: text('Error Message', ''),
    },
    errorDescription: {
      default: text('Error Description', ''),
    },
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
    <div style="margin: 10px 50px 10px 50px; height: 100vh;">
      <h2><strong>CodeInputField:</strong>&nbsp;Used for validating codes such as SMS verification.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
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
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const withError = () => ({
  components: {
    CodeInputField,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px; height: 100vh;">
      <h2><strong>CodeInputField:</strong>&nbsp;With Error.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <CodeInputField value="123456"
                        error-message="Example error message"
                        error-description="Example error description"
        />
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
  withError,
};

export default CodeInputFieldStories;
