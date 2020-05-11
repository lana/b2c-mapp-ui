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

const CopyableListItem = {
  components,
  props,
};

export default CopyableListItem;
