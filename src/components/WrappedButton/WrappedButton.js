import Button from '../Button/Button.vue';

const components = {
  Button,
};

const availableTypes = [
  'secondary',
];

const props = {
  dataTestId: {
    type: String,
    default: 'button-wrapped',
  },
  type: {
    type: String,
    default: '',
    validator(value) { return (!value || availableTypes.includes(value)); },
  },
  href: String,
  loading: Boolean,
  loadingText: {
    type: String,
    default: 'Cargando...',
  },
  disabled: Boolean,
  debounce: {
    type: Boolean,
    default: false,
  },
  debounceDelay: Number,
  id: String,
  name: String,
};

const emits = ['click'];

const methods = {
  onClick(event) {
    this.$emit('click', event);
  },
};

const WrappedButton = {
  components,
  props,
  emits,
  methods,
};

export {
  availableTypes,
};

export default WrappedButton;
