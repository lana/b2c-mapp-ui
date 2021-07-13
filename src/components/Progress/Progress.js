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
    default: '',
    validator(value) { return (!value || availableColors.includes(value)); },
  },
};

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

const Progress = {
  components,
  props,
  computed,
};

export default Progress;
