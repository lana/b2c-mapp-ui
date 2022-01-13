import { defineComponent, ref } from 'vue';

import FormField from '../FormField/FormField.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const TextField = defineComponent({
  name: 'TextField',
  components: {
    FormField,
    TextParagraph,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'text-field',
    },
    type: {
      type: String,
      default: 'text',
    },
    maxLength: {
      type: Number,
      default: null,
    },
    modelValue: {
      type: [String, Number],
      default: '',
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
    lengthHint: {
      type: Number,
      default: null,
    },
    lengthHintLabel: {
      type: String,
      default: '',
    },
    helpText: {
      type: String,
      default: '',
    },
    hideClearButton: Boolean,
    inputmode: {
      type: String,
      default: '',
    },
    pattern: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'focus', 'blur', 'keypress', 'keyup', 'paste'],
  computed: {
    maxLengthToUse() {
      const result = (this.maxLength || this.lengthHint);
      return result;
    },
  },
  methods: {
    emitUpdateModelValueEvent() {
      this.$emit('update:modelValue', this.inputValue);
    },
    focus() {
      if (!this.field) { return; }
      this.field.focus();
    },
    blur() {
      if (!this.field) { return; }
      this.field.blur();
    },
    onFocus(event: Event) {
      this.$emit('focus', event);
    },
    onBlur(event: Event) {
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
  },
  watch: {
    inputValue() {
      this.emitUpdateModelValueEvent();
    },
    modelValue() {
      this.inputValue = this.modelValue;
    },
  },
  setup(props) {
    const field = ref();
    const inputValue = ref(props.modelValue);
    return {
      field,
      inputValue,
    };
  },
});

export default TextField;
