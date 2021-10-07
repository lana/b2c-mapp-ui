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

const emits = ['click'];

const computed = {
  uniqueId() {
    const base = `${this.title}-${this.text}`;
    const result = `${Array.from(base).reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0)}`;
    return result;
  },
};

const methods = {
  onClick(event) {
    this.$emit('click', event);
  },
};

const CopyableListItem = {
  components,
  props,
  emits,
  computed,
  methods,
};

export default CopyableListItem;
