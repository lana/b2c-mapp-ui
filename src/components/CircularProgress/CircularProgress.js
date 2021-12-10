import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  Heading,
  TextParagraph,
};

const availableColors = ['blue', 'brown', 'green', 'orange', 'pink', 'purple', 'red', 'yellow'];

const props = {
  dataTestId: {
    type: String,
    default: 'progress',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
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
    const result = { transform: `rotate(${45 + (this.progressPercentage * 1.8)}deg)` };
    return result;
  },
  progressText() {
    const result = (this.description || ((this.percentage) ? `${this.percentage}%` : `${this.progress} / ${this.total}`));
    return result;
  },
  progressCircle() {
    const result = { transform: `rotate(${(this.progressPercentage * 1.8)}deg)` };
    return result;
  },
  cssVars() {
    const percentagePosition = 100 - Math.ceil(((this.progressPercentage + 1) / 2));
    const result = {
      '--progression-color-position': `${percentagePosition}%`,
    };
    return result;
  },
};

const methods = {
  startAnimation() {
    try {
      const { bar, circle, outsideBorder, insideBorder } = this.$refs;
      const barAnimation = [
        { transform: 'rotate(45deg)' },
        { transform: `rotate(${45 + (this.progressPercentage * 1.8)}deg)` },
      ];
      const circleAnimation = [
        { transform: 'rotate(0deg)' },
        { transform: `rotate(${(this.progressPercentage * 1.8)}deg)` },
      ];
      const animation = bar.animate(barAnimation, { duration: this.animationDuration, iterations: (this.circularAnimation) ? Infinity : 1 });
      outsideBorder.animate(barAnimation, { duration: this.animationDuration, iterations: (this.circularAnimation) ? Infinity : 1 });
      insideBorder.animate(barAnimation, { duration: this.animationDuration, iterations: (this.circularAnimation) ? Infinity : 1 });
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

const name = 'CircularProgress';

const CircularProgress = {
  name,
  components,
  props,
  emits,
  computed,
  methods,
  mounted,
};

export default CircularProgress;
