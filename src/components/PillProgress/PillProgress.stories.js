import { action } from '@storybook/addon-actions';
import { MedalLevel5Icon, SheepRunningIcon } from '@lana/b2c-mapp-ui-assets';

import PillProgress from './PillProgress.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const availableColors = ['blue', 'brown', 'green', 'orange', 'pink', 'purple', 'red', 'yellow'];

const deviceDecorator = createDeviceDecorator('<strong>PillProgress:</strong>&nbsp;A component that let user see a progress.');

const PillProgressStories = {
  component: PillProgress,
  title: 'Components/PillProgress',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    dataTestId: 'linear-progress',
    progress: 10,
    total: 100,
    percentage: null,
    color: availableColors[0],
    animate: false,
    animationDuration: 1000,
    circularAnimation: false,
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    progress: { name: 'Progress', control: { type: 'number' } },
    total: { name: 'Total', control: { type: 'number' } },
    percentage: { name: 'Percentage', control: { type: 'number', min: 0, max: 100 } },
    dataTestId: { control: { type: 'text' } },
    color: { control: 'select', options: availableColors },
    animate: { name: 'Animate?', control: { type: 'boolean' } },
    animationDuration: { name: 'Animate duration', control: { type: 'number' } },
    circularAnimation: { name: 'Infinite animation?', control: { type: 'boolean' } },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    PillProgress,
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
      <PillProgress style="padding: 16px"
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
      </PillProgress>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<PillProgress :progress="progress"
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

const withFlagsExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    PillProgress,
    TextParagraph,
    MedalLevel5Icon,
    SheepRunningIcon,
  },
  computed: {
    computedKey() {
      const result = `${this.animate}-${this.animationDuration}-${this.circularAnimation}`;
      return result;
    },
  },
  template: `
      <PillProgress :key="computedKey"
                    :progress="progress"
                    :total="total"
                    :percentage="percentage"
                    :data-test-id="dataTestId"
                    :color="color"
                    :animate="animate"
                    :animation-duration="animationDuration"
                    :circular-animation="circularAnimation"
                    style="padding: 16px;"
      >
        <div style="position: absolute; left: 60%; top: -10px; transform: translateX(-50%);display: flex; flex-direction: column; align-items: center; max-width: 65px">
          <SheepRunningIcon width="48" style="filter: drop-shadow(-2px -2px 0px white) drop-shadow(2px -2px 0px white) drop-shadow(2px 2px 0px white)drop-shadow(-2px 2px 0px white)"/>
          <TextParagraph size="small"
                         weight="bold"
                         color="purple-500"
                         style="margin-top: 12px;"
          >
            Mantener nivel 4
          </TextParagraph>
        </div>
        <div style="position: absolute; left: 100%; top: -10px; transform: translateX(-40px);display: flex; flex-direction: column; align-items: center;">
          <MedalLevel5Icon width="48" style="filter: drop-shadow(-2px -2px 0px white) drop-shadow(2px -2px 0px white) drop-shadow(2px 2px 0px white)drop-shadow(-2px 2px 0px white)"/>
          <TextParagraph size="small"
                         weight="bold"
                         color="purple-500"
                         style="background-color: #F4F5F7; border-radius: 49px; padding: 4px 8px; margin-top: 12px; width: 100%;"
          >
            Nivel 5
          </TextParagraph>
        </div>
      </PillProgress>
  `,
});
withFlagsExample.parameters = {
  docs: {
    source: {
      code: `
<PillProgress :key="computedKey"
              class="progress"
              :progress="progress"
              :total="total"
              :percentage="percentage"
              :data-test-id="dataTestId"
              :color="color"
              :animate="animate"
              :animation-duration="animationDuration"
              :circular-animation="circularAnimation"
>
  <div class="progress-icon-container">
    <SheepRunningIcon class="progress-icon/>
    <TextParagraph size="small"
                   weight="bold"
                   color="purple-500"
                   class="progress-text"
    >
      Mantener nivel 4
    </TextParagraph>
  </div>
  <div class="goal-icon-container">
    <MedalLevel5Icon class="goal-icon"/>
    <TextParagraph size="small"
                   weight="bold"
                   color="purple-500"
                   class="goal-text"
    >
      Nivel 5
    </TextParagraph>
  </div>
</PillProgress>
      `,
    },
  },
};

export {
  defaultExample,
  withFlagsExample,
};

export default PillProgressStories;
