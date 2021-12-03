import { CloseBoldIcon, WarningBoldIcon } from '@lana/b2c-mapp-ui-assets';

import TextParagraph from '../TextParagraph/TextParagraph.vue';
import CurrencyInput from '../CurrencyInput/CurrencyInput.vue';
import { sleep } from '../../lib/sleepHelper';

const components = {
  CurrencyInput,
  TextParagraph,
  CloseBoldIcon,
  WarningBoldIcon,
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
  modelValue: {
    type: [String, Number],
    default: null,
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
  helpText: String,
  hideClearButton: Boolean,
};

const emits = ['update:modelValue', 'update:formattedValue', 'focus', 'blur', 'keypress', 'keyup', 'paste'];

const data = function () {
  return {
    isFocused: false,
    isClearing: false,
    inputValue: this.modelValue,
    formattedValue: this.modelValue,
  };
};

const computed = {
  maxLengthToUse() {
    const result = (this.maxLength || this.lengthHint);
    return result;
  },
  hasLabel() {
    const result = (this.isClearing || this.showPrefix || !!this.inputValue || this.inputValue === 0 || this.readonly || this.isFocused);
    return result;
  },
  inputId() {
    const result = (this.id || this.name);
    return result;
  },
  formattedLengthHint() {
    const result = `${(this.lengthHint || '')} ${(this.lengthHintLabel || '')}`;
    return result;
  },
  errorLabelOrHelpText() {
    const result = (this.errorLabel || this.helpText || this.formattedLengthHint || '');
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
  isClearIconShowing() {
    const result = (this.inputValue && !(this.hideClearButton || this.readonly || this.disabled));
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
  emitUpdateModelValueEvent() {
    this.$emit('update:modelValue', this.inputValue);
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
  async clearValue() {
    this.isClearing = true;
    this.inputValue = null;
    this.emitUpdateModelValueEvent();
    this.blur();
    await sleep(50); // NOTE: sleep must be used here because `this.$nextTick()` is not waiting long enough in this case
    this.focus();
    this.isClearing = false;
  },
};

const watch = {
  inputValue() {
    this.emitUpdateModelValueEvent();
  },
  formattedValue() {
    this.$emit('update:formattedValue', this.formattedValue);
  },
  modelValue() {
    this.inputValue = this.modelValue;
  },
};

const mounted = function () {
  this.focusIfNeeded();
};

const CurrencyField = {
  components,
  props,
  emits,
  data,
  computed,
  methods,
  mounted,
  watch,
};

export default CurrencyField;
