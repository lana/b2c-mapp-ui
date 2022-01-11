import { defineComponent } from 'vue';

const Timeline = defineComponent({
  name: 'Timeline',
  props: {
    dataTestId: {
      type: String,
      default: 'timeline',
    },
  },
});

export default Timeline;
