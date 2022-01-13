import type { PropType } from 'vue';
import { defineComponent } from 'vue';

import Heading from '../Heading/Heading.vue';

interface RadioOption {
  label?: string,
  htmlLabel?: string,
  value: string | number,
}

const RadioList = defineComponent({
  name: 'RadioList',
  components: {
    Heading,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'selection-list',
    },
    options: {
      type: Array as PropType<RadioOption[]>,
      default: () => [] as RadioOption[],
    },
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
    title: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    buttonMode: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      selectedValue: this.modelValue,
    };
  },
  methods: {
    emitUpdateModelValueEvent() {
      this.$emit('update:modelValue', this.selectedValue);
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
});

export default RadioList;
