import { defineComponent, ref } from 'vue';

const ScrollWrapper = defineComponent({
  name: 'ScrollWrapper',
  props: {
    dataTestId: {
      type: String,
      default: '',
    },
    position: {
      type: Number,
      default: null,
    },
  },
  methods: {
    scrollToPosition() {
      if ((typeof this.position !== 'number') || !this.wrapper) { return; }
      this.wrapper.scrollTo({
        top: this.position,
      });
    },
  },
  setup() {
    const wrapper = ref();
    const lastClick = ref({
      x: 0,
      y: 0,
    });
    const viewport = ref({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    return {
      wrapper,
      lastClick,
      viewport,
    };
  },
  mounted() {
    this.scrollToPosition();
  },
});

export default ScrollWrapper;
