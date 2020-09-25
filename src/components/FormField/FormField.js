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
  helpText: String,
  hideClearButton: Boolean,
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
  async clearValue() {
    this.inputValue = '';
    this.blur();
    await sleep(50); // NOTE: sleep must be used here because `this.$nextTick()` is not waiting long enough in this case
    this.focus();
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
