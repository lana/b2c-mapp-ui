import { defineComponent } from 'vue';

import Heading from '../Heading/Heading.vue';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const ConfirmationModalDialog = defineComponent({
  name: 'ConfirmationModalDialog',
  components: {
    Heading,
    ScrollWrapper,
    TextParagraph,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'dialog',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    confirmButtonText: {
      type: String,
      default: '',
    },
    dismissButtonText: {
      type: String,
      default: '',
    },
    modelValue: Boolean,
    loading: Boolean,
    confirmButtonDisabled: {
      type: Boolean,
      default: false,
    },
    dismissButtonDisabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'close', 'confirm', 'dismiss'],
  data() {
    return {
      isShowing: this.modelValue,
    };
  },
  methods: {
    emitUpdateModelValueEvent() {
      this.$emit('update:modelValue', this.isShowing);
      if (!this.isShowing) { this.$emit('close'); }
    },
    onConfirm() {
      this.$emit('confirm');
      this.hideDialog();
    },
    onDismiss() {
      this.$emit('dismiss');
      this.hideDialog();
    },
    hideDialog() {
      this.isShowing = false;
    },
  },
  watch: {
    isShowing() {
      this.emitUpdateModelValueEvent();
    },
    modelValue() {
      this.isShowing = this.modelValue;
    },
  },
});

export default ConfirmationModalDialog;
