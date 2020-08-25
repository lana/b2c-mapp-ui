import { ForwardIcon } from '@lana/b2c-mapp-ui-assets';

import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  ForwardIcon,
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
  disabled: Boolean,
  noBorder: Boolean,
};

const methods = {
  emitClickEvent(event) {
    if (this.disabled) { return; }
    this.$emit('click', event);
  },
};

const ContentItem = {
  components,
  props,
  methods,
};

export default ContentItem;
