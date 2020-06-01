import { withKnobs, select } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import Heading from './Heading.vue';
import { availableSizes, availableWeights } from './Heading';
import { capitalizeFirstLetter } from '../../lib/textHelper';

const HeadingStories = {
  component: Heading,
  title: 'Components/Heading',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    Heading,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    size: {
      default: select('Size', [...availableSizes, ''], 'xl'),
    },
    weight: {
      default: select('Weight', [...availableWeights, ''], 'normal'),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Heading:</strong>&nbsp;A text view that represents a heading/title.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="margin: 20px;">
          <Heading :size="size"
                   :weight="weight"
          >
            Example Heading
          </Heading>
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const weights = () => ({
  components: {
    Heading,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  data() {
    return {
      availableWeights,
    };
  },
  methods: {
    capitalizeFirstLetter,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Heading:</strong>&nbsp;Available Weights</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="margin: 20px;">
          <Heading>Default weight example</Heading>
          <Heading v-for="(weight, index) in availableWeights"
                   :key="index"
                   :weight="weight"
          >
            {{ capitalizeFirstLetter(weight) }} weight example
          </Heading>
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const sizes = () => ({
  components: {
    Heading,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  data() {
    return {
      availableSizes,
    };
  },
  methods: {
    capitalizeFirstLetter,
  },
  template: `
    <div style="margin: 50px">
      <h2><strong>Heading:</strong>&nbsp;Available Sizes</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="margin: 20px;">
          <Heading>Default size example</Heading>
          <Heading v-for="(size, index) in availableSizes"
                   :key="index"
                   :size="size"
          >
            {{ capitalizeFirstLetter(size) }} size example
          </Heading>
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
  weights,
  sizes,
};

export default HeadingStories;
