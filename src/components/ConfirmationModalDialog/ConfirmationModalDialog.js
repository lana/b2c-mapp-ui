import Heading from '../Heading/Heading.vue';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  Heading,
  ScrollWrapper,
  TextParagraph,
};

const props = {
  dataTestId: {
    type: String,
    default: 'dialog',
  },
  title: String,
  description: String,
  confirmButtonText: String,
  dismissButtonText: String,
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
};

const emits = ['update:modelValue', 'close', 'confirm', 'dismiss'];

const data = function () {
  return {
    isShowing: this.modelValue,
  };
};

const methods = {
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
};

const watch = {
  isShowing() {
    this.emitUpdateModelValueEvent();
  },
  modelValue() {
    this.isShowing = this.modelValue;
  },
};

const ConfirmationModalDialog = {
  components,
  props,
  emits,
  data,
  methods,
  watch,
};

export default ConfirmationModalDialog;
