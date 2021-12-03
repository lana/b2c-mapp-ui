import { nextTick } from 'vue';
import { CloseBoldIcon, WarningBoldIcon } from '@lana/b2c-mapp-ui-assets';

import TextParagraph from '../TextParagraph/TextParagraph.vue';
import { sleep } from '../../lib/sleepHelper';

const components = {
  TextParagraph,
  CloseBoldIcon,
  WarningBoldIcon,
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
  modelValue: {
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
  helpText: String,
  hideClearButton: Boolean,
  inputmode: String,
  pattern: String,
};

const emits = ['update:modelValue', 'focus', 'blur', 'keypress', 'keyup', 'paste'];

const data = function () {
  return {
    isFocused: false,
    isClearing: false,
    inputValue: this.modelValue,
  };
};

const computed = {
  maxLengthToUse() {
    const result = (this.maxLength || this.lengthHint);
    return result;
  },
  hasLabel() {
    const result = (this.isClearing || this.showPrefix || !!this.inputValue || this.readonly || this.isFocused);
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
  isClearIconShowing() {
    const result = (this.inputValue && !(this.hideClearButton || this.readonly || this.disabled));
    return result;
  },
};

const methods = {
  setFocus(focus) {
    this.isFocused = focus;
  },
  async focusIfNeeded() {
    if (!(this.startFocused && this.$refs.input)) { return; }
    await nextTick();
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
    this.setFocus(true);
    this.$emit('focus', event);
  },
  onBlur(event) {
    this.setFocus(false);
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
    this.inputValue = '';
    await sleep(50); // NOTE: sleep must be used here because `this.$nextTick()` is not waiting long enough in this case
    this.focus();
    this.isClearing = false;
  },
};

const watch = {
  inputValue() {
    this.emitUpdateModelValueEvent();
  },
  modelValue() {
    this.inputValue = this.modelValue;
  },
};

const mounted = function () {
  this.focusIfNeeded();
};

const FormField = {
  components,
  props,
  emits,
  data,
  computed,
  methods,
  mounted,
  watch,
};

export default FormField;
