import { ExpandSmallIcon } from '@lana/b2c-mapp-ui-assets/dist/index';

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
};

const data = function () {
  return {
    selectedValue: this.value,
    isFocused: false,
  };
};

const methods = {
  emitInputEvent() {
    this.$emit('input', this.selectedValue);
  },
  toggleFocus() {
    this.isFocused = !this.isFocused;
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
  data,
  methods,
  watch,
};

export default SelectBox;
