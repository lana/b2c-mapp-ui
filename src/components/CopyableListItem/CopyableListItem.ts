import { defineComponent } from 'vue';

import TextParagraph from '../TextParagraph/TextParagraph.vue';
import CopyToClipboardButton from '../CopyToClipboardButton/CopyToClipboardButton.vue';

const CopyableListItem = defineComponent({
  name: 'CopyableListItem',
  components: {
    CopyToClipboardButton,
    TextParagraph,
  },
  props: {
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
  },
  emits: ['click'],
  computed: {
    uniqueId() {
      const base = `${this.title}-${this.text}`;
      const result = `${Array.from(base).reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0)}`;
      return result;
    },
  },
  methods: {
    onClick(event: Event) {
      this.$emit('click', event);
    },
  },
});

export default CopyableListItem;
