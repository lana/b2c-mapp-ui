import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  TextParagraph,
};

const props = {
  dataTestId: {
    type: String,
    default: 'field',
  },
  maxLength: {
    type: Number,
    default: 100,
  },
  value: {
    type: String,
    default: '',
  },
  id: String,
  name: String,
  label: String,
  type: String,
  disabled: Boolean,
  errorLabel: String,
  readonly: Boolean,
  startFocused: Boolean,
  showPrefix: Boolean,
  lengthHint: Number,
  lengthHintLabel: String,
};

const data = function () {
  return {
    isFocused: false,
    inputValue: this.value,
  };
};

const computed = {
  maxLengthToUse() {
    const result = (this.maxLength || this.lengthHint);
    return result;
  },
  hasLabel() {
    const result = (this.showPrefix || !!this.inputValue || this.readonly || this.isFocused);
    return result;
  },
  inputId() {
    const result = (this.id || this.name);
    return result;
  },
  errorLabelOrPlaceholder() {
    const result = (this.errorLabel || this.label || '');
    return result;
  },
};

const methods = {
  toggleFocus() {
    this.isFocused = !this.isFocused;
  },
  focusIfNeeded() {
    if (!(this.startFocused && this.$refs.input)) { return; }
    this.toggleFocus();
    this.$refs.input.focus();
  },
  emitInputEvent() {
    this.$emit('input', this.inputValue);
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
  onPaste(event) {
    this.$emit('paste', event);
  },
  focus() {
    this.$refs.input.focus();
  },
};

const watch = {
  inputValue() {
    this.emitInputEvent();
  },
  value() {
    this.inputValue = this.value;
  },
};

const mounted = function () {
  this.focusIfNeeded();
};

const FormField = {
  components,
  props,
  data,
  computed,
  methods,
  mounted,
  watch,
};

export default FormField;
