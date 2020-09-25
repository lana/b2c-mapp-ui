import FormField from '../FormField/FormField.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  FormField,
  TextParagraph,
};

const props = {
  dataTestId: {
    type: String,
    default: 'text-field',
  },
  type: {
    type: String,
    default: 'text',
  },
  maxLength: Number,
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
  lengthHint: Number,
  lengthHintLabel: String,
  helpText: String,
  hideClearButton: Boolean,
};

const data = function () {
  return {
    inputValue: this.value,
  };
};

const computed = {
  maxLengthToUse() {
    const result = (this.maxLength || this.lengthHint);
    return result;
  },
};

const methods = {
  emitInputEvent() {
    this.$emit('input', this.inputValue);
  },
  focus() {
    if (!this.$refs.field) { return; }
    this.$refs.field.focus();
  },
  blur() {
    if (!this.$refs.field) { return; }
    this.$refs.field.blur();
  },
  onFocus(event) {
    this.$emit('focus', event);
  },
  onBlur(event) {
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
};

const watch = {
  inputValue() {
    this.emitInputEvent();
  },
  value() {
    this.inputValue = this.value;
  },
};

const TextField = {
  components,
  computed,
  props,
  data,
  methods,
  watch,
};

export default TextField;
