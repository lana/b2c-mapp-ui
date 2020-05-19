const props = {
  dataTestId: {
    type: String,
    default: 'toggle',
  },
  value: Boolean,
  disabled: Boolean,
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
  props,
  data,
  methods,
  watch,
};

export default ToggleSwitch;
