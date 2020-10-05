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
    required: true,
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

const computed = {
  hasIcon() {
    const result = (this.success || this.hasForwardButton);
    return result;
  },
  icon() {
    const result = (this.hasForwardButton && !this.success) ? 'ChevronRightIcon' : 'Success';
    return result;
  },
  dataTestIdValue() {
    const result = `${(this.success) ? 'success-' : ''}${this.dataTestId}-forward-icon`;
    return result;
  },
};

const methods = {
  emitClickEvent(event) {
    if (this.disabled || this.success) { return; }
    this.$emit('click', event);
  },
};

const ContentItem = {
  computed,
  components,
  props,
  methods,
};

export default ContentItem;
