import { defineComponent } from 'vue';

const availableWeights = [
  'bold',
  'medium',
  'strong',
];

const availableSizes = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xl',
  'xxl',
  'xxxl',
];

const availableColors = [
  'black-500',
  'black-700',
  'blue-500',
  'blue-700',
  'brown-500',
  'brown-700',
  'green-500',
  'green-700',
  'purple-500',
  'purple-700',
  'red-500',
  'red-700',
  'yellow-500',
  'yellow-700',
];

const TextParagraph = defineComponent({
  name: 'TextParagraph',
  props: {
    size: {
      type: String,
      default: '',
      validator(value: string) { return (!value || availableSizes.includes(value)); },
    },
    color: {
      type: String,
      default: '',
      validator(value: string) { return (!value || availableColors.includes(value)); },
    },
    weight: {
      type: String,
      default: '',
      validator(value: string) { return (!value || availableWeights.includes(value)); },
    },
    dataTestId: {
      type: String,
      default: 'text',
    },
  },
});

export {
  availableWeights,
  availableColors,
  availableSizes,
};

export default TextParagraph;
