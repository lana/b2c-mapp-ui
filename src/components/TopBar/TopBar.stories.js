import { withKnobs, select, text } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import TopBar from './TopBar.vue';

const TopBarStories = {
  component: TopBar,
  title: 'Components/TopBar',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    TopBar,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    title: {
      default: text('Title', 'Example custom title'),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>TopBar:</strong>&nbsp;A custom native AppBar replacement.</h2>
      <p style="margin-top: 10px;">It only renders the title, all actions should be placed by the Android native bridge.</p>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <TopBar :title="title"/>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default TopBarStories;
