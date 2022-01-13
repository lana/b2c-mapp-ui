import { defineComponent } from 'vue';

const availableSizes = [
  'xxxl',
  'xxl',
  'xl',
  'large',
  'medium',
  'small',
  'xsmall',
];

const availableWeights = [
  'normal',
  'medium',
  'semibold',
];

const Heading = defineComponent({
  name: 'Heading',
  props: {
    dataTestId: {
      type: String,
      default: 'heading',
    },
    weight: {
      type: String,
      default: 'normal',
      validator(value: string) { return (!value || availableWeights.includes(value)); },
    },
    size: {
      type: String,
      default: 'xl',
      validator(value: string) { return (!value || availableSizes.includes(value)); },
    },
  },
});

export {
  availableSizes,
  availableWeights,
};

export default Heading;
