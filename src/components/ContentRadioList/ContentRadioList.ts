import { ChevronRightIcon, SuccessMicroillustration as Success } from '@lana/b2c-mapp-ui-assets';
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

interface ContentRadioOption {
  title?: string,
  metaText?: string,
  value: string | number,
  disabled?: boolean
}

const ContentRadioList = defineComponent({
  name: 'ContentRadioList',
  components: {
    ChevronRightIcon,
    Success,
    Heading,
    TextParagraph,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'selection-list',
    },
    options: {
      type: Array as PropType<ContentRadioOption[]>,
      default: () => [] as ContentRadioOption[],
    },
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: null,
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

export default ContentRadioList;
