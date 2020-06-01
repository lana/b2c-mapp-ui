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
  disabled: Boolean,
  id: String,
  name: String,
};

const methods = {
  onClick(event) {
    this.$emit('click', event);
  },
};

const WrappedButton = {
  components,
  props,
  methods,
};

export {
  availableTypes,
};

export default WrappedButton;
