import { CurrencyDirective } from 'vue-currency-input';

import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  TextParagraph,
};

const directives = {
  currency: CurrencyDirective,
};

const props = {
  dataTestId: {
    type: String,
    default: 'currency-input',
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
  disabled: Boolean,
  errorLabel: String,
  readonly: Boolean,
  startFocused: Boolean,
  showPrefix: Boolean,
  lengthHint: Number,
  lengthHintLabel: String,
  currency: {
    type: String,
    default: 'CLP',
  },
  locale: {
    type: String,
    default: 'es-CL',
  },
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
  currencyOptions() {
    const result = {
      currency: this.currency,
      locale: this.locale,
      distractionFree: false,
      allowNegative: false,
    };
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
  blur() {
    if (!this.$refs.input) { return; }
    this.$refs.input.blur();
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
  onKeyup(event) {
    this.$emit('keyup', event);
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

const CurrencyField = {
  components,
  directives,
  props,
  data,
  computed,
  methods,
  mounted,
  watch,
};

export default CurrencyField;
