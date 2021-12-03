import Heading from '../Heading/Heading.vue';

const components = {
  Heading,
};

const props = {
  dataTestId: {
    type: String,
    default: 'selection-list',
  },
  options: {
    type: Array,
    default: () => [],
  },
  id: {
    type: String,
    required: true,
  },
  modelValue: [String, Number],
  title: String,
  disabled: Boolean,
  buttonMode: {
    type: Boolean,
    default: false,
  },
};

const emits = ['update:modelValue'];

const data = function () {
  return {
    selectedValue: this.modelValue,
  };
};

const methods = {
  emitUpdateModelValueEvent() {
    this.$emit('update:modelValue', this.selectedValue);
  },
};

const watch = {
  selectedValue() {
    this.emitUpdateModelValueEvent();
  },
  modelValue() {
    this.selectedValue = this.modelValue;
  },
};

const name = 'RadioList';

const RadioList = {
  name,
  components,
  props,
  emits,
  data,
  methods,
  watch,
};

export default RadioList;
