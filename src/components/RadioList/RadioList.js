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
  value: String,
  title: String,
  disabled: Boolean,
};

const data = function () {
  return {
    selectedValue: this.value,
  };
};

const methods = {
  emitInputEvent() {
    this.$emit('input', this.selectedValue);
  },
};

const watch = {
  selectedValue() {
    this.emitInputEvent();
  },
  value() {
    this.selectedValue = this.value;
  },
};

const RadioList = {
  components,
  props,
  data,
  methods,
  watch,
};

export default RadioList;
