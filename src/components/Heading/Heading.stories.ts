import type { Meta, StoryFn } from '@storybook/vue3';

import Heading from './Heading.vue';
import { availableSizes, availableWeights } from './Heading';
import { capitalizeFirstLetter } from '../../lib/textHelper';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>Heading:</strong>&nbsp;A text view that represents a heading/title.');

const HeadingStories = {
  component: Heading,
  title: 'Components/Heading',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    size: 'xl',
    weight: 'normal',
    default: 'Example Heading',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    size: { control: 'select', name: 'Size', options: [...availableSizes, ''] },
    weight: { control: 'select', name: 'Weight', options: [...availableWeights, ''] },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
} as Meta<typeof Heading>;

const defaultExample: StoryFn<typeof Heading> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    Heading,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
    <div style="margin: 20px;">
      <Heading :size="size"
                :weight="weight"
      >
        <RenderString :string="defaultSlot" v-if="defaultSlot" />
      </Heading>
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<Heading :size="size"
         :weight="weight"
>
  Example Heading
</Heading>
      `,
    },
  },
};

const weights: StoryFn<typeof Heading> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    Heading,
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
    <div>
      <h3>Available Weights</h3>
      <hr>
      <div style="margin: 20px;">
        <Heading>Default weight example</Heading>
        <Heading v-for="(weight, index) in availableWeights"
                  :key="index"
                  :weight="weight"
        >
          {{ capitalizeFirstLetter(weight) }} weight example
        </Heading>
      </div>
    </div>
  `,
});
weights.argTypes = {
  size: { table: { disable: true } },
  weight: { table: { disable: true } },
  default: { table: { disable: true } },
};
weights.parameters = {
  docs: {
    source: {
      code: availableWeights.map((weight) => `<Heading weight="${weight}"> 
  ${capitalizeFirstLetter(weight)} weight example
</Heading>`).join('\n'),
    },
  },
};

const sizes: StoryFn<typeof Heading> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    Heading,
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
    <div>
      <h3>Available Sizes</h3>
      <hr>
      <div style="margin: 20px;">
        <Heading>Default size example</Heading>
        <Heading v-for="(size, index) in availableSizes"
                  :key="index"
                  :size="size"
        >
          {{ capitalizeFirstLetter(size) }} size example
        </Heading>
      </div>
    </div>
  `,
});
sizes.argTypes = {
  size: { table: { disable: true } },
  weight: { table: { disable: true } },
  default: { table: { disable: true } },
};
sizes.parameters = {
  docs: {
    source: {
      code: availableSizes.map((size) => `<Heading size="${size}"> 
  ${capitalizeFirstLetter(size)} size example
</Heading>`).join('\n'),
    },
  },
};

export {
  defaultExample,
  weights,
  sizes,
};

export default HeadingStories;
