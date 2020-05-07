import FormField from '../FormField/FormField.vue';

const components = {
  FormField,
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
};

const data = function () {
  return {
    inputValue: this.value,
  };
};

const methods = {
  emitInputEvent() {
    this.$emit('input', this.inputValue);
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
  props,
  data,
  methods,
  watch,
};

export default TextField;
