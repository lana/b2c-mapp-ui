import { ChevronRightIcon, SuccessMicroillustration as Success } from '@lana/b2c-mapp-ui-assets';
import { Comment, defineComponent } from 'vue';

import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const ContentItem = defineComponent({
  name: 'ContentItem',
  components: {
    ChevronRightIcon,
    Success,
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
    hasIcon() {
      const result = (this.success || this.hasForwardButton);
      return result;
    },
    hasMetaText() {
      const result = (this.metaText || (this.$slots.customMetaText && this.$slots.customMetaText().findIndex((node) => (node.type !== Comment)) !== -1));
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
  },
  methods: {
    toggleIsPressed() {
      this.isPressed = !this.isPressed;
    },
    emitClickEvent(event: MouseEvent) {
      if (this.disabled || this.success) { return; }
      this.isPressed = false;
      this.$emit('click', event);
    },
  },
});

export default ContentItem;
