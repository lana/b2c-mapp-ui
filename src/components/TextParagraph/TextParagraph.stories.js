import { withKnobs, select } from '@storybook/addon-knobs';

import TextParagraph from './TextParagraph.vue';
import { availableSizes, availableColors, availableWeights } from './TextParagraph';
import { capitalizeFirstLetter } from '../../lib/textHelper';

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
      default: select('Color', [...availableColors, ''], ''),
    },
    weight: {
      default: select('Weight', [...availableWeights, ''], ''),
    },
    size: {
      default: select('Size', [...availableSizes, ''], ''),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>TextParagraph:</strong>&nbsp;A text view that represents a paragraph.</h2>
      <hr>
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

export {
  defaultExample,
  colors,
  sizes,
  weights,
};

export default TextParagraphStories;
