import { CloseBoldIcon, WarningBoldIcon } from '@lana/b2c-mapp-ui-assets';
import { defineComponent, ref } from 'vue';

import TextParagraph from '../TextParagraph/TextParagraph.vue';
import CurrencyInput from '../CurrencyInput/CurrencyInput.vue';
import { sleep } from '../../lib/sleepHelper';

const CurrencyField = defineComponent({
  name: 'CurrencyField',
  components: {
    CurrencyInput,
    TextParagraph,
    CloseBoldIcon,
    WarningBoldIcon,
  },
  props: {
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
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    errorLabel: {
      type: String,
      default: '',
    },
    readonly: Boolean,
    startFocused: Boolean,
    showPrefix: Boolean,
    lengthHint: {
      type: Number,
      default: null,
    },
    lengthHintLabel: {
      type: String,
      default: '',
    },
    currency: {
      type: String,
      default: 'CLP',
    },
    locale: {
      type: String,
      default: 'es-CL',
    },
    helpText: {
      type: String,
      default: '',
    },
    hideClearButton: Boolean,
  },
  emits: ['update:modelValue', 'update:formattedValue', 'focus', 'blur', 'keypress', 'keyup', 'paste'],
  computed: {
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
  },
  methods: {
    toggleFocus() {
      this.isFocused = !this.isFocused;
    },
    focusIfNeeded() {
      if (!(this.startFocused && this.input)) { return; }
      this.toggleFocus();
      this.input.focus();
    },
    blur() {
      if (!this.input) { return; }
      this.input.blur();
    },
    emitUpdateModelValueEvent() {
      this.$emit('update:modelValue', this.inputValue);
    },
    onFocus(event: Event) {
      this.toggleFocus();
      this.$emit('focus', event);
    },
    onBlur(event: Event) {
      this.toggleFocus();
      this.$emit('blur', event);
    },
    onKeypress(event: Event) {
      this.$emit('keypress', event);
    },
    onKeyup(event: Event) {
      this.$emit('keyup', event);
    },
    onPaste(event: Event) {
      this.$emit('paste', event);
    },
    focus() {
      this.input.focus();
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
  },
  watch: {
    inputValue() {
      this.emitUpdateModelValueEvent();
    },
    formattedValue() {
      this.$emit('update:formattedValue', this.formattedValue);
    },
    modelValue() {
      this.inputValue = this.modelValue;
    },
  },
  setup(props) {
    const input = ref();
    const isFocused = ref(false);
    const isClearing = ref(false);
    const inputValue = ref(props.modelValue || null);
    const formattedValue = ref(props.modelValue);
    return {
      input,
      isFocused,
      isClearing,
      inputValue,
      formattedValue,
    };
  },
  mounted() {
    this.focusIfNeeded();
  },
});

export default CurrencyField;
