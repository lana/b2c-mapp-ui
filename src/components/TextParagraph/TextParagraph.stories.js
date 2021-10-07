import TextParagraph from './TextParagraph.vue';
import { availableSizes, availableColors, availableWeights } from './TextParagraph';
import { capitalizeFirstLetter } from '../../lib/textHelper';
import { createOptionalDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createOptionalDeviceDecorator('<strong>TextParagraph:</strong>&nbsp;A text view that represents a paragraph.');

const TextParagraphStories = {
  component: TextParagraph,
  title: 'Components/TextParagraph',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    color: '',
    weight: '',
    size: '',
    default: 'Example Text',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    color: { control: 'select', name: 'Color', options: [...availableColors, ''] },
    weight: { control: 'select', name: 'Weight', options: [...availableWeights, ''] },
    size: { control: 'select', name: 'Size', options: [...availableSizes, ''] },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    TextParagraph,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
    <TextParagraph :weight="weight"
                   :color="color"
                   :size="size"
    >
      <RenderString :string="defaultSlot" v-if="defaultSlot" />
    </TextParagraph>`,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<TextParagraph :weight="weight"
               :color="color"
               :size="size"
>
  Example Text
</TextParagraph>      
`,
    },
  },
};

const examples = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    TextParagraph,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <TextParagraph :weight="weight"
                      :color="color"
                      :size="size"
      >
        Example with emoji: 🍒
      </TextParagraph>
      <TextParagraph class="foo"
                      :weight="weight"
                      :color="color"
                      :size="size"
      >
        Example Text with a custom class
      </TextParagraph>
    </div>
  `,
});
examples.args = {
  device: '',
};
examples.argTypes = {
  device: { table: { disable: true } },
  color: { table: { disable: true } },
  weight: { table: { disable: true } },
  size: { table: { disable: true } },
  default: { table: { disable: true } },
};
examples.parameters = {
  docs: {
    source: {
      code: `
<div style="margin: 10px 50px 10px 50px;">
  <TextParagraph :weight="weight"
                 :color="color"
                 :size="size"
  >
    Example with emoji: 🍒
  </TextParagraph>
  <TextParagraph class="foo"
                 :weight="weight"
                 :color="color"
                 :size="size"
  >
    Example Text with a custom class
  </TextParagraph>
</div>`,
    },
  },
};

const weights = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    TextParagraph,
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
      <TextParagraph>Default weight example</TextParagraph>
      <TextParagraph v-for="(weight, index) in availableWeights"
                     :key="index"
                     :weight="weight"
      >
        {{ capitalizeFirstLetter(weight) }} weight example
      </TextParagraph>
    </div>
  `,
});
weights.args = {
  device: '',
};
weights.argTypes = {
  device: { table: { disable: true } },
  color: { table: { disable: true } },
  weight: { table: { disable: true } },
  size: { table: { disable: true } },
  default: { table: { disable: true } },
};
weights.parameters = {
  docs: {
    source: {
      code: availableWeights.map((weight) => `
<TextParagraph weight="${weight}">
  ${capitalizeFirstLetter(weight)} weight example
</TextParagraph>`).join(''),
    },
  },
};

const sizes = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    TextParagraph,
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
      <TextParagraph>Default size example</TextParagraph>
      <TextParagraph v-for="(size, index) in availableSizes"
                     :key="index"
                     :size="size"
      >
        {{ capitalizeFirstLetter(size) }} size example
      </TextParagraph>
    </div>
  `,
});
sizes.args = {
  device: '',
};
sizes.argTypes = {
  device: { table: { disable: true } },
  color: { table: { disable: true } },
  weight: { table: { disable: true } },
  size: { table: { disable: true } },
  default: { table: { disable: true } },
};
sizes.parameters = {
  docs: {
    source: {
      code: availableSizes.map((size) => `
<TextParagraph size="${size}">
  ${capitalizeFirstLetter(size)} size example
</TextParagraph>`).join(''),
    },
  },
};

const colors = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    TextParagraph,
  },
  data() {
    return {
      availableColors,
    };
  },
  methods: {
    capitalizeFirstLetter,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <TextParagraph>Default color example</TextParagraph>
      <TextParagraph v-for="(color, index) in availableColors"
                     :key="index"
                     :color="color"
      >
        {{ capitalizeFirstLetter(color) }} color example
      </TextParagraph>
    </div>
  `,
});
colors.args = {
  device: '',
};
colors.argTypes = {
  device: { table: { disable: true } },
  color: { table: { disable: true } },
  weight: { table: { disable: true } },
  size: { table: { disable: true } },
  default: { table: { disable: true } },
};
colors.parameters = {
  docs: {
    source: {
      code: availableColors.map((color) => `
<TextParagraph color="${color}">
  ${capitalizeFirstLetter(color)} color example
</TextParagraph>`).join(''),
    },
  },
};

export {
  defaultExample,
  examples,
  colors,
  sizes,
  weights,
};

export default TextParagraphStories;
