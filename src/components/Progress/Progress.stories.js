import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import Progress from './Progress.vue';
import RenderString from '../../lib/renderString';

const availableColors = ['blue', 'brown', 'green', 'orange', 'pink', 'purple', 'red', 'yellow'];

const deviceDecorator = () => ({
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  components: { StorybookMobileDeviceSimulator },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Progress:</strong>&nbsp;A component that let user see a progress.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <story />
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});
deviceDecorator.argTypes = {
  device: { control: { type: 'select', options: [...availableDevices] } },
};

const ProgressStories = {
  component: Progress,
  title: 'Components/Progress',
  decorators: [withKnobs, deviceDecorator],
  args: {
    dataTestId: 'progress',
    progress: 10,
    total: 100,
    percentage: null,
    title: 'Level 1',
    description: '10 out of 100 points',
    color: availableColors[0],
    animate: false,
    animationDuration: 1000,
    circularAnimation: false,
  },
  argTypes: {
    progress: { name: 'Progress', control: { type: 'number' } },
    total: { name: 'Total', control: { type: 'number' } },
    percentage: { name: 'Percentage', control: { type: 'number', min: 0, max: 100 } },
    title: { name: 'Title', control: { type: 'text' } },
    description: { name: 'Description', control: { type: 'text' } },
    dataTestId: { control: { type: 'text' } },
    color: { options: availableColors, control: { type: 'select' } },
    animate: { name: 'Animate?', control: { type: 'boolean' } },
    animationDuration: { name: 'Animate duration', control: { type: 'number' } },
    circularAnimation: { name: 'Infinite animation?', control: { type: 'boolean' } },
    customTitle: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
    customDescription: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    Progress,
    RenderString,
  },
  computed: {
    computedKey() {
      const result = `${this.animate}-${this.animationDuration}-${this.circularAnimation}`;
      return result;
    },
  },
  methods: {
    onAnimationEnd: action('Animation ended!'),
  },
  template: `
      <Progress :progress="progress"
                :key="computedKey"
                :total="total"
                :percentage="percentage"
                :data-test-id="dataTestId"
                :title="title"
                :description="description"
                :color="color"
                :animate="animate"
                :animation-duration="animationDuration"
                :circular-animation="circularAnimation"
                @animationend="onAnimationEnd"
      >
        <template v-if="customTitle" #customTitle>
          <RenderString :string="customTitle" />
        </template>
        <template v-if="customDescription" #customDescription>
          <RenderString :string="customDescription" />
        </template>
      </Progress>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<Progress :progress="progress"
          :total="total"
          :percentage="percentage"
          :data-test-id="field"
          :title="title"
          :description="description"
          :color="color"
          :animate="animate"
          :animation-duration="animationDuration"
          :circular-animation="circularAnimation"
          @animationend="onAnimationEnd"
>
  <template #customTitle>
    {{ customTitle }}
  </template>
  <template #customDescription>
    {{ customDescription }}
  </template>
</Progress>
      `,
    },
  },
};

export {
  defaultExample,
};

export default ProgressStories;
