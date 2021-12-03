import { ChevronRightIcon, SuccessMicroillustration as Success } from '@lana/b2c-mapp-ui-assets';

import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  ChevronRightIcon,
  Success,
  Heading,
  TextParagraph,
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

const name = 'ContentRadioList';

const ContentRadioList = {
  name,
  components,
  props,
  emits,
  data,
  methods,
  watch,
};

export default ContentRadioList;
