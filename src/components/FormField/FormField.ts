import type { PropType } from 'vue';
import { defineComponent, nextTick, ref } from 'vue';
import { CloseBoldIcon, WarningBoldIcon } from '@lana/b2c-mapp-ui-assets';

import TextParagraph from '../TextParagraph/TextParagraph.vue';
import { sleep } from '../../lib/sleepHelper';

const FormField = defineComponent({
  name: 'FormField',
  components: {
    TextParagraph,
    CloseBoldIcon,
    WarningBoldIcon,
  },
  props: {
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
    type: {
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
    helpText: {
      type: String,
      default: '',
    },
    hideClearButton: Boolean,
    inputmode: {
      type: String as PropType<'search' | 'text' | 'decimal' | 'numeric' | 'none' | 'tel' | 'url' | 'email'>,
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
  },
  methods: {
    setFocus(focus: boolean) {
      this.isFocused = focus;
    },
    async focusIfNeeded() {
      if (!(this.startFocused && this.input)) { return; }
      await nextTick();
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
      this.setFocus(true);
      this.$emit('focus', event);
    },
    onBlur(event: Event) {
      this.setFocus(false);
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
      this.inputValue = '';
      await sleep(50); // NOTE: sleep must be used here because `this.$nextTick()` is not waiting long enough in this case
      this.focus();
      this.isClearing = false;
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
    const input = ref();
    const isFocused = ref(false);
    const isClearing = ref(false);
    const inputValue = ref(props.modelValue);
    return { input, isFocused, isClearing, inputValue };
  },
  mounted() {
    this.focusIfNeeded();
  },
});

export default FormField;
