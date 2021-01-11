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
  value: [String, Number],
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

const ContentRadioList = {
  components,
  props,
  data,
  methods,
  watch,
};

export default ContentRadioList;
