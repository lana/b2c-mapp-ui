import Heading from '../Heading/Heading.vue';

const components = {
  Heading,
};

const props = {
  dataTestId: {
    type: String,
    default: 'navigation-stepper',
  },
  title: {
    type: String,
    default: '',
  },
  hideActiveStep: Boolean,
  value: Number,
  countOfSteps: Number,
};

const computed = {
  availableSteps() {
    if (!this.countOfSteps) { return []; }
    const result = [...Array(this.countOfSteps).keys()].map((step, index) => ({
      isActive: ((index === this.value) && !this.hideActiveStep),
      isInactive: (index > this.value), // WARNING: `Inactive` in this context is not the same thing as `!isActive`
      stepNumber: (index + 1),
    }));
    return result;
  },
};

const Stepper = {
  components,
  props,
  computed,
};

export default Stepper;
