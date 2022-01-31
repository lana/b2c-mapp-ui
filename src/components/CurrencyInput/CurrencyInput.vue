<template>
  <input ref="inputRef">
</template>

<script lang="ts">
import type { CurrencyInputOptions } from 'vue-currency-input';
import { useCurrencyInput, parse } from 'vue-currency-input';
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
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
      type: Object as PropType<CurrencyInputOptions>,
      default: () => ({}),
    },
  },
  emits: ['update:formattedValue', 'update:modelValue'],
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
      const modelValue = parse(this.inputValue || '', this.options);
      this.$emit('update:modelValue', modelValue);
    },
    modelValue() {
      this.setValue(Number(`${this.modelValue}`));
    },
  },
  setup(props) {
    const { inputRef,
      formattedValue: inputValue,
      setValue } = useCurrencyInput(props.options);

    return { inputRef, inputValue, setValue };
  },
});
</script>
