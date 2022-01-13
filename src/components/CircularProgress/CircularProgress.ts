import type { StyleValue } from 'vue';
import { defineComponent, ref } from 'vue';

import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const availableColors = ['blue', 'brown', 'green', 'orange', 'pink', 'purple', 'red', 'yellow'];

const CircularProgress = defineComponent({
  name: 'CircularProgress',
  components: {
    Heading,
    TextParagraph,
  },
  props: {
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
      default: null,
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
      } as StyleValue;
      return [result];
    },
  },
  methods: {
    startAnimation() {
      try {
        const barAnimation = [
          { transform: 'rotate(45deg)' },
          { transform: `rotate(${45 + (this.progressPercentage * 1.8)}deg)` },
        ];
        const circleAnimation = [
          { transform: 'rotate(0deg)' },
          { transform: `rotate(${(this.progressPercentage * 1.8)}deg)` },
        ];
        const animation = this.bar.animate(barAnimation, { duration: this.animationDuration, iterations: (this.circularAnimation) ? Infinity : 1 });
        this.outsideBorder.animate(barAnimation, { duration: this.animationDuration, iterations: (this.circularAnimation) ? Infinity : 1 });
        this.insideBorder.animate(barAnimation, { duration: this.animationDuration, iterations: (this.circularAnimation) ? Infinity : 1 });
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
    const outsideBorder = ref();
    const insideBorder = ref();
    return { bar, circle, outsideBorder, insideBorder };
  },
  mounted() {
    if (!this.animate) { return; }
    this.startAnimation();
  },
});

export default CircularProgress;
