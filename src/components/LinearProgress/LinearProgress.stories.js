import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MedalLevel0Icon } from '@lana/b2c-mapp-ui-assets/dist/index';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import LinearProgress from './LinearProgress.vue';
import SpecCard from '../SpecCard/SpecCard.vue';
import ContentItem from '../ContentItem/ContentItem.vue';
import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

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
      <h2><strong>LinearProgress:</strong>&nbsp;A component that let user see a progress.</h2>
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

const LinearProgressStories = {
  component: LinearProgress,
  title: 'Components/LinearProgress',
  decorators: [withKnobs, deviceDecorator],
  args: {
    dataTestId: 'linear-progress',
    progress: 10,
    total: 100,
    percentage: null,
    color: 'blue',
    animate: false,
    animationDuration: 1000,
    circularAnimation: false,
  },
  argTypes: {
    progress: { name: 'Progress', control: { type: 'number' } },
    total: { name: 'Total', control: { type: 'number' } },
    percentage: { name: 'Percentage', control: { type: 'number', min: 0, max: 100 } },
    dataTestId: { control: { type: 'text' } },
    color: { control: { type: 'select', options: availableColors, default: availableColors[0] } },
    animate: { name: 'Animate?', control: { type: 'boolean' } },
    animationDuration: { name: 'Animate duration', control: { type: 'number' } },
    circularAnimation: { name: 'Infinite animation?', control: { type: 'boolean' } },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    LinearProgress,
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
      <LinearProgress style="padding: 16px"
                      :key="computedKey"
                      :progress="progress"
                      :total="total"
                      :percentage="percentage"
                      :data-test-id="dataTestId"
                      :color="color"
                      :animate="animate"
                      :animation-duration="animationDuration"
                      :circular-animation="circularAnimation"
                      @animationend="onAnimationEnd"
      >
      </LinearProgress>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<LinearProgress :progress="progress"
                :total="total"
                :percentage="percentage"
                :data-test-id="field"
                :color="color"
                :animate="animate"
                :animation-duration="animationDuration"
                :circular-animation="circularAnimation"
                @animationend="onAnimationEnd"
/>`,
    },
  },
};

const withCardExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    LinearProgress,
    ContentItem,
    Heading,
    TextParagraph,
    SpecCard,
    MedalLevel0Icon,
  },
  template: `
    <SpecCard style="margin: 16px">
      <div style="display: flex; padding: 16px">
        <div style="width: 80px; height: 80px; justify-content: flex-start; margin-right: 8px">
          <MedalLevel0Icon style="width: 80px; height: 80px; max-width: 80px; max-height: 80px"/>
        </div>
        <div style="flex-grow: 1; display: flex; flex-direction: column; align-items: flex-start; justify-content: center">
          <Heading color="purple-500"
                  weight="semibold"
                  size="xxxl"
          >
            Level 0
          </Heading>
          <TextParagraph size="small" v-if="!percentage">
            {{progress}} out of 100 points
          </TextParagraph>
          <TextParagraph size="small" v-if="percentage">
            {{percentage}}%
          </TextParagraph>
        </div>
      </div>
      <LinearProgress :progress="progress"
                      :total="total"
                      :percentage="percentage"
                      :data-test-id="dataTestId"
                      :color="color"
                      style="padding: 16px;"
      >
      </LinearProgress>
    </SpecCard>
  `,
});
withCardExample.parameters = {
  docs: {
    source: {
      code: `
<SpecCard style="margin: 16px">
  <div class="container">
    <div class="media">
      <MedalLevel0Icon class="icon/>
    </div>
    <div class="body">
      <Heading color="purple-500"
              weight="semibold"
              size="xxxl"
      >
        Level 0
      </Heading>
      <TextParagraph size="small" v-if="!percentage">
        {{progress}} out of 100 points
      </TextParagraph>
      <TextParagraph size="small" v-if="percentage">
        {{percentage}}%
      </TextParagraph>
    </div>
  </div>
  <LinearProgress class="progress"
                  :progress="progress"
                  :total="total"
                  :percentage="percentage"
                  :data-test-id="field"
                  :color="color"
  />
</SpecCard>
      `,
    },
  },
};

export {
  defaultExample,
  withCardExample,
};

export default LinearProgressStories;
