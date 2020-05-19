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

const beforeDestroy = function () {
  window.removeEventListener('resize', this.onWindowResize);
};

const Screen = {
  data,
  methods,
  mounted,
  beforeDestroy,
};

export default Screen;
