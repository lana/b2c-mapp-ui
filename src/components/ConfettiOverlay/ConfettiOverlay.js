const defaultCountOfParticles = 80;
const maximumCountOfParticlesForSmoothPerformance = 200;

const props = {
  particles: {
    type: [Number, String],
    default: defaultCountOfParticles,
    validator: (value) => {
      const numericValue = Number.parseInt(value, 10);
      const isValid = !Number.isNaN(numericValue);
      return (isValid && numericValue <= maximumCountOfParticlesForSmoothPerformance);
    },
  },
};

const computed = {
  countOfParticles() {
    const numericValue = Number.parseInt(this.particles, 10);
    const result = (numericValue < maximumCountOfParticlesForSmoothPerformance) ? numericValue : maximumCountOfParticlesForSmoothPerformance;
    return result;
  },
};

const ConfettiOverlay = {
  props,
  computed,
};

export default ConfettiOverlay;
