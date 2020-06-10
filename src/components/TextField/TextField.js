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
    this.$refs.field.focus();
  },
  onFocus(event) {
    this.$emit('focus', event);
  },
  onBlur(event) {
    this.$emit('blur', event);
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
