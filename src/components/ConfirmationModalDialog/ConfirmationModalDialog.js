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
  value: Boolean,
  loading: Boolean,
  disabled: Boolean,
};

const data = function () {
  return {
    isShowing: this.value,
  };
};

const methods = {
  emitInputEvent() {
    this.$emit('input', this.isShowing);
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
    this.emitInputEvent();
  },
  value() {
    this.isShowing = this.value;
  },
};

const ConfirmationModalDialog = {
  components,
  props,
  data,
  methods,
  watch,
};

export default ConfirmationModalDialog;
