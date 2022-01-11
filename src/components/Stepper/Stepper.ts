import { defineComponent } from 'vue';

import Heading from '../Heading/Heading.vue';

const Stepper = defineComponent({
  name: 'Stepper',
  components: {
    Heading,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'navigation-stepper',
    },
    title: {
      type: String,
      default: '',
    },
    hideActiveStep: Boolean,
    modelValue: {
      type: Number,
      default: 0,
    },
    countOfSteps: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    availableSteps() {
      if (!this.countOfSteps) { return []; }
      const result = Array(this.countOfSteps).fill(0).map((_step, index) => ({
        isActive: ((index === this.modelValue) && !this.hideActiveStep),
        isInactive: (index > this.modelValue), // WARNING: `Inactive` in this context is not the same thing as `!isActive`
        stepNumber: (index + 1),
      }));
      return result;
    },
  },
});

export default Stepper;
