import Button from '../Button/Button.vue';

const components = {
  Button,
};

const props = {
  dataTestId: {
    type: String,
    default: 'toggle',
  },
  modelValue: Boolean,
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

const emits = ['update:modelValue'];

const data = function () {
  return {
    isChecked: this.modelValue,
  };
};

const methods = {
  emitUpdateModelValueEvent() {
    this.$emit('update:modelValue', this.isChecked);
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
    this.emitUpdateModelValueEvent();
  },
  modelValue() {
    this.isChecked = this.modelValue;
  },
};

const name = 'ToggleSwitch';

const ToggleSwitch = {
  name,
  components,
  props,
  emits,
  data,
  methods,
  watch,
};

export default ToggleSwitch;
