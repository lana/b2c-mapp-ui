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
  modelValue: {
    type: [String, Number],
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
  inputmode: String,
  pattern: String,
};

const emits = ['update:modelValue', 'focus', 'blur', 'keypress', 'keyup', 'paste'];

const data = function () {
  return {
    inputValue: this.modelValue,
  };
};

const computed = {
  maxLengthToUse() {
    const result = (this.maxLength || this.lengthHint);
    return result;
  },
};

const methods = {
  emitUpdateModelValueEvent() {
    this.$emit('update:modelValue', this.inputValue);
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
    this.emitUpdateModelValueEvent();
  },
  modelValue() {
    this.inputValue = this.modelValue;
  },
};

const TextField = {
  components,
  computed,
  props,
  emits,
  data,
  methods,
  watch,
};

export default TextField;
