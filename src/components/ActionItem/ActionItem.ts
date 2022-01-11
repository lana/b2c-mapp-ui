import { defineComponent, Comment } from 'vue';

import TextParagraph from '../TextParagraph/TextParagraph.vue';

const errorStatuses = [
  'rejected',
  'expired',
];

const ActionItem = defineComponent({
  name: 'ActionItem',
  components: {
    TextParagraph,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: '',
    },
    highlight: Boolean,
    dataTestId: {
      type: String,
      default: 'action-item',
    },
  },
  emits: ['click'],
  computed: {
    hasDefaultSlot() {
      const result = this.$slots.default && this.$slots.default().findIndex((node) => (node.type !== Comment)) !== -1;
      return result;
    },
    hasErrorStatus() {
      if (!this.status) { return; }
      const result = errorStatuses.includes(this.status.toLowerCase());
      return result;
    },
    descriptionTextColor() {
      if (!this.hasErrorStatus) { return; }
      return 'red-500';
    },
  },
  methods: {
    onClick(event: Event) {
      this.$emit('click', event);
    },
  },
});

export default ActionItem;
