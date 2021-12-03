const emits = ['keyboardFocus', 'keyboardBlur'];

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
  recordClick({ clientX, clientY }) {
    this.lastClick.x = clientX;
    this.lastClick.y = clientY;
  },
  onWindowResize({ target: { innerHeight: screenHeight } }) {
    const payload = {
      screenHeight,
      viewport: this.viewport,
      lastClick: this.lastClick,
    };
    if (this.viewport.height > screenHeight) {
      this.$emit('keyboardFocus', payload);
      return;
    }
    this.$emit('keyboardBlur', payload);
  },
};

const mounted = function () {
  window.addEventListener('resize', this.onWindowResize);
};

const beforeUnmount = function () {
  window.removeEventListener('resize', this.onWindowResize);
};

const Screen = {
  emits,
  data,
  methods,
  mounted,
  beforeUnmount,
};

export default Screen;
