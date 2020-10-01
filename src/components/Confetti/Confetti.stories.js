import { select, withKnobs } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import Confetti from './Confetti.vue';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.vue';
import Screen from '../Screen/Screen.vue';
import Heading from '../Heading/Heading.vue';

const ConfettiStories = {
  component: Confetti,
  title: 'Components/Confetti',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    Confetti,
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
   <h2><strong>ContentItem:</strong>&nbsp;A list item which usually transitions the user to content in another screen.</h2>
   <hr>
   <StorybookMobileDeviceSimulator :device="device">
     <Screen>
       <ScrollWrapper>
         <Confetti :confetti-particles="300"/>
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
