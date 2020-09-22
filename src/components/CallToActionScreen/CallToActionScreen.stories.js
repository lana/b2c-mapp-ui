import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { WorkInProgressIcon } from '@lana/b2c-mapp-ui-assets';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import CallToActionScreen from './CallToActionScreen.vue';

const CallToActionScreenStories = {
  component: CallToActionScreen,
  title: 'Components/CallToActionScreen',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    CallToActionScreen,
    WorkInProgressIcon,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    title: {
      default: text('Title', 'Example Title'),
    },
    description: {
      default: text('Description', 'Some description'),
    },
    buttonText: {
      default: text('ButtonText', 'Example Button Text'),
    },
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
  <div style="margin: 10px 50px 10px 50px;">
    <h2><strong>CallToActionScreen:</strong>&nbsp;This can be used as a generic and configurable screen that has the following: title, description, image and button.</h2>
    <hr>
    <StorybookMobileDeviceSimulator :device="device">
      <CallToActionScreen :title="title"
                          :description="description"
                          :button-text="buttonText"
                          @click="onClick"
      >
        <WorkInProgressIcon/>
      </CallToActionScreen>
    </StorybookMobileDeviceSimulator>
  </div>
`,

});

export {
  defaultExample,
};

export default CallToActionScreenStories;
