import { CurrencyDirective, getValue, setValue, parse } from 'vue-currency-input';
import ContentEditable from 'vue-contenteditable/src/contenteditable.vue';

import { escapeRegExp } from '../../lib/regexHelper';

const components = {
  ContentEditable,
};

const directives = {
  currency: CurrencyDirective,
};

const props = {
  dataTestId: {
    type: String,
    default: 'amount-input',
  },
  value: {
    type: [String, Number],
    default: '0',
  },
  currency: {
    type: [String],
    default: 'MXN',
  },
  locale: {
    type: [String],
    default: 'es-MX',
  },
  decimal: {
    type: Number,
    default: 2,
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
  return {
    isFocused: false,
    inputValue: `${this.value || 0}`,
    currencyValue: `${this.value || 0}`,
  };
};

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
    const result = `${Number(this.truncatedInputValue) || 0}`;
    return result;
  },
  currencyOptions() {
    const result = {
      currency: null,
      precision: {
        min: 0,
        max: this.currencyPrecision,
      },
      locale: this.locale,
      distractionFree: false,
      allowNegative: false,
    };
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
  emitInputEvent() {
    this.$emit('input', this.currencyValue);
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
  getUnformattedValue() {
    const result = getValue(this.$refs.input);
    return result;
  },
  async fitTextContainer() {
    let inputFontSize = 48;
    this.$refs.content.$el.style.fontSize = null;
    await this.$nextTick();
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
    setValue(this.$refs.input, parse(this.numericInputValue));
  },
  currencyValue() {
    this.emitInputEvent();
    if (!this.isFocused) {
      this.inputValue = this.currencyValue;
    }
  },
  value() {
    if (!this.value) { return; }
    setValue(this.$refs.input, parse(this.value || '0'));
    if (this.isFocused) { return; }
    this.inputValue = this.currencyValue;
  },
  isFocused() {
    if (this.disabled || this.readonly) { return; }
    if (!this.isFocused) {
      if (!parse(this.numericInputValue)) {
        this.currencyValue = '0';
      }
      this.inputValue = this.currencyValue;
      return;
    }
    this.inputValue = `${parse(this.numericInputValue)}`;
  },
};

const mounted = function () {
  this.focusIfNeeded();
};

const AmountInput = {
  components,
  directives,
  props,
  computed,
  data,
  methods,
  watch,
  mounted,
};

export default AmountInput;
