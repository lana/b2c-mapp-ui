import Button from '../Button/Button.vue';

const components = {
  Button,
};

const props = {
  dataTestId: {
    type: String,
    default: 'toggle',
  },
  value: Boolean,
  disabled: Boolean,
  buttons: Boolean,
  trueButtonLabel: {
    type: String,
    default: '',
  },
  falseButtonLabel: {
    type: String,
    default: '',
  },
};

const data = function () {
  return {
    isChecked: this.value,
  };
};

const methods = {
  emitInputEvent() {
    this.$emit('input', this.isChecked);
  },
  uncheck() {
    this.isChecked = false;
  },
  check() {
    this.isChecked = true;
  },
};

const watch = {
  isChecked() {
    this.emitInputEvent();
  },
  value() {
    this.isChecked = this.value;
  },
};

const ToggleSwitch = {
  components,
  props,
  data,
  methods,
  watch,
};

export default ToggleSwitch;
