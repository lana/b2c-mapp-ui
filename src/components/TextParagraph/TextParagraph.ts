import type { PropType } from 'vue';
import { defineComponent } from 'vue';

enum TextWeight {
  'bold' = 'bold',
  'medium' = 'medium',
  'strong' = 'strong',
}

const getAvailableWeights = () => Object.keys(TextWeight);

enum TextSize {
  'xsmall' = 'xsmall',
  'small' = 'small',
  'medium' = 'medium',
  'large' = 'large',
  'xl' = 'xl',
  'xxl' = 'xxl',
  'xxxl' = 'xxxl',
}

const getAvailableSizes = () => Object.keys(TextSize);

enum TextColor {
  'black-500' = 'black-500',
  'black-700' = 'black-700',
  'blue-500' = 'blue-500',
  'blue-700' = 'blue-700',
  'brown-500' = 'brown-500',
  'brown-700' = 'brown-700',
  'green-500' = 'green-500',
  'green-700' = 'green-700',
  'purple-500' = 'purple-500',
  'purple-700' = 'purple-700',
  'red-500' = 'red-500',
  'red-700' = 'red-700',
  'yellow-500' = 'yellow-500',
  'yellow-700' = 'yellow-700',
}
const getAvailableColors = () => Object.keys(TextColor);

const TextParagraph = defineComponent({
  name: 'TextParagraph',
  props: {
    size: {
      type: String as PropType<TextSize>,
      default: '',
      validator: (value: TextSize) => (!value || !!getAvailableSizes().includes(value)),
    },
    color: {
      type: String as PropType<TextColor>,
      default: '',
      validator: (value: TextColor) => (!value || !!getAvailableColors().includes(value)),
    },
    weight: {
      type: String as PropType<TextWeight>,
      default: '',
      validator: (value: TextWeight) => (!value || !!getAvailableWeights().includes(value)),
    },
    dataTestId: {
      type: String,
      default: 'text',
    },
  },
});

export type {
  TextWeight,
  TextColor,
  TextSize,
};
export {
  getAvailableWeights,
  getAvailableColors,
  getAvailableSizes,
};

export default TextParagraph;
