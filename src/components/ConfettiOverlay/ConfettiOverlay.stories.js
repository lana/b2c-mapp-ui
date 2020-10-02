import { select, withKnobs } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import ConfettiOverlay from './ConfettiOverlay.vue';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.vue';
import Screen from '../Screen/Screen.vue';
import Heading from '../Heading/Heading.vue';

const ConfettiStories = {
  component: ConfettiOverlay,
  title: 'Components/ConfettiOverlay',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ConfettiOverlay,
    Heading,
    Screen,
    ScrollWrapper,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  template: `
   <div style="margin: 10px 50px 10px 50px;">
   <h2><strong>ConfettiOverlay:</strong>&nbsp</h2>
   <hr>
   <StorybookMobileDeviceSimulator :device="device">
     <Screen>
       <ScrollWrapper>
         <ConfettiOverlay particles="50"/>
         <Heading style="text-align: center;" size="xxxl"
                  weight="semibold"
         >
           DEAL WITH IT
         </Heading>
       </ScrollWrapper>
       <img style="margin: auto; width: 200px; height: auto;" src="https://img.pngio.com/dancing-gifs-get-the-best-gif-on-giphy-dancing-people-png-gif-350_497.gif">
     </Screen>
   </StorybookMobileDeviceSimulator>
   </div>
   `,
});

export {
  defaultExample,
};

export default ConfettiStories;
