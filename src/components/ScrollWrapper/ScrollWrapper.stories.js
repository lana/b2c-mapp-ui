import { withKnobs, select } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import ScrollWrapper from './ScrollWrapper.vue';
import Screen from '../Screen/Screen.vue';

const ScrollWrapperStories = {
  component: ScrollWrapper,
  title: 'Components/ScrollWrapper',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ScrollWrapper,
    Screen,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ScrollWrapper:</strong>&nbsp;A wrapper that provides vertical scrolling.</h2>
      <p style="margin-top: 10px;">Commonly used as a direct child of the Screen component.</p>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <Screen>
          <ScrollWrapper>
            Something to be scrolled
            <p style="margin-top: 20px; height: 800px"> Some really long content</p>
            <p>The bottom</p>
          </ScrollWrapper>
        </Screen>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default ScrollWrapperStories;
