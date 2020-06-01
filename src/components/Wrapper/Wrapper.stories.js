import { withKnobs, select } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import Wrapper from './Wrapper.vue';

const WrapperStories = {
  component: Wrapper,
  title: 'Components/Wrapper',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    Wrapper,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Wrapper:</strong>&nbsp;Description TBD</h2> <!-- TODO: Add a better description for this component-->
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <Wrapper modal>
          Example wrapped content (modal style)
        </Wrapper>
        <br>
        <Wrapper>
          Example wrapped content
        </Wrapper>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default WrapperStories;
