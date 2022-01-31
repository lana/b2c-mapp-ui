import { Comment, defineComponent } from 'vue';

import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.vue';
import Checkbox from '../Checkbox/Checkbox.vue';

const ListItem = defineComponent({
  name: 'ListItem',
  components: {
    Checkbox,
    Heading,
    TextParagraph,
    ToggleSwitch,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'list-item',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    modelValue: Boolean,
    transparent: Boolean,
    linkTitle: {
      type: String,
      default: '',
    },
    hasToggle: Boolean,
    hasCheckbox: Boolean,
    disabled: Boolean,
    rightLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'linkClick'],
  data() {
    return {
      isChecked: this.modelValue,
    };
  },
  methods: {
    emitUpdateModelValueEvent() {
      this.$emit('update:modelValue', this.isChecked);
    },
    onLinkClick(event: Event) {
      if (this.disabled) { return; }
      this.$emit('linkClick', event);
    },
  },
  watch: {
    isChecked() {
      this.emitUpdateModelValueEvent();
    },
    modelValue() {
      this.isChecked = this.modelValue;
    },
  },
  computed: {
    hasDefaultSlot() {
      const result = this.$slots.default && this.$slots.default().findIndex((node) => (node.type !== Comment)) !== -1;
      return result;
    },
    isRightLabelShowing() {
      const result = (!this.hasToggle && this.rightLabel);
      return result;
    },
  },
});

export default ListItem;
