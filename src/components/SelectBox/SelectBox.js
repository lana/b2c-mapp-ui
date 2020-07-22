import { ExpandSmallIcon } from '@lana/b2c-mapp-ui-assets';

const components = {
  ExpandSmallIcon,
};

const props = {
  dataTestId: {
    type: String,
    default: 'selector',
  },
  options: {
    type: Array,
    default: () => [],
  },
  value: String,
  label: String,
  id: String,
  name: String,
  disabled: Boolean,
  errorLabel: String,
};

const data = function () {
  return {
    selectedValue: this.value,
    isFocused: false,
  };
};

const computed = {
  labelToShow() {
    const result = (this.errorLabel || this.label);
    return result;
  },
};

const methods = {
  emitInputEvent() {
    this.$emit('input', this.selectedValue);
  },
  toggleFocus() {
    this.isFocused = !this.isFocused;
  },
  onFocus(event) {
    this.toggleFocus();
    this.$emit('focus', event);
  },
  onBlur(event) {
    this.toggleFocus();
    this.$emit('blur', event);
  },
  onKeypress(event) {
    this.$emit('keypress', event);
  },
  onKeyup(event) {
    this.$emit('keyup', event);
  },
  onPaste(event) {
    this.$emit('paste', event);
  },
  focus() {
    if (!this.$refs.input) { return; }
    this.$refs.input.focus();
  },
  blur() {
    if (!this.$refs.input) { return; }
    this.$refs.input.blur();
  },
};

const watch = {
  selectedValue() {
    this.emitInputEvent();
  },
  value() {
    this.selectedValue = this.value;
  },
};

const SelectBox = {
  components,
  props,
  computed,
  data,
  methods,
  watch,
};

export default SelectBox;
