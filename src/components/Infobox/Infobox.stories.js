import { withKnobs, select, text } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import Infobox from './Infobox.vue';

const InfoboxStories = {
  component: Infobox,
  title: 'Components/Infobox',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    Infobox,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    content: {
      default: text('Contents', 'Example Info...'),
    },
  },
  data() {
    return {
      value: '',
    };
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Infobox:</strong>&nbsp;A simple info box.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <Infobox>{{ content }}</Infobox>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default InfoboxStories;
