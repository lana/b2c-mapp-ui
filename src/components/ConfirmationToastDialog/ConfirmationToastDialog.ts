import { defineComponent } from 'vue';

import Button from '../Button/Button.vue';
import Heading from '../Heading/Heading.vue';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';
import Wrapper from '../Wrapper/Wrapper.vue';

const ConfirmationToastDialog = defineComponent({
  name: 'ConfirmationToastDialog',
  components: {
    Button,
    Heading,
    ScrollWrapper,
    TextParagraph,
    Wrapper,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'bottom-dialog',
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
    secondaryButtonText: {
      type: String,
      default: '',
    },
    modelValue: Boolean,
    loading: Boolean,
    loadingText: {
      type: String,
      default: 'Cargando...',
    },
    disabled: Boolean,
  },
  emits: ['update:modelValue', 'dismiss', 'confirm', 'secondary'],
  data() {
    return {
      isShowing: this.modelValue,
    };
  },
  methods: {
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

export default ConfirmationToastDialog;
