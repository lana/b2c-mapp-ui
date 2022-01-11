import { defineComponent } from 'vue';

const Wrapper = defineComponent({
  name: 'Wrapper',
  props: {
    dataTestId: {
      type: String,
      default: '',
    },
    modal: Boolean,
  },
});

export default Wrapper;
