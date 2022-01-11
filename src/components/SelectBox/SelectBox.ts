import { ExpandSmallIcon, WarningBoldIcon } from '@lana/b2c-mapp-ui-assets';
import type { PropType } from 'vue';
import { defineComponent, ref } from 'vue';

import TextParagraph from '../TextParagraph/TextParagraph.vue';

interface SelectBoxOption {
  value: number | string,
  label: string,
  disabled: boolean,
  selected: boolean,
}

const SelectBox = defineComponent({
  name: 'SelectBox',
  components: {
    TextParagraph,
    ExpandSmallIcon,
    WarningBoldIcon,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'selector',
    },
    options: {
      type: Array as PropType<Array<SelectBoxOption>>,
      default: () => [] as SelectBoxOption[],
    },
    modelValue: {
      type: String,
      default: '',
    },
    label: {
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
    disabled: Boolean,
    readonly: Boolean,
    errorLabel: {
      type: String,
      default: '',
    },
    helpText: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'focus', 'blur', 'keypress', 'keyup', 'paste'],
  computed: {
    errorLabelOrHelpText() {
      const result = (this.errorLabel || this.helpText);
      return result;
    },
    hasEmptyOption() {
      if (!(this.options && this.options.length)) { return; }
      const hasEmptyValue = ({ value }: { value: string | number }) => !value;
      const result = this.options.some(hasEmptyValue);
      return result;
    },
  },
  methods: {
    emitUpdateModelValueEvent() {
      this.$emit('update:modelValue', this.selectedValue);
    },
    toggleFocus() {
      this.isFocused = !this.isFocused;
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
      if (!this.input) { return; }
      this.input.focus();
    },
    blur() {
      if (!this.input) { return; }
      this.input.blur();
    },
  },
  watch: {
    selectedValue() {
      this.emitUpdateModelValueEvent();
    },
    modelValue() {
      this.selectedValue = this.modelValue;
    },
  },
  setup(props) {
    const input = ref();
    const selectedValue = ref(props.modelValue);
    const isFocused = ref(false);
    return { input, selectedValue, isFocused };
  },
});

export type { SelectBoxOption };

export default SelectBox;
