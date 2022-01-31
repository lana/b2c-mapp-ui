import { Comment, defineComponent } from 'vue';

import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const BoxContentItem = defineComponent({
  name: 'BoxContentItem',
  components: {
    Heading,
    TextParagraph,
  },
  props: {
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
  },
  emits: ['click'],
  data() {
    return {
      isPressed: false,
    };
  },
  computed: {
    hasDefaultSlot() {
      const result = this.$slots.default && this.$slots.default().findIndex((node) => (node.type !== Comment)) !== -1;
      return result;
    },
    hasMetaText() {
      const result = (this.metaText || (this.$slots.customMetaText && this.$slots.customMetaText().findIndex((node) => (node.type !== Comment)) !== -1));
      return result;
    },
  },
  methods: {
    toggleIsPressed() {
      this.isPressed = !this.isPressed;
    },
    emitClickEvent(event: Event) {
      if (this.disabled || this.success) { return; }
      this.isPressed = false;
      this.$emit('click', event);
    },
  },
});

export default BoxContentItem;
