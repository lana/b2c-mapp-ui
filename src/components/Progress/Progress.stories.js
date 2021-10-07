import { action } from '@storybook/addon-actions';

import Progress from './Progress.vue';
import RenderString from '../../lib/renderString';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const availableColors = ['blue', 'brown', 'green', 'orange', 'pink', 'purple', 'red', 'yellow'];

const deviceDecorator = createDeviceDecorator('<strong>Progress:</strong>&nbsp;A component that let user see a progress.');

const ProgressStories = {
  component: Progress,
  title: 'Components/Progress',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
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
    customTitle: '',
    customDescription: '',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
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
  setup() { return { ...args }; },
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
        <template v-if="customTitle" v-slot:customTitle>
          <RenderString :string="customTitle" />
        </template>
        <template v-if="customDescription" v-slot:customDescription>
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
  <template v-slot:customTitle>
    {{ customTitle }}
  </template>
  <template v-slot:customDescription>
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
