import { defineComponent, nextTick, ref } from 'vue';
import ContentEditable from 'vue-contenteditable';

import CurrencyInput from '../CurrencyInput/CurrencyInput.vue';
import { escapeRegExp } from '../../lib/regexHelper';

const AmountInput = defineComponent({
  name: 'AmountInput',
  components: {
    ContentEditable,
    CurrencyInput,
  },
  props: {
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
    name: {
      type: String,
      default: 'amount-input',
    },
    errorLabel: {
      type: String,
      default: '',
    },
    readonly: Boolean,
    disabled: Boolean,
    startFocused: Boolean,
  },
  emits: ['update:modelValue', 'update:formattedValue', 'focus', 'blur', 'keypress', 'keyup', 'paste'],
  computed: {
    inputId() {
      const result = (this.id || this.name);
      return result;
    },
    currencyParts(): { currency: string, group: string, fraction: string } {
      const parts = new Intl.NumberFormat(this.locale, { style: 'currency', currency: this.currency }).formatToParts(10001.55555555555);
      const result = parts.reduce((accumulator, { type, value }) => ({ ...accumulator, [type]: value }), { currency: '', group: '', fraction: '' });
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
    currencyOptions() {
      const result = {
        currency: this.currency,
        locale: this.locale,
        currencyDisplay: 'hidden',
        distractionFree: false,
        allowNegative: false,
      };
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
      if (!this.inputValue) { return 0; }
      const result = Number(this.truncatedInputValue) || 0;
      return result;
    },
  },
  methods: {
    toggleFocus(focus: boolean) {
      this.isFocused = focus;
    },
    focusIfNeeded() {
      if (!this.$refs.content || !this.startFocused) { return; }
      this.toggleFocus(true);
      this.content.$el.focus();
    },
    blur() {
      if (!this.content) { return; }
      this.content.blur();
    },
    emitUpdateModelValueEvent() {
      this.$emit('update:modelValue', this.currencyValue);
    },
    emitFormattedEvent() {
      this.$emit('update:formattedValue', this.formattedValue);
    },
    onFocus(event: Event) {
      this.toggleFocus(true);
      this.$emit('focus', event);
    },
    onBlur(event: Event) {
      this.toggleFocus(false);
      this.$emit('blur', event);
    },
    onKeypress(event: KeyboardEvent) {
      const { keyCode } = event;
      if ((keyCode > 31 && (keyCode < 48 || keyCode > 57)) && keyCode !== 46) { event.preventDefault(); return; }
      this.$emit('keypress', event);
    },
    onKeyup(event: Event) {
      this.$emit('keyup', event);
    },
    onPaste(event: Event) {
      this.$emit('paste', event);
    },
    async fitTextContainer() {
      let inputFontSize = 48;
      this.content.$el.style.fontSize = null;
      await nextTick();
      let inputWidth = this.content.$el.offsetWidth;
      const containerWidth = this.content.$el.parentElement.offsetWidth;
      while (inputWidth > containerWidth) {
        this.content.$el.style.fontSize = `${--inputFontSize}px`;
        inputWidth = this.content.$el.offsetWidth;
        if (inputFontSize < 16) { break; }
      }
    },
  },
  setup(props) {
    const content = ref();
    const inputRef = ref();
    const isFocused = ref(false);
    const inputValue = ref(`${props.modelValue || '0'}`);
    const formattedValue = ref(`${props.modelValue || '0'}`);
    const currencyValue = ref(Number(props.modelValue || 0));
    return {
      content,
      inputRef,
      isFocused,
      inputValue,
      formattedValue,
      currencyValue,
    };
  },
  watch: {
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
      this.currencyValue = Number(this.modelValue);
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
  },
  mounted() {
    this.focusIfNeeded();
  },
});

export default AmountInput;
