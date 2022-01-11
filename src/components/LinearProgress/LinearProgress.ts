import { defineComponent, ref } from 'vue';

const availableColors = ['blue', 'brown', 'green', 'orange', 'pink', 'purple', 'red', 'yellow'];

const LinearProgress = defineComponent({
  name: 'LinearProgress',
  props: {
    dataTestId: {
      type: String,
      default: 'linear-progress',
    },
    progress: {
      type: Number,
      default: null,
    },
    total: {
      type: Number,
      default: null,
    },
    percentage: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: 'blue',
      validator(value: string) { return (!value || availableColors.includes(value)); },
    },
    animate: Boolean,
    animationDuration: {
      type: Number,
      default: 1000,
    },
    circularAnimation: Boolean,
  },
  emits: ['animationend', 'error'],
  computed: {
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
  },
  methods: {
    startAnimation() {
      try {
        const barAnimation = [
          { width: 0 },
          { width: `${this.progressPercentage}%` },
        ];
        const circleAnimation = [
          { left: 0 },
          { left: `${this.progressPercentage}%` },
        ];
        const animation = this.bar.animate(barAnimation, { duration: this.animationDuration, iterations: (this.circularAnimation) ? Infinity : 1 });
        this.circle.animate(circleAnimation, { duration: this.animationDuration, iterations: (this.circularAnimation) ? Infinity : 1 });
        animation.onfinish = this.emitEventFinish;
      } catch (error) {
        this.$emit('error', error);
      }
    },
    emitEventFinish(event: Event) {
      this.$emit('animationend', event);
    },
  },
  setup() {
    const bar = ref();
    const circle = ref();
    return { bar, circle };
  },
  mounted() {
    if (!this.animate) { return; }
    this.startAnimation();
  },
});

export default LinearProgress;
