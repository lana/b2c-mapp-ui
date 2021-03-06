import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  Heading,
  TextParagraph,
};

const props = {
  dataTestId: {
    type: String,
    default: 'content-item',
  },
  title: {
    type: String,
    default: '',
  },
  metaText: {
    type: String,
    default: '',
  },
  success: {
    type: Boolean,
    default: false,
  },
  disabled: Boolean,
};

const data = function () {
  return {
    isPressed: false,
  };
};

const computed = {
  hasIcon() {
    const result = (this.success);
    return result;
  },
  hasMetaText() {
    const result = (this.metaText || this.$slots['custom-meta-text']);
    return result;
  },
};

const methods = {
  toggleIsPressed() {
    this.isPressed = !this.isPressed;
  },
  emitClickEvent(event) {
    if (this.disabled || this.success) { return; }
    this.isPressed = false;
    this.$emit('click', event);
  },
};

const BoxContentItem = {
  components,
  props,
  data,
  computed,
  methods,
};

export default BoxContentItem;
