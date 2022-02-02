import { defineComponent } from 'vue';

const Steps = defineComponent({
  name: 'Steps',
  props: {
    dataTestId: {
      type: String,
      default: 'steps',
    },
  },
});

export default Steps;
