const availableColors = ['blue', 'brown', 'green', 'orange', 'pink', 'purple', 'red', 'yellow'];

const props = {
  dataTestId: {
    type: String,
    default: 'linear-progress',
  },
  progress: Number,
  total: Number,
  percentage: Number,
  color: {
    type: String,
    default: 'blue',
    validator(value) { return (!value || availableColors.includes(value)); },
  },
  animate: Boolean,
  animationDuration: {
    type: Number,
    default: 1000,
  },
  circularAnimation: Boolean,
};

const emits = ['animationend', 'error'];

const computed = {
  progressPercentage() {
    const result = (this.percentage || ((this.progress / this.total) * 100) || 0);
    switch (true) {
      case result < 0:
        return 0;
      case result > 100:
        return 100;
      default:
        return result;
    }
  },
  progressStyle() {
    const result = {
      width: `${this.progressPercentage}%`,
    };
    return result;
  },
  circleStyle() {
    const result = {
      left: `${this.progressPercentage}%`,
    };
    return result;
  },
};

const methods = {
  startAnimation() {
    try {
      const { bar, circle } = this.$refs;
      const barAnimation = [
        { width: 0 },
        { width: `${this.progressPercentage}%` },
      ];
      const circleAnimation = [
        { left: 0 },
        { left: `${this.progressPercentage}%` },
      ];
      const animation = bar.animate(barAnimation, { duration: this.animationDuration, iterations: (this.circularAnimation) ? Infinity : 1 });
      circle.animate(circleAnimation, { duration: this.animationDuration, iterations: (this.circularAnimation) ? Infinity : 1 });
      animation.onfinish = this.emitEventFinish;
    } catch (error) {
      this.$emit('error', error);
    }
  },
  emitEventFinish(event) {
    this.$emit('animationend', event);
  },
};

const mounted = function () {
  if (!this.animate) { return; }
  this.startAnimation();
};

const LinearProgress = {
  props,
  emits,
  computed,
  methods,
  mounted,
};

export default LinearProgress;
