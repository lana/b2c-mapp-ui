import { defineComponent } from 'vue';

import Confetti from './Confetti.vue';

const defaultCountOfParticles = 80;
const maximumCountOfParticlesForSmoothPerformance = 200;
const colors = ['blue', 'orange', 'pink', 'purple', 'red', 'yellow'];

const ConfettiOverlay = defineComponent({
  name: 'ConfettiOverlay',
  components: {
    Confetti,
  },
  props: {
    particles: {
      type: [Number, String],
      default: defaultCountOfParticles,
      validator: (value: number | string) => {
        const numericValue = Number.parseInt(`${value}`, 10);
        const isValid = !Number.isNaN(numericValue);
        const result = (isValid && (numericValue <= maximumCountOfParticlesForSmoothPerformance));
        return result;
      },
    },
  },
  computed: {
    countOfParticles() {
      const numericValue = Number.parseInt(`${this.particles}`, 10);
      const count = (numericValue < maximumCountOfParticlesForSmoothPerformance) ? numericValue : maximumCountOfParticlesForSmoothPerformance;
      const result = Array(count).fill(0).map((_, index) => ({
        id: index,
        color: colors[Math.floor(Math.random() * colors.length)],
        width: Math.random() * 10,
        height: Math.random() * 100,
      }));
      return result;
    },
  },
});

export default ConfettiOverlay;
