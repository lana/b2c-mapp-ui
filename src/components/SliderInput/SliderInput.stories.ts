import type { Meta, StoryFn } from '@storybook/vue3';

import SliderInput from './SliderInput.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const availableColors = ['blue', 'brown', 'green', 'orange', 'pink', 'purple', 'red', 'yellow'];

const deviceDecorator = createDeviceDecorator('<strong>SliderInput:</strong>&nbsp;A component that lets users input number fields with a slider.');

const SliderInputStories = {
  component: SliderInput,
  title: 'Components/SliderInput',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    value: 100,
    dataTestId: 'slider-input',
    min: 0,
    max: 1000,
    step: 100,
    color: availableColors[0],
    titleLeft: 'Mínimo',
    descriptionLeft: '$0',
    titleRight: 'Máximo',
    descriptionRight: '$1.000',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    value: { control: 'number', name: 'Value' },
    min: { name: 'Min', control: { type: 'number' } },
    max: { name: 'Max', control: { type: 'number' } },
    step: { name: 'Step', control: { type: 'number', min: 1 } },
    dataTestId: { control: { type: 'text' } },
    color: { control: 'select', options: availableColors },
    titleLeft: { control: { type: 'text' } },
    descriptionLeft: { control: { type: 'text' } },
    titleRight: { control: { type: 'text' } },
    descriptionRight: { control: { type: 'text' } },
  },
} as Meta<typeof SliderInput>;

const defaultExample: StoryFn<typeof SliderInput> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    SliderInput,
  },
  data() {
    return {
      boundValue: this.value,
    };
  },
  template: `
    <div>
      <div style="margin: 20px;">
        <SliderInput v-model="boundValue"
                     :min="min"
                     :max="max"
                     :step="step"
                     :data-test-id="dataTestId"
                     :color="color"
                     :title-left="titleLeft"
                     :description-left="descriptionLeft"
                     :title-right="titleRight"
                     :description-right="descriptionRight"
        />
      </div>
      <br>
      <div style="margin: 20px;">
        Bound value: {{ boundValue }}
      </div>
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<SliderInput v-model="boundValue"
             :min="min"
             :max="max"
             :step="step"
             :data-test-id="dataTestId"
             :color="color"
             :title-left="titleLeft"
             :description-left="descriptionLeft"
             :title-right="titleRight"
             :description-right="descriptionRight"
/>`,
    },
  },
};

export {
  defaultExample,
};

export default SliderInputStories;
