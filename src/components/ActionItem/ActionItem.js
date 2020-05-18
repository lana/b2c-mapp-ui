import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  TextParagraph,
};

const props = {
  title: {
    type: String,
    default: '',
  },
  highlight: Boolean,
  dataTestId: {
    type: String,
    default: 'action-item',
  },
};

const methods = {
  onClick(event) {
    this.$emit('click', event);
  },
};

const ActionItem = {
  components,
  props,
  methods,
};

export default ActionItem;
