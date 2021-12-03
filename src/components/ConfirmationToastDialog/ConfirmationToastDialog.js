import Button from '../Button/Button.vue';
import Heading from '../Heading/Heading.vue';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';
import Wrapper from '../Wrapper/Wrapper.vue';

const components = {
  Button,
  Heading,
  ScrollWrapper,
  TextParagraph,
  Wrapper,
};

const props = {
  dataTestId: {
    type: String,
    default: 'bottom-dialog',
  },
  title: String,
  description: String,
  confirmButtonText: String,
  secondaryButtonText: String,
  modelValue: Boolean,
  loading: Boolean,
  loadingText: {
    type: String,
    default: 'Cargando...',
  },
  disabled: Boolean,
};

const emits = ['update:modelValue', 'dismiss', 'confirm', 'secondary'];

const data = function () {
  return {
    isShowing: this.modelValue,
  };
};

const methods = {
  emitUpdateModelValueEvent() {
    this.$emit('update:modelValue', this.isShowing);
    if (!this.isShowing) { this.$emit('dismiss'); }
  },
  onConfirm() {
    this.$emit('confirm');
    this.dismissDialog();
  },
  onSecondary() {
    this.$emit('secondary');
    this.dismissDialog();
  },
  dismissDialog() {
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

const name = 'ConfirmationToastDialog';

const ConfirmationToastDialog = {
  name,
  components,
  props,
  emits,
  data,
  methods,
  watch,
};

export default ConfirmationToastDialog;
