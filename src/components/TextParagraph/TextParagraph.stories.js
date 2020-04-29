import { withKnobs, select } from '@storybook/addon-knobs';

import TextParagraph from './TextParagraph.vue';
import { availableSizes, availableColors, availableWeights } from './TextParagraph';

const capitalizeFirstLetter = (originalText) => `${originalText.charAt(0).toUpperCase()}${originalText.slice(1)}`; // TODO JASON: Refactor this into a util library

const TextParagraphStories = {
  component: TextParagraph,
  title: 'TextParagraph',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    TextParagraph,
  },
  props: {
    color: {
      default: select('Color', availableColors, 'black-500'),
    },
    weight: {
      default: select('Weight', availableWeights, 'medium'),
    },
    size: {
      default: select('Size', availableSizes, 'medium'),
    },
  },
  template: `
    <div>
      <TextParagraph :weight="weight"
                     :color="color"
                     :size="size"
      >
        Example Text
      </TextParagraph>
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

const weights = () => ({
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
    <div>
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

const sizes = () => ({
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
    <div>
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

const colors = () => ({
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
    <div>
      <TextParagraph>Default size example</TextParagraph>
      <TextParagraph v-for="(color, index) in availableColors"
                     :key="index"
                     :color="color"
      >
        {{ capitalizeFirstLetter(color) }} color example
      </TextParagraph>
    </div>
  `,
});

export {
  defaultExample,
  colors,
  sizes,
  weights,
};

export default TextParagraphStories;
