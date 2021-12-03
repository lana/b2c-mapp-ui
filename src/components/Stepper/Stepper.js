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
  modelValue: Number,
  countOfSteps: Number,
};

const computed = {
  availableSteps() {
    if (!this.countOfSteps) { return []; }
    const result = [...Array(this.countOfSteps).keys()].map((step, index) => ({
      isActive: ((index === this.modelValue) && !this.hideActiveStep),
      isInactive: (index > this.modelValue), // WARNING: `Inactive` in this context is not the same thing as `!isActive`
      stepNumber: (index + 1),
    }));
    return result;
  },
};

const name = 'Stepper';

const Stepper = {
  name,
  components,
  props,
  computed,
};

export default Stepper;
