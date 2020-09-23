import { ExpandSmallIcon, WarningBoldIcon } from '@lana/b2c-mapp-ui-assets';

import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  TextParagraph,
  ExpandSmallIcon,
  WarningBoldIcon,
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
  readonly: Boolean,
  errorLabel: String,
  helpText: String,
};

const data = function () {
  return {
    selectedValue: this.value,
    isFocused: false,
  };
};

const computed = {
  errorLabelOrHelpText() {
    const result = (this.errorLabel || this.helpText);
    return result;
  },
  hasEmptyOption() {
    if (!(this.options && this.options.length)) { return; }
    const hasEmptyValue = ({ value }) => !value;
    const result = this.options.some(hasEmptyValue);
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
