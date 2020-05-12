import { ForwardIcon } from '@lana/b2c-mapp-ui-assets';

import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const availableColors = [
  'blue-300',
  'yellow-300',
  'green-300',
  'brown-300',
  'purple-300',
  'black-100',
  'black-200',
  'black-300',
];

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
  color: {
    type: String,
    default: '',
    validator(value) { return (!value || availableColors.includes(value)); },
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

export {
  availableColors,
};

export default ContentItem;
