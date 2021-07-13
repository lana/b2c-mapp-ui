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

const LinearProgress = {
  props,
  computed,
};

export default LinearProgress;
