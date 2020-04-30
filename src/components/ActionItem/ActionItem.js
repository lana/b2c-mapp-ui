import TextParagraph from '../TextParagraph/TextParagraph.vue';

const availableColors = [
  'blue',
  'green',
  'yellow',
  'brown',
  'purple',
];

const components = {
  TextParagraph,
};

const props = {
  title: {
    type: String,
    default: '',
  },
  highlight: Boolean,
  color: {
    type: String,
    default: '',
    validator(value) { return (!value || availableColors.includes(value)); },
  },
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

export { availableColors };

export default ActionItem;
