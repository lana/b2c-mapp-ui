<template>
  <input
    ref="inputRef"
    :value="formattedValue"
  >
</template>

<script>
import { watch } from 'vue';
import { useCurrencyInput } from 'vue-currency-input';

export default {
  name: 'CurrencyInput',
  props: {
    modelValue: {
      type: [Number, String],
      default: '',
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:formattedValue'],
  setup(props) {
    const { inputRef,
      formattedValue,
      setValue } = useCurrencyInput(props.options);

    watch(() => props.modelValue, (value) => {
      setValue(value);
    });

    return { inputRef, formattedValue };
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
    formattedValue() {
      this.$emit('update:formattedValue', this.formattedValue);
    },
  },
};
</script>
