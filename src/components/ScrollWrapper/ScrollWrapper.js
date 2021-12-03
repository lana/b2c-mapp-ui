const props = {
  dataTestId: {
    type: String,
    default: '',
  },
  position: Number,
};

const data = function () {
  return {
    lastClick: {
      x: 0,
      y: 0,
    },
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  };
};

const methods = {
  scrollToPosition() {
    if ((typeof this.position !== 'number') || !this.$refs.wrapper) { return; }
    this.$refs.wrapper.scrollTo({
      top: this.position,
    });
  },
};

const mounted = function () {
  this.scrollToPosition();
};

const name = 'ScrollWrapper';

const ScrollWrapper = {
  name,
  props,
  data,
  methods,
  mounted,
};

export default ScrollWrapper;
