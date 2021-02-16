import TextParagraph from '../TextParagraph/TextParagraph.vue';
import CopyToClipboardButton from '../CopyToClipboardButton/CopyToClipboardButton.vue';

const components = {
  CopyToClipboardButton,
  TextParagraph,
};

const props = {
  dataTestId: {
    type: String,
    default: 'copyable-list-item',
  },
  title: {
    type: String,
    default: '',
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
  hideButton: Boolean,
  disabled: Boolean,
};

const methods = {
  onClick(event) {
    this.$emit('click', event);
  },
};

const CopyableListItem = {
  components,
  props,
  methods,
};

export default CopyableListItem;
