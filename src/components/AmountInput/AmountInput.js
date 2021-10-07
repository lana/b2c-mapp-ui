import { nextTick } from 'vue';
import ContentEditable from 'vue-contenteditable';

import CurrencyInput from '../CurrencyInput/CurrencyInput.vue';
import { escapeRegExp } from '../../lib/regexHelper';

const components = {
  ContentEditable,
  CurrencyInput,
};

const props = {
  dataTestId: {
    type: String,
    default: 'amount-input',
  },
  modelValue: {
    type: [String, Number],
    default: 0,
  },
  currency: {
    type: [String],
    default: 'MXN',
  },
  locale: {
    type: [String],
    default: 'es-MX',
  },
  id: {
    type: String,
    default: 'amount-input-id',
  },
  name: String,
  errorLabel: String,
  readonly: Boolean,
  disabled: Boolean,
  startFocused: Boolean,
};

const data = function () {
  const currencyOptions = {
    currency: this.currency,
    locale: this.locale,
    currencyDisplay: 'hidden',
    distractionFree: false,
    allowNegative: false,
  };
  return {
    isFocused: false,
    inputValue: `${this.modelValue || '0'}`,
    formattedValue: `${this.modelValue || '0'}`,
    currencyValue: Number(this.modelValue || 0),
    currencyOptions,
  };
};

const emits = ['update:modelValue', 'update:formattedValue', 'focus', 'blur', 'keypress', 'keyup', 'paste'];

const computed = {
  inputId() {
    const result = (this.id || this.name);
    return result;
  },
  currencyParts() {
    const parts = new Intl.NumberFormat(this.locale, { style: 'currency', currency: this.currency }).formatToParts(10001.55555555555);
    const result = parts.reduce((accumulator, { type, value }) => ({ ...accumulator, [type]: value }), {});
    return result;
  },
  currencySymbol() {
    const { currency: result } = this.currencyParts;
    return result;
  },
  currencyGroup() {
    const { group: result } = this.currencyParts;
    return result;
  },
  currencyPrecision() {
    const { fraction = '' } = this.currencyParts;
    const result = fraction.length;
    return result;
  },
  truncatedInputValue() {
    if (!this.inputValue) { return '0'; }
    const symbolRegex = new RegExp(escapeRegExp(this.currencySymbol));
    const groupRegex = new RegExp(escapeRegExp(this.currencyGroup), 'g');
    const result = this.inputValue.replace(symbolRegex, '').replace(groupRegex, '');
    return result;
  },
  numericInputValue() {
    if (!this.inputValue) { return '0'; }
    const result = Number(this.truncatedInputValue) || 0;
    return result;
  },
};

const methods = {
  toggleFocus(focus) {
    this.isFocused = focus;
  },
  focusIfNeeded() {
    if (!this.$refs.content || !this.startFocused) { return; }
    this.toggleFocus(true);
    this.$refs.content.$el.focus();
  },
  blur() {
    if (!this.$refs.input) { return; }
    this.$refs.input.blur();
  },
  emitUpdateModelValueEvent() {
    this.$emit('update:modelValue', this.currencyValue);
  },
  emitFormattedEvent() {
    this.$emit('update:formattedValue', this.formattedValue);
  },
  onFocus(event) {
    this.toggleFocus(true);
    this.$emit('focus', event);
  },
  onBlur(event) {
    this.toggleFocus(false);
    this.$emit('blur', event);
  },
  onKeypress(event) {
    const { keyCode } = event;
    if ((keyCode > 31 && (keyCode < 48 || keyCode > 57)) && keyCode !== 46) { event.preventDefault(); return; }
    this.$emit('keypress', event);
  },
  onKeyup(event) {
    this.$emit('keyup', event);
  },
  onPaste(event) {
    this.$emit('paste', event);
  },
  async fitTextContainer() {
    let inputFontSize = 48;
    this.$refs.content.$el.style.fontSize = null;
    await nextTick();
    let inputWidth = this.$refs.content.$el.offsetWidth;
    const containerWidth = this.$refs.content.$el.parentElement.offsetWidth;
    while (inputWidth > containerWidth) {
      this.$refs.content.$el.style.fontSize = `${--inputFontSize}px`;
      inputWidth = this.$refs.content.$el.offsetWidth;
      if (inputFontSize < 16) { break; }
    }
  },
};

const watch = {
  inputValue() {
    this.fitTextContainer();
    if (!this.isFocused) { return; }
    this.currencyValue = this.numericInputValue;
  },
  currencyValue() {
    this.emitUpdateModelValueEvent();
    if (this.isFocused) { return; }
    this.inputValue = `${this.currencyValue}`;
  },
  formattedValue() {
    this.emitFormattedEvent();
  },
  modelValue() {
    if (!this.modelValue) { return; }
    this.currencyValue = this.modelValue;
    if (this.isFocused) { return; }
    this.inputValue = this.formattedValue;
  },
  isFocused() {
    if (this.disabled || this.readonly) { return; }
    this.currencyValue = this.numericInputValue;
    if (!this.isFocused) {
      if (!this.numericInputValue) {
        this.currencyValue = 0;
      }
      this.inputValue = `${this.formattedValue}`;
      return;
    }
    this.inputValue = `${this.numericInputValue}`;
  },
};

const mounted = function () {
  this.focusIfNeeded();
};

const AmountInput = {
  components,
  props,
  emits,
  computed,
  data,
  methods,
  watch,
  mounted,
};

export default AmountInput;
