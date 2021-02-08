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
  hasForwardButton: {
    type: Boolean,
    default: true,
  },
  success: {
    type: Boolean,
    default: false,
  },
  disabled: Boolean,
  noBorder: Boolean,
};

const data = function () {
  return {
    isPressed: false,
  };
};

const computed = {
  hasIcon() {
    const result = (this.success || this.hasForwardButton);
    return result;
  },
  hasMetaText() {
    const result = (this.metaText || this.$slots['custom-meta-text']);
    return result;
  },
  iconName() {
    const result = (this.hasForwardButton && !this.success) ? 'ChevronRightIcon' : 'Success';
    return result;
  },
  iconDataTestId() {
    const result = `${(this.success) ? 'success-' : ''}${this.dataTestId}-forward-icon`;
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

const ContentItem = {
  components,
  props,
  data,
  computed,
  methods,
};

export default ContentItem;
