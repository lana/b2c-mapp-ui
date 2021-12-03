<template>
  <input ref="inputRef"
         v-model="inputValue"
  >
</template>

<script>
import { useCurrencyInput, parse } from 'vue-currency-input';

export default {
  name: 'CurrencyInput',
  props: {
    modelValue: {
      type: [Number, String],
      default: null,
    },
    formattedValue: {
      type: String,
      default: '',
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:formattedValue', 'update:modelValue'],
  setup(props) {
    const { inputRef,
      formattedValue: inputValue,
      setValue } = useCurrencyInput(props.options);

    return { inputRef, inputValue, setValue };
  },
  methods: {
    focus() {
      this.inputRef.focus();
    },
    blur() {
      this.inputRef.blur();
    },
  },
  watch: {
    inputValue() {
      this.$emit('update:formattedValue', this.inputValue);
      const modelValue = parse(this.inputValue, this.options);
      this.$emit('update:modelValue', modelValue);
    },
    modelValue() {
      this.setValue(this.modelValue);
    },
  },
};
</script>
