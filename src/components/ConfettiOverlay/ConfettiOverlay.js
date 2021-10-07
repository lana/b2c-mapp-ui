import Confetti from './Confetti.vue';

const defaultCountOfParticles = 80;
const maximumCountOfParticlesForSmoothPerformance = 200;
const colors = ['blue', 'orange', 'pink', 'purple', 'red', 'yellow'];

const components = {
  Confetti,
};

const props = {
  particles: {
    type: [Number, String],
    default: defaultCountOfParticles,
    validator: (value) => {
      const numericValue = Number.parseInt(value, 10);
      const isValid = !Number.isNaN(numericValue);
      const result = (isValid && (numericValue <= maximumCountOfParticlesForSmoothPerformance));
      return result;
    },
  },
};

const computed = {
  countOfParticles() {
    const numericValue = Number.parseInt(this.particles, 10);
    const count = (numericValue < maximumCountOfParticlesForSmoothPerformance) ? numericValue : maximumCountOfParticlesForSmoothPerformance;
    const result = [...Array(count).keys()].map((index) => ({
      id: index,
      color: colors[Math.floor(Math.random() * colors.length)],
      width: Math.random() * 10,
      height: Math.random() * 100,
    }));
    return result;
  },
};

const ConfettiOverlay = {
  components,
  props,
  computed,
};

export default ConfettiOverlay;
