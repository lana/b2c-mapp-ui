import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import WrappedButton from './WrappedButton.vue';
import { availableTypes } from './WrappedButton';

const WrappedButtonStories = {
  component: WrappedButton,
  title: 'Components/WrappedButton',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    WrappedButton,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    type: {
      default: select('Type', [...availableTypes, ''], ''),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    loading: {
      default: boolean('Is Loading?', false),
    },
    loadingText: {
      default: text('Loading Text', 'Cargando...'),
    },
    href: {
      default: text('href', ''),
    },
    label: {
      default: text('Button Label', 'Example Wrapped Button Content'),
    },
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>WrappedButton:</strong>&nbsp;Wraps a Button component with extra padding to be placed at the bottom of the screen.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <WrappedButton :type="type"
                       :href="href"
                       :loading="loading"
                       :loading-text="loadingText"
                       :disabled="disabled"
                       @click="onClick"
        >
          {{ label }}
        </WrappedButton>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default WrappedButtonStories;
