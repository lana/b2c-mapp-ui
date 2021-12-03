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

const props = {
  dataTestId: {
    type: String,
    default: 'heading',
  },
  weight: {
    type: String,
    default: 'normal',
    validator(value) { return (!value || availableWeights.includes(value)); },
  },
  size: {
    type: String,
    default: 'xl',
    validator(value) { return (!value || availableSizes.includes(value)); },
  },
};

const name = 'Heading';

const Heading = {
  name,
  props,
};

export {
  availableSizes,
  availableWeights,
};

export default Heading;
