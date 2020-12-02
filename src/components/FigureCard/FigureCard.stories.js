import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import FigureCard from './FigureCard.vue';

const FigureCardStories = {
  component: FigureCard,
  title: 'Components/FigureCard',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    FigureCard,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    titleAbove: {
      default: boolean('Title Above', false),
    },
    title: {
      default: text('Title', 'Example Title'),
    },
    imageSource: {
      default: text('Image Source (URL)', 'https://source.unsplash.com/random/116x26'),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>FigureCard:</strong>&nbsp;The FigureCard looks like a button containing a figure and a caption.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="margin-top: 20px;">
          <FigureCard :title-above="titleAbove"
                      :title="title"
                      :image-source="imageSource"
          />
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default FigureCardStories;
